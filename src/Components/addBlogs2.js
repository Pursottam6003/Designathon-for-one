import React, { Component } from 'react'
import {Form} from './form/Form.js'
import {Previews} from './Previews'

const Preview = (props) => {
	return (
		<>
		<Previews/>
		</>
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