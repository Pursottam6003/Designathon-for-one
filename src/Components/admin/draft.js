import React, { Component } from "react"
import { Field } from "../form/Field"
import { DndMain } from "../dnd/dndMain"
import { fs } from "../../config/config"
import { Categories, getBiMonth, BiMonthlyNames } from "../../helpers"

class DraftForm extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.props.handleChange(name, value)
  }

  render() {
    const { title, vol, iss, month } = this.props
    return (
      <form id="draftForm" className="draft-form form-group container">
        <input type="text" required name="title" className='form-control form-title' placeholder="Title of newsletter" onChange={this.handleChange} value={title} />
        <p className='sub-label'>Issue details</p>
        <Field labeltxt="Volume no." showLabel={vol.length}>
          <input type="text" required className='form-control' name="vol" value={vol} onChange={this.handleChange} placeholder="Volume no. (in Romans)" />
        </Field>
        <Field labeltxt="Issue" showLabel={iss.length}>
          <input type="number" min="1" required className='form-control' name="iss" value={iss} onChange={this.handleChange} placeholder="Issue" />
        </Field>
        <p className='sub-label'>Month and year</p>
        <Field labeltxt="Month" showLabel={month.length}>
          <input type="month" className='form-control' required name="month" value={month} onChange={this.handleChange} placeholder="Month" />
        </Field>
      </form>
    )
  }
}

export class Draft extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    formView: true,
    preview: null,
    published: false,
    orders: {
      tasks: {},
      columns: {
        '0': {
          id: '0',
          title: 'Highlights',
          taskIds: [],
        },
      },
      columnOrder: ['0'],
    }
  }
  state = this.initialState

  fetchData = async () => {
    const data = await fs.collection(`approved`).get();
    const fetchedOrders = {
      tasks: {}, columns: {}, columnOrder: []
    }
    for (let snap of data.docs) {
      const sub = snap.data()
      const subObj = {
        id: snap.id,
        author: sub.author,
        created: sub.created,
        eventDate: sub.eventDate,
        content: sub.desc,
        brochureUrl: sub.brochureUrl,
        imgCaption: sub.imgCaption,
        imgUrl: sub.imgUrl,
        title: sub.title
      }

      fetchedOrders.tasks[subObj.id] = subObj
      fetchedOrders.columns[sub.categoryId] = {
        id: sub.categoryId,
        title: Categories[sub.categoryId],
        taskIds: fetchedOrders.columns[sub.categoryId] ? [
          ...fetchedOrders.columns[sub.categoryId].taskIds, subObj.id
        ] : [subObj.id],
      }
      fetchedOrders.columnOrder = fetchedOrders.columnOrder.includes(sub.categoryId) ?
        [...fetchedOrders.columnOrder] :
        [...fetchedOrders.columnOrder, sub.categoryId]
    }

    const { tasks, columns, columnOrder } = this.state.orders
    this.setState({
      orders: {
        tasks: { ...tasks, ...fetchedOrders.tasks },
        columns: { ...columns, ...fetchedOrders.columns },
        columnOrder: [...columnOrder, ...fetchedOrders.columnOrder]
      }
    })
  }

  handlePreviewIssue = (e) => {
    e.preventDefault();
    const { orders, title, vol, iss, month } = this.state
    document.getElementById("publishBtn").setAttribute("disabled", "");

    const year = month.slice(0, 4)
    const biMonth = BiMonthlyNames[getBiMonth(month)][0]
    const publishObj = {
      orders: {
        columnOrder: orders.columnOrder,
        columns: orders.columns,
        tasks: orders.tasks
      },
      title: title,
      vol: vol,
      iss: iss,
      month: month,
    }

    const previewLink = `previews/${year}/${biMonth}`

    // delete existing previes
    fs.collection(previewLink).get()
      .then(previews => {
        console.log(previews.docs);
        console.log('Deleting old previews');
        let left = previews.docs.length;
        console.log(`${left} to delete`);
        for (let snap of previews.docs) {
          fs.collection(previewLink).doc(`${snap.id}`).delete().then(() => {
            console.log(`Deleted ${snap.id}`);
            if (left === 0) return;
          })
            .catch(err => { throw err; })
        }
      })
      .then(() => {
        console.log(`Generating preview`)
        fs.collection(previewLink).doc().set(publishObj)
          .then(async () => {
            console.log('Preview generated!');
            this.setState({
              preview: previewLink,
            }, () => {
              document.getElementById("publishBtn").removeAttribute("disabled");
            })
          })
      })
  }

  handlePublish = () => {
    const { orders, title, vol, iss, month } = this.state
    document.getElementById("publishBtn").setAttribute("disabled", "");

    const year = month.slice(0, 4)
    const biMonth = BiMonthlyNames[getBiMonth(month)][0]
    const publishObj = {
      orders: {
        columnOrder: orders.columnOrder,
        columns: orders.columns,
        tasks: orders.tasks
      },
      title: title,
      vol: vol,
      iss: iss,
      month: month,
    }

    fs.collection(`issues/${year}/${biMonth}`).doc().set(publishObj).then(async () => {
      console.log('Published!');

      // delete all approved
      const approvedFs = await fs.collection(`approved`).get();
      for (let snap of approvedFs.docs) {
        fs.collection(`approved`).doc(`${snap.id}`).delete().then(console.log(`Deleted ${snap.id}`));
      }

      // upload cover
      const coverObj = {
        Title: title,
        publishedAt: new Date().toLocaleString('en-IN'),
        Vol: vol,
        Issue: iss,
        Month: biMonth,
        Year: year,
        ImageUrl: 'https://images.unsplash.com/photo-1667386513218-f4fab772a3eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        Link: `./issues/${year}/${biMonth}`,
        PdfUrl: ''
      }
      fs.collection(`PastPublications`).doc().set(coverObj).then(() => {
        console.log('Cover uploaded');
        this.setState({
          ...this.initialState,
          published: true,
          preview: this.state.preview
        })
      })
    })
    document.getElementById("publishBtn").removeAttribute("disabled");
  }

  handleForm = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleUpdateOrders = (orders) => {
    this.setState({
      orders: orders,
      preview: null
    })
  }

  switchView = (e) => {
    this.setState({ formView: !this.state.formView })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { title, vol, iss, month, formView, orders, preview, published } = this.state
    const formProps = { title: title, vol: vol, iss: iss, month: month }

    return (
      <div className="draft">
        <header className="page-header container">
          <h1 className="heading">Draft an Issue</h1>

          <div>
            <div className="btns-group">
              {!formView && !preview && (
                <button
                  form="draftForm"
                  className="btn submit"
                  id="publishBtn"
                  onClick={this.handlePreviewIssue}
                  type="submit"
                >
                  Generate preview
                </button>
              )}

              {preview && (<>
                <a target="_blank" rel="noreferrer" href={`/${preview}`}>
                  Show preview
                </a>

                <button
                  form="draftForm"
                  className="btn submit"
                  id="publishBtn"
                  onClick={this.handlePublish}
                  type="submit"
                >
                  Publish
                </button>
              </>)}
              {title && iss && month && vol && (
                <button className="btn" onClick={this.switchView} type="button">
                  {formView ? 'Next' : 'Previous'}
                </button>
              )}
            </div>
          </div>

        </header>

        <main className="workspace">
          {published && (
            <div className="container" >
              <div style={{
                color: '#155724',
                backgroundColor: '#d4edda',
                borderColor: '#c3e6cb',
                padding: '1.75rem 1.25rem',
                margin: '2rem 0',
              }}>
                <h3>Published! <a href={`/${preview}`}>Check it out</a></h3>
              </div>
            </div>
          )}

          {
            formView ? (
              <DraftForm handleChange={this.handleForm} {...formProps} />
            ) : (
              <DndMain orders={orders} updateOrders={this.handleUpdateOrders} />
            )
          }
        </main >
      </div >
    )
  }
}