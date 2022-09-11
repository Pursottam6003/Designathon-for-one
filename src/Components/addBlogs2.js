import React, { Component } from 'react'
import {Form} from './Form.js'

const Preview = () => {
	return (
		<div>
			<h3> MEOW </h3>
		 <textarea className='txtarea' placeholder='your output will show here'>heel </textarea>
		</div>

	)
}



export class AddBlogs2 extends Component {

	handleSubmit = () => {
		
	}

	
	render() {
		return (
			<div className='add-blogs2'>
				<header className='hero'>
					<h1 className='container'>Add new activities</h1>
				</header>

				<div className='activity-form container'>
        			<Form  />
					<Preview />
				</div>
			</div>
		)
	}
}