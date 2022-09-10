import React, { Component } from 'react'
import {Form} from './Form.js'

const Preview = () => {
	return (
		<div>
			<h3>This is the preview</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et corporis ex. Ipsa aspernatur sunt, esse deserunt repellendus laboriosam temporibus eius aut similique non libero.</p>
		</div>

	)
}

export class AddBlogs2 extends Component {
	render() {
		return (
			<div className='add-blogs2'>
				<header className='hero'>
					<h1 className='container'>Add new activities</h1>
				</header>

				<div className='activity-form container'>
        			<Form />
					<Preview />
				</div>
			</div>
		)
	}
}