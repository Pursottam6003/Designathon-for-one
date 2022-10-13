import React, { Component } from "react"
import { Field } from "../form/Field"
import { DndMain } from "../dnd/dndMain"
import { fs } from '../../config/config'
import { Categories } from "../../helpers"

class DraftForm extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.props.handleChange(name, value)
  }

  render() {
    const { title, vol, iss, month, year } = this.props
    return (
      <form id="draftForm" className="draft-form form-group">
        <input type="text" name="title" className='form-control form-title' placeholder="Title of newsletter" onChange={this.handleChange} value={title} />
        <p className='sub-label'>Issue details</p>
        <Field labeltxt="Volume no." showLabel={vol.length}>
          <input type="text" className='form-control' required name="vol" value={vol} onChange={this.handleChange} placeholder="Volume no." />
        </Field>
        <Field labeltxt="Issue" showLabel={iss.length}>
          <input type="text" className='form-control' required name="iss" value={iss} onChange={this.handleChange} placeholder="Issue" />
        </Field>
        <Field labeltxt="Month" showLabel={month.length}>
          <input type="text" className='form-control' required name="month" value={month} onChange={this.handleChange} placeholder="Month" />
        </Field>
        <Field labeltxt="Year" showLabel={year.length}>
          <input type="text" className='form-control' required name="year" value={year} onChange={this.handleChange} placeholder="Year" />
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
    year: '',
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
        content: sub.desc
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
    const { title, vol, iss, month, year, formView, orders } = this.state
    const formProps = { title: title, vol: vol, iss: iss, month: month, year: year }

    return (
      <div className="draft">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">Draft an Issue</h1>
          </header>

          <main className="workspace">
            {formView ? (
              <DraftForm handleChange={this.handleChange} {...formProps} />
            ) : (
              <DndMain orders={orders} updateOrders={this.handleUpdateOrders} />
            )}

            <div className="btns-group">
              <button className="btn" onClick={this.switchView} type="button">
                {formView ? 'Next' : 'Previous'}
              </button>

              {formView ? (
                <button className="btn submit" onClick={() => { console.log('TODO: Publish') }} type="button" disabled>
                  Publish
                </button>

              ) : (
                <button className="btn submit" onClick={() => { console.log('TODO: Publish') }} type="button">
                  Publish
                </button>

              )}
            </div>
          </main>
        </div>
      </div>
    )
  }
}