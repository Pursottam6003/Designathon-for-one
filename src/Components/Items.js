import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {IndividualProduct} from './IndividualProduct'

// export const Items = ({blogsArray}) => {
	// const items = blogsArray.map((blog, i) => {
	// 	console.log('item:', i)
	// 	return (<IndividualProduct key={i} individualProduct={blog} />)
	// })
	// return (
	// 	<>{items}</>
	// )

	// return ({blogsArray.map((individualProduct,i)=>(
	// 	<>
    //     <IndividualProduct key = {i} individualProduct={individualProduct} />
	// 	</>
    // ))})

// }

export class Items extends Component {
	initialState = {
		blogs: []
	}
	state = this.initialState

	// componentDidMount() {
	// 	this.setState({
	// 		blogs: this.props.blogsArray
	// 	})
	// }
	
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