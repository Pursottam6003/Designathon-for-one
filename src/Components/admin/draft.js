import React, { Component } from "react"
import { Field } from "../form/Field"
import { DndMain } from "../dnd/dndMain"
import { fs } from '../../config/config'
import { Categories, BiMonthlyNames, getBiMonth } from "../../helpers"

class DraftForm extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.props.handleChange(name, value)
  }

  render() {
    const { title, vol, iss, month } = this.props
    return (
      <form id="draftForm" className="draft-form form-group">
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
        tasks: {...tasks, ...fetchedOrders.tasks},
        columns: {...columns, ...fetchedOrders.columns},
        columnOrder: [...columnOrder, ...fetchedOrders.columnOrder]
      } 
    })
  }

  handlePublish = () => {
    const { orders, title, vol, iss, month } = this.state

    const year = month.slice(0, 4)
    const biMonth = `MarApril`

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

    fs.collection(`issues/${year}/${biMonth}`).doc().set(publishObj).then( async () => {
      console.log('Published!');

      // delete all approved
      const approvedFs = await fs.collection(`approved`).get();
      for (let snap of approvedFs.docs) {
        fs.collection(`approved`).doc(`${snap.id}`).delete().then(console.log(`Deleted ${snap.id}`));
      }

      // upload cover
      const coverObj = {
        Title: title,
        Vol: vol,
        Issue: iss,
        Month: month,
        Year: year,
        ImageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
        Link: `./issues/${year}/${biMonth}`
      }
      fs.collection(`PastPublications`).doc().set(coverObj).then(() => {
        console.log('Cover uploaded');
      })
    })
  }

  handleForm = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleUpdateOrders = (orders) => {
    this.setState({
      orders: orders
    })
  }

  switchView = (e) => {
    this.setState({ formView: !this.state.formView })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { title, vol, iss, month, formView, orders } = this.state
    const formProps = { title: title, vol: vol, iss: iss, month: month }

    return (
      <div className="draft">
          <header className="page-header container">
            <h1 className="heading">Draft an Issue</h1>
          </header>

          <main className="workspace container">
            {formView ? (
              <DraftForm handleChange={this.handleForm} {...formProps} />
            ) : (
              <DndMain orders={orders} updateOrders={this.handleUpdateOrders} />
            )}

            <div className="btns-group">
              <button className="btn" onClick={this.switchView} type="button">
                {formView ? 'Next' : 'Previous'}
              </button>

              {formView ? (
                <button className="btn submit" type="button" disabled>
                  Publish
                </button>
              ) : (
                <button className="btn submit" onClick={this.handlePublish} type="button">
                  Publish
                </button>
              )}
            </div>
          </main>
      </div>
    )
  }
}