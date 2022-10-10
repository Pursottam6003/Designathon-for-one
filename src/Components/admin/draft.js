import React, { Component } from "react"
import { Field } from "../form/Field"

class DraftForm extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.props.handleChange(name, value)
  }

  render() {
    const { title, vol, iss, month, year } = this.props
    return (
      <form id="draftForm" className="draft-form">
        <input
          type="text"
          name="title"
          className='form-control form-title'
          placeholder="Title of newsletter"
          onChange={this.handleChange}
          value={title}
        />

        <p className='sub-label'>Issue details</p>
        <Field labeltxt="Volume no." showLabel={vol.length}>
          <input type="text"
            className='form-control'
            required
            name="vol"
            value={vol}
            onChange={this.handleChange}
            placeholder="Volume no."
          />
        </Field>

        <Field labeltxt="Issue" showLabel={iss.length}>
          <input type="text"
            className='form-control'
            required
            name="iss"
            value={iss}
            onChange={this.handleChange}
            placeholder="Issue"
          />
        </Field>
        <Field labeltxt="Month" showLabel={month.length}>
          <input type="text"
            className='form-control'
            required
            name="month"
            value={month}
            onChange={this.handleChange}
            placeholder="Month"
          />
        </Field>

        <Field labeltxt="Year" showLabel={year.length}>
          <input type="text"
            className='form-control'
            required
            name="year"
            value={year}
            onChange={this.handleChange}
            placeholder="Year"
          />
        </Field>
      </form>
    )
  }
}

class DndSubmissions extends Component {
  render() {
    return <>Hello Drag and drop</>
  }
}

export class Draft extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    year: '',
    formView: true
  }
  state = this.initialState

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  switchView = (e) => {
    this.setState({formView: !this.state.formView})
  }


  render() {
    const { title, vol, iss, month, year, formView } = this.state
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
              <DndSubmissions />
            )}


            <button onClick={this.switchView} type="button">
              {formView ? 'Next' : 'Previous'}
            </button>
          </main>
        </div>
      </div>
    )
  }
}