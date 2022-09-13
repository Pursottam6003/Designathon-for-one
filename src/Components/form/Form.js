import React, { Component } from 'react'
import { CategoryForm } from './CategoryForm'

export class Form extends Component {

  initialState = {
    category: 0,
    activityTitle: '',
    formData: {}
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    this.setState({
      [name]: value
    }, () => {
      this.props.getPreview({
        category: this.state.category,
        formData: this.state.formData,
        activityTitle: this.state.activityTitle
      });
    })
  }

  handleSubmit = () => {
    console.log("Handle submit: TODO");
  }

  fetchCategoryData = (categoryData) => {
    this.setState({
      formData: categoryData
    }, () => {
      this.props.getPreview({
        category: this.state.category,
        formData: this.state.formData,
        activityTitle: this.state.activityTitle
      });
    });
  }

  selectOptions = [
    { value: 0, name: 'Select an activity category' },
    { value: 1, name: 'Memorandum of Understanding (MoU)' },
    { value: 2, name: 'Invited/Expert Lectures given by NIT AP members' },
    { value: 3, name: 'Visits and Invited/Expert Lectures to NITAP from other insitutes' },
    { value: 4, name: 'External Funded Projects' },
    { value: 5, name: 'Consultancy Projects' },
    { value: 6, name: 'Patent (APA 7th edition format)' },
    { value: 7, name: 'Research Papers' },
    { value: 8, name: 'Books' },
    { value: 9, name: 'Conference Paper' },
    { value: 10, name: 'Book Chapters' },
    { value: 11, name: 'Faculty Empowerment Programmes' },
    { value: 12, name: 'Reviewers' },
    { value: 13, name: 'Session Chairs' },
    { value: 14, name: 'Winners of Competition' },
    { value: 15, name: 'Workshop/FDP/Conference/seminar/short term course etc.' },
    { value: 16, name: 'Outreach Activity' },
    { value: 17, name: 'Announcement' },
  ]
  categoriesSelect = this.selectOptions.map((opt, i) => {
    return <option key={i} value={opt.value}>{opt.name}</option>
  })
 
  render() {
    return (
      <form autoComplete="off" className='form-group'>
        <input
          type="text"
          name="activityTitle"
          className='form-control form-title'
          required
          placeholder="New activity title here..."
          onChange={this.handleChange}
          value={this.state.activityTitle}
        />

        <select
          type="number"
          name="category"
          className='form-control'
          required
          onChange={this.handleChange}
          value={this.state.category}
        >
          {this.categoriesSelect}
        </select>

        {parseInt(this.state.category) !== 0 && (
          <>
            <CategoryForm
              handleUpdate={this.fetchCategoryData}
              categoryId={parseInt(this.state.category)}
              key={parseInt(this.state.category)}
            />
            <input
              type="submit"
              value="Submit" 
            />
          </>
        )}

      </form>
    )
  }
}
