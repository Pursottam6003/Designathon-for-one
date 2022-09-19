import React, { Component } from 'react'
import { Form } from './form/Form.js'
import { Preview } from './Preview'
import { storage, fs } from '../config/config'
import firebase from 'firebase/compat/app'


export class AddBlogs2 extends Component {
  initialState = {
    category: 0,
    formData: {},
    activityTitle: '',
    images: [],
    output: {},
    clearRev: 0
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
    'Workshop / FDP / Conference / seminar / short term course etc.',
    'Outreach Activity',
    'Announcement',
  ]
  state = this.initialState

  handleSubmit = (out) => {
    const uploadOnFirestore = () => {
      console.log(imageLinks);
      fs.collection(`Technodaya/Blogs/${category_Id}/`).doc().set({
        Heading: heading,
        wholeDescription: wholeDescription,
        EventDate: date,
        Urls: firebase.firestore.FieldValue.arrayUnion(...imageLinks),
        Brochure: brochureUrl,
      }).then(() => {
        console.log("Sucessfully uploaded image");
        // clear the form
        this.setState({
          clearRev: this.state.clearRev + 1
        })
      })
    }

    let category_Id = this.state.category;
    let heading = out.heading;
    let wholeDescription = out.output;
    let date = this.state.formData.date;
    let Mybrochure = this.state.formData.eventBrochure;
    let brochureUrl = '';
    console.log(Mybrochure);

    if(Mybrochure)
    {
      const uploadTask = storage.ref(`Brochure/${this.selectOptions[category_Id]}/${Mybrochure.name.split(/(\\|\/)/g).pop()}/`).put(Mybrochure);
      uploadTask.on('state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      },
      (error) =>{
        console.log(error);
      },
      ()=>{
        storage.ref(`Brochure/${this.selectOptions[category_Id]}/`).child(`${Mybrochure.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url=>{
          brochureUrl = url
          uploadOnFirestore();
        })
      }
      )
    }
    // if (date === undefined || date === null) {
    //   date = 'blank'
    // }

    // images
    //const Image = out.images[0];
    let total_size = out.images.length;
    const imageLinks = [];
    for (let i = 0; i < total_size; i++) {
      const Image = out.images[i];
      const uploadTask = storage.ref(`Images/${this.selectOptions[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      }, (error) => {
        console.log(error)
      }, () => {
        storage.ref(`Images/${this.selectOptions[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url=>{

          imageLinks.push(url);
          if (i === total_size - 1) {
            uploadOnFirestore()
          }
        }) 
      })
    }
    if (total_size === 0) {
      uploadOnFirestore()
    }
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
          <Form key={this.state.clearRev} getPreview={this.getPreview} clear={this.state.clear}/>
          <Preview
            key={`p${this.state.clearRev}`}
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