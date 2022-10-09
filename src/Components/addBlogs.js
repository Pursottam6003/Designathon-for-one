import React, { Component } from 'react'
import { Form } from './form/Form.js'
import { Preview } from './Preview'
import { storage, fs } from '../config/config'
import firebase from 'firebase/compat/app'


const year = new Date().getFullYear();
let MonthName;
const month = new Date().getMonth();


const BiMonthlyNames = [
  '',
  'JanFeb',
  'MarApril',
  'MayJune',
  'JulyAug',
  'SeptOct',
  'NovDec',
]

if (month === 1 || month === 2) MonthName = BiMonthlyNames[1];
else if (month === 3 || month === 4) MonthName = BiMonthlyNames[2];
else if (month === 5 || month === 6) MonthName = BiMonthlyNames[3];
else if (month === 7 || month === 8) MonthName = BiMonthlyNames[4];
else if (month === 9 || month === 10) MonthName = BiMonthlyNames[5];
else if (month === 11 || month === 12) MonthName = BiMonthlyNames[6];
export class AddBlogs extends Component {
  initialState = {
    category: 0,
    edit: true,
    formData: {},
    activityTitle: '',
    images: [],
    imgCaption: '',
    output: {},
    clearRev: 0
  }

  selectOptions = [
    '',
    'Memorandum of Understanding (MoU)',
    'Invited/Expert Lectures given by NIT AP members',
    'Visits and Invited/Expert Lectures to NITAP from other insitutes',
    'External Funded Projects',
    'Consultancy Projects',
    'Patent (APA 7th edition format)',
    'Research Papers',
    'Books',
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


  state = this.initialState;


  handleSubmit = (out) => {
    const uploadOnFirestore = () => {
      console.log(imageLinks);
      fs.collection(`${year}/${MonthName}/${category_Id}/`).doc().set({
        Heading: heading,
        wholeDescription: wholeDescription,
        EventDate: date,
        Urls: firebase.firestore.FieldValue.arrayUnion(...imageLinks),
        Brochure: brochureUrl,
        CreatedAt: month,
        imgCaption: imgCaption
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
    let imgCaption = this.state.imgCaption
    if (category_Id === 1) {
      imgCaption = `MoU between ${this.state.formData.insName} and ${this.state.formData.partnerInsName}`
    } else if (category_Id === 3) {
      imgCaption = `${this.state.formData.lectureType} by ${this.state.formData.speakerName}`
    }
    console.log(Mybrochure);

    if (Mybrochure) {
      const uploadTask = storage.ref(`Brochure/${this.selectOptions[category_Id]}/${Mybrochure.name.split(/(\\|\/)/g).pop()}/`).put(Mybrochure);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref(`Brochure/${this.selectOptions[category_Id]}/`).child(`${Mybrochure.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {
            brochureUrl = url
            uploadOnFirestore();
          })
        }
      )
    }

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
        storage.ref(`Images/${this.selectOptions[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {

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
      images: data.images ? data.images : [],
      imgCaption: data.imgCaption ? data.imgCaption : this.selectOptions[parseInt(this.state.category)]
    })
  }

  switchView = (event) => {
    const btn = event.target

    if (btn.innerText === "Form") {
      this.setState({ edit: true })
    } else {
      this.setState({ edit: false })
    }
  }

  render() {
    return (
      <div className='add-blogs route'>
        <div className='mobile-bg' />
        <div className='activity-form'>
          <div className='tablist-wrapper'>
            <div id='tabList' className='tablist'>
              <button onClick={this.switchView} className={`tab ${this.state.edit && 'active'}`} role="tab">Form</button>
              <button onClick={this.switchView} className={`tab ${!this.state.edit && 'active'}`} role="tab">Preview</button>
            </div>
          </div>

          <div className='form-wrapper'>
            <Form
              key={this.state.clearRev}
              getPreview={this.getPreview}
              clear={this.state.clear}
              display={this.state.edit ? 'block' : 'none'}
            />
            <Preview
              key={`p${this.state.clearRev}`}
              title={this.state.activityTitle}
              fields={this.state.formData}
              categoryId={this.state.category}
              images={this.state.images}
              imgCaption={this.state.imgCaption}
              submit={this.handleSubmit}
              display={this.state.edit ? 'none' : 'block'}
            />
          </div>
        </div>
      </div>
    )
  }
}