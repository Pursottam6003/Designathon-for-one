import React, { Component } from 'react'
import { Form } from './form/Form.js'
import { Preview } from './Preview'
import { storage, fs } from '../config/config'
import firebase from 'firebase/compat/app'
import { Categories } from '../helpers'

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

  selectOptions = Categories

  state = this.initialState;

  handleSubmit = (out) => {
    const { heading, output: wholeDescription } = out
    const { date, eventBrochure: Mybrochure } = this.state.formData
    const { category: category_Id, imgCaption } = this.state
    let brochureUrl = ''

    const uploadOnFirestore = () => {
      const uploadObj = {
        created: (new Date()).toUTCString(),
        author: 'TODO',
        categoryId: category_Id,
        title: heading,
        desc: wholeDescription,
        eventDate: date,
        imgUrl: firebase.firestore.FieldValue.arrayUnion(...imageLinks),
        brochureUrl: brochureUrl,
        imgCaption: imgCaption,
      }

      fs.collection(`pendings/`).doc().set(uploadObj).then(() => {
        console.log("Sucessfully uploaded");
        this.setState({
          clearRev: this.state.clearRev + 1
        })
      })
    }

    if (category_Id === 1) {
      imgCaption = `MoU between ${this.state.formData.insName} and ${this.state.formData.partnerInsName}`
    } else if (category_Id === 3) {
      imgCaption = `${this.state.formData.lectureType} by ${this.state.formData.speakerName}`
    }

    if (Mybrochure) {
      const uploadTask = storage.ref(`Brochure/${Categories[category_Id]}/${Mybrochure.name.split(/(\\|\/)/g).pop()}/`).put(Mybrochure);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref(`Brochure/${Categories[category_Id]}/`).child(`${Mybrochure.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {
            brochureUrl = url
            uploadOnFirestore();
          })
        }
      )
    }

    // images
    let total_size = out.images.length;
    const imageLinks = [];
    for (let i = 0; i < total_size; i++) {
      const Image = out.images[i];
      const uploadTask = storage.ref(`Images/${Categories[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
      }, (error) => {
        console.log(error)
      }, () => {
        storage.ref(`Images/${Categories[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url => {

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
      imgCaption: data.imgCaption ? data.imgCaption : Categories[parseInt(this.state.category)]
    })
  }

  switchForm = (status) => {
    this.setState({ edit: status })
  }

  render() {
    return (
      <div className='add-blogs route'>
        <div className='mobile-bg' />
        <div className='activity-form'>
          <div className='tablist-wrapper'>
            <div id='tabList' className='tablist'>
              <button onClick={(e) => { this.switchForm(true) }} className={`tab ${this.state.edit && 'active'}`} role="tab">Form</button>
              <button onClick={(e) => { this.switchForm(false) }} className={`tab ${!this.state.edit && 'active'}`} role="tab">Preview</button>
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
              switchForm={this.switchForm}
              display={this.state.edit ? 'none' : 'block'}
            />
          </div>
        </div>
      </div>
    )
  }
}