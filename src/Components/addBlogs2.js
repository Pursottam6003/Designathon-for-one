import React, { Component } from 'react'
import {Form} from './form/Form.js'
import {Preview} from './Preview1'

export class AddBlogs2 extends Component {
  initialState = {
    category: 0,
    formData: {},
    activityTitle: ''
  }

  state = this.initialState

	handleSubmit = () => {
		
	}

  getPreview = (data) => {
    this.setState({
      category: data.category,
      formData: data.formData,
      activityTitle: data.activityTitle
    })
  }
	
	render() {
		return (
			<div className='add-blogs2'>
				<header className='hero'>
					<h1 className='container'>Add new activities</h1>
				</header>

				<div className='activity-form container'>
          <Form getPreview={this.getPreview} />
					<Preview title={this.state.activityTitle} fields={this.state.formData} categoryId={this.state.category} />
				</div>
			</div>
		)
	}
}