import React, { Component } from 'react'
import { Form } from '../Components/form/Form'
import { Preview } from '../Components/Preview/Preview'
import { storage, fs } from '../config/config'
import { arrayUnion } from 'firebase/firestore'
import { Categories } from '../helpers'
import { ReactComponent as NextIcon } from '../images/icons/forward-arrow.svg'
import { ReactComponent as PrevIcon } from '../images/icons/back-arrow.svg'

class Submit extends Component {
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

  selectOptions = Categories;

  state = this.initialState;

  handleSubmit = (out) => {
    const { heading, output: wholeDescription } = out
    const { date, eventBrochure: Mybrochure } = this.state.formData
    const { category: category_Id } = this.state
    const { uid: userId, displayName: userName } = this.props.user;
    let imgCaption = this.state.imgCaption
    let brochureUrl = ''

    const uploadOnFirestore = () => {
      const currentTime = new Date().getTime()
      const uploadObj = {
        created: new Date(currentTime).toLocaleString('en-IN', { dateStyle: "medium", timeStyle: "short", }),
        createdInSeconds: currentTime,
        author: userName,
        uid: userId,
        categoryId: category_Id,
        title: heading,
        desc: wholeDescription,
        eventDate: date ? date : '',
        imgUrl: arrayUnion(...imageLinks),
        brochureUrl: brochureUrl,
        imgCaption: imgCaption ? imgCaption : '',
        approved: false
      }

      fs.collection(`submissions/`).doc().set(uploadObj).then(() => {
        alert("Sucecssfully uploaded");
        this.setState({
          clearRev: this.state.clearRev + 1,
          category: this.initialState.category
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
      imgCaption: data.imgCaption
    })
  }

  switchForm = (status) => {
    this.setState({ edit: status })
  }

  render() {
    return (
      <div className='add-blogs' >
        <div className='mobile-bg' />
        <div className='activity-form container'>
          <div className='tablist-wrapper'>
            <div id='tabList' className='tablist'>
              <button onClick={(e) => { this.switchForm(true) }} className={`tab ${this.state.edit ? 'active' : ''}`} role="tab">Form</button>
              <button onClick={(e) => { this.switchForm(false) }} className={`tab ${!this.state.edit ? 'active' : ''}`} role="tab">Preview</button>
            </div>

            <button onClick={(e) => { this.switchForm(!this.state.edit) }}
              className={`form-navigate${this.state.edit ? ' next' : ' prev'}`}
              title={`${this.state.edit ? 'Next' : 'Go back'}`}
            >
              {this.state.edit ? <NextIcon /> : <PrevIcon />}
            </button>
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

            <button onClick={(e) => { this.switchForm(!this.state.edit) }}
              className={`form-navigate${this.state.edit ? ' next' : ' prev'}`}
              title={`${this.state.edit ? 'Next' : 'Go back'}`}
            >
              {this.state.edit ? <NextIcon /> : <PrevIcon />}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export { Submit };