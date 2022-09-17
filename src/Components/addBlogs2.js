import React, { Component } from 'react'
import {Form} from './form/Form.js'
import {Preview} from './Preview'
import {storage,fs} from '../config/config'
import firebase from 'firebase/compat/app'

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
    let date = this.state.formData.date;

    console.log(date);

    if(date === undefined || date ===null)
    {
      date='blank'
    }

   //const Image = out.images[0];
  
    let total_size =out.images.length;
    

    let imageLinks=[];
    for(let i=0;i<total_size;i++)
    { 
      const Image = out.images[i];
      const uploadTask=storage.ref(`Images/${this.selectOptions[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);
      
      uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      },
        (error) => {
          console.log(error);
        },
      () => {
          storage.ref(`Images/${this.selectOptions[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url=>{
            imageLinks.push(url);
          }) 
        })
    }
     

    
    setTimeout(() => {
      console.log(imageLinks);
      fs.collection(`Technodaya/Blogs/${category_Id}/`).doc().set({
        Heading:heading,
        wholeDescription : wholeDescription,
        EventDate: date,
        Urls: firebase.firestore.FieldValue.arrayUnion(...imageLinks)
        }).then(()=>{
          console.log("Sucessfully uploaded image");
      })
      
    }, 2000);
  
    /*
    WORKING UPLOAD IMAGES FOR SINGLE ONE

    const uploadTask=storage.ref(`Images/${this.selectOptions[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);
    uploadTask.on('state_changed',snapshot=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(progress);
    },
    (error) =>{
      console.log(error);
    }
    ,()=>{
        storage.ref(`Images/${this.selectOptions[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url=>{
              fs.collection(`Technodaya/Blogs/${category_Id}/`).doc().set({
              Heading:heading,
              wholeDescription : wholeDescription,
              EventDate: date,
              Url:url,
              
            }).then(()=>{
              console.log("Sucessfully uploaded image");
            })

        })
    })
  */}



  getPreview = (data) => {
    this.setState({
      category: data.category,
      formData: data.formData,
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