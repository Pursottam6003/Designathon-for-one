import React, { Component } from "react"
import {fs} from '../../config/config'

const getTechnodayaBlogs = async ()=>{
	const blogsarray = []
	  const blogsFirebase = await fs.collection(`pendings`).get();
	  // getting its snapshort 
	  for (var snap of blogsFirebase.docs){
		  var data = snap.data();
		  data.ID = snap.id;
		  blogsarray.push({
			  ...data
		  })
		  // console.log(blogs)
		  if(blogsarray.length === blogsFirebase.docs.length){
			//setting the products
				console.log(blogsarray)
			  return blogsarray
		  }
	  }  
	  return blogsarray
  }

export class Submissions extends Component {
	initialState = {
		pending: [],
		approved: [],
	}

	state = this.initialState
	

	componentDidMount() {
		this.setState({
			pending: getTechnodayaBlogs()
			
		})
		console.log(this.state.pending)
	}

	submissions = [
		{
			approved: false,
			category: 1,
			title: 'Birthday party organized at canteen',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pursottam Sah',
			date: '11-10-2022'
		},
		{
			approved: false,
			category: 1,
			title: 'Up all night for netflix and chill',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Chandrashekhar Tripathi',
			date: '30-09-2022'
		},
		{
			approved: false,
			category: 1,
			title: 'Guitar session by our pro guitarist Daknya',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pursottam Sah',
			date: '11-10-2022'
		},
		{
			approved: true,
			category: 1,
			title: 'Restrict time in washrooms to 10 seconds during exam hours',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Subhasish Banerjee',
			date: '27-10-2022'
		},
		{
			approved: true,
			category: 1,
			title: 'Force to use only one message by director on Technodaya Newsletter',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pi Mahanta',
			date: '15-09-2022'
		},
	]

	initialState = {
		submissions: this.submissions,
		total: this.submissions.length,
		pending: this.submissions.filter((sub) => {
			return !sub.approved
		}).length
	}

	state = this.initialState

	render() {
		const { submissions, pending, total } = this.state
		return (
			<div className="submissions">
				<div className="container">
					<header className="page-header">
						<h1 className="heading">Submissions</h1>
						<div className="summary">
							<h2>{pending.toString()} out of {total.toString()}</h2>
							<p>submissions pending</p>
						</div>
					</header>
					<main className="workspace">
						<h3>Approve pending submissions</h3>
						<div className="submissions-wrapper">
							<div className="submission pending">
								<table>
									<thead>
										<tr>
											<th>Approve</th>
											<th>Title</th>
											<th>Author</th>
											<th>Date</th>
											<th>Reject</th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
							<div className="submission approved"></div>
						</div>
					</main>
				</div>
			</div>
		)
	}
}