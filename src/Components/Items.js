import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {IndividualProduct} from './IndividualProduct'



export class Items extends Component {
	initialState = {
		blogs: []
	}
	state = this.initialState

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.setState({
				blogs: [...this.props.blogsArray]
			})
		}
	}
	render() {
		const { blogs } = this.state
		const blogsComponent = blogs.map((blog, i) => {
			console.log('item:', i);
			return (<IndividualProduct individualProduct={blog} />);
		})
		return (
			<>{blogsComponent}</>
		)
	}
} 