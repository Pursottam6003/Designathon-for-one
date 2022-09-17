import React, { Component } from 'react'
import {Form} from './form/Form.js'
import {Preview} from './Preview'
import {storage,fs} from '../config/config'

export class AddBlogs2 extends Component {
  initialState = {
    category: 0,
    formData: {},
    activityTitle: '', 
    images: [],
    output: {}
  }

  selectOptions = [
    '',
    'Memorandum of Understanding (MoU)',
    'Invited/Expert Lectures given by NIT AP members',
    'Visits and Invited/Expert Lectures to NITAP from other insitutes',
    'External Funded Projects',
    'Patent (APA 7th edition format)',
    'Consultancy Projects',
    'Books',
    'Research Papers',
    'Conference Paper',
    'Book Chapters',
    'Faculty Empowerment Programmes',
    'Reviewers',
    'Session Chairs',
    'Winners of Competition',
    'Workshop/FDP/Conference/seminar/short term course etc.',
    'Outreach Activity',
    'Announcement',
  ]
  state = this.initialState

	handleSubmit = (out) => {
     
    let category_Id = this.state.category;
    let  heading = out.heading;
    let wholeDescription = out.output;
    const date = this.state.date;

   const Image_name = out.images[0].name
    

   

  //   const handleProductImg=(e)=>{
  //     let selectedFile = e.target.files[0];
  //     if(selectedFile){
  //         if(selectedFile&&types.includes(selectedFile.type)){
  //             setImage(selectedFile);
  //             setImageError('');
  //         }
  //         else{
  //             setImage(null);
  //             setImageError('please select a valid image file type (png or jpg)')
  //         }
  //     }
  //     else{
  //         console.log('please select your file');
  //     }
  // }
    
    const uploadTask=storage.ref(`Images/${this.selectOptions[category_Id]}/${Image_name}`).put(Image_name);
      uploadTask.on('state_changed',snapshot=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(progress);
    },error=>console.log(error),()=>{
        storage.ref(`Images/${this.selectOptions[category_Id]}/${Image_name}`).child(Image_name).getDownloadURL().then(url=>{
            // fs.collection(this.selectOptions[category_Id]/heading).add({
            //     heading,
            //     wholeDescription,
            //     url
            // }).then(()=>{
            //     console.log("sucessfually done");
            //    this.initialState;
            // }).catch(error=> console.log(error.message));

            fs.collection(`Magazine/Technodaya/${this.selectOptions[category_Id]}/`).add({
              heading,
              wholeDescription,
              date,
              
            }).then(()=>{
              console.log("Sucessfully uploaded");
            })
        })
    })



  
}

    


  getPreview = (data) => {
    this.setState({
      category: data.category,
      formData: data.formData ? data.formData : this.state.formData,
      activityTitle: data.activityTitle,
      images: data.images ? data.images : []
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
					<Preview
            title={this.state.activityTitle}
            fields={this.state.formData}
            categoryId={this.state.category}
            images={this.state.images}
            submit={this.handleSubmit}
          />
				</div>
			</div>
		)
	}
}