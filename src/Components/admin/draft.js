import React, { Component } from "react"
import { DndMain } from "../dnd/dndMain"
import { fs, db } from "../../config/config"
import { getBiMonth, BiMonthlyNames, CategoryTitles } from "../../helpers/helpers"
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'
import { collection, getDocs, query, where } from "firebase/firestore"
import WidthErrorGif from '../../images/width.gif'
import { DateInput, TextInput } from "../formNew/InputComponents"
import styles from '../formNew/Form.module.scss'
import cx from "classnames"

const DraftForm = ({ title, vol, iss, month, handleChange }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  return (
    <form id="draftForm" className={cx("container", 'draft-form', styles.form)}>
      <div className={styles['form-header']}>
        <input
          type="text"
          name="title"
          className={cx(styles['form-title'], styles['form-control'])}
          placeholder="Title of newsletter"
          onChange={handleInput}
          value={title}
        />
      </div>
      <p className={styles['section-heading']}>Issue details</p>
      <TextInput required={true} name='vol' placeholder='Volume no. (in Romans)' onChange={handleInput} value={vol} />
      <TextInput type="number" attrs={{ min: 1 }} required={true} name='iss' placeholder='Issue' onChange={handleInput} value={iss} />
      <p className={styles['section-heading']}>Month and year</p>
      <DateInput type="month" required={true} name='month' onChange={handleInput} value={month} />
    </form>
  )
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
    loading: false,
    orders: {
      activities: {},
      subSections: {},
      sections: {
        'default': { id: 'default', title: 'All activiites', subSecIds: [] },
        's0': { id: 's0', title: 'Academic Activities', subSecIds: [] },
        's1': { id: 's1', title: 'Research & Development', subSecIds: [] },
        's2': { id: 's2', title: 'Faculty Empowerment Programs', subSecIds: [] },
        's3': { id: 's3', title: 'Awards', subSecIds: [] },
        's4': { id: 's4', title: 'Outreach Activities', subSecIds: [] },
        's5': { id: 's5', title: 'Alumni Association', subSecIds: [] },
        's6': { id: 's6', title: 'Upcoming Events', subSecIds: [] },
      },
      sectionOrder: ['default', 's0', 's1', 's2', 's3', 's4', 's5', 's6']
    },
  }
  state = this.initialState

  fetchData = async () => {
    const q = query(collection(db, 'submissions'), where('approved', '==', true));
    const querySnapshot = await getDocs(q);

    const fetchedOrders = this.state.orders;

    querySnapshot.forEach(doc => {
      const sub = doc.data()
      const subObj = {
        id: doc.id,
        author: sub.author,
        created: sub.created,
        eventDate: sub.eventDate,
        content: sub.desc,
        brochureUrl: sub.brochureUrl,
        imgCaption: sub.imgCaption,
        imgUrl: sub.imgUrl,
        title: sub.title,
        categoryId: sub.categoryId
      }

      fetchedOrders.activities[subObj.id] = subObj;

      fetchedOrders.subSections[sub.categoryId] = {
        id: sub.categoryId,
        title: CategoryTitles[sub.categoryId],
        activityIds: fetchedOrders.subSections[sub.categoryId] ? [
          ...fetchedOrders.subSections[sub.categoryId].activityIds, subObj.id
        ] : [subObj.id],
      }
    })
    fetchedOrders.sections.default.subSecIds = Object.keys(fetchedOrders.subSections)

    this.setState({ orders: fetchedOrders })
  }

  handlePreviewIssue = (e) => {
    e.preventDefault();
    const { orders, title, vol, iss, month } = this.state;
    this.setState({ loading: true });

    document.getElementById("publishBtn").setAttribute("disabled", "");

    const year = month.slice(0, 4)
    const biMonth = BiMonthlyNames[getBiMonth(month)][0]
    const publishObj = {
      orders: {
        activities: orders.activities,
        subSections: orders.subSections,
        sections: orders.sections,
        sectionOrder: orders.sectionOrder
      },
      title: title,
      vol: vol,
      iss: iss,
      month: month,
    }

    console.log(publishObj);

    const previewLink = `previews/${year}/${biMonth}`

    // delete existing previews
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
            }, () => this.setState({ loading: false }))
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
        activities: orders.activities,
        subSections: orders.subSections,
        sections: orders.sections,
        sectionOrder: orders.sectionOrder
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
        index: parseInt(`${year}${iss}`),
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

    return (<>
      <SmallScreenError />
      <div className="draft">
        <header className="page-header container">
          <h1 className="heading">Draft an Issue</h1>
          <div className="btns-group">
            {!formView && !preview && (
              !this.state.loading ? <button
                form="draftForm"
                className="btn submit"
                id="publishBtn"
                onClick={this.handlePreviewIssue}
                type="submit"
              >Generate preview</button> :
                <button
                  className="btn submit"
                  disabled
                >
                  <SpinnerIcon />
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
              Object.keys(orders.activities).length !== 0 &&
              <DndMain orders={orders} updateOrders={this.handleUpdateOrders} />
            )
          }
        </main >
      </div >
    </>)
  }
}

const SmallScreenError = () => (
  <div className='error-bw'>
    <div className="error-gif-wrapper">
      <div className="error-gif">
        <img src={WidthErrorGif} alt="Take my money" />
      </div>
      <div className="error-message">
        <h1>
          Get A Real<br /> Screen
        </h1>
      </div>
    </div>
    <div className="error-description">
      <p>Drafting is only available on bigger screens</p>
    </div>
  </div>
)