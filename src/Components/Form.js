import React, { Component, useState } from 'react'

const Field = ({children}) => {
  return (
    <div className='form-field'>
      {children}
    </div>
  )
}

export class CategoryForm extends Component {
  initialState = {
    insName: '',        // 1, 3
    partnerInsName: '',   // 1
    partnerInsAddr: '',   // 1
    theme: '',// 1, 15, 16, 17
    pursposeAgreement: '',  // 1, 
    insMembers: [],   // 1
    outMembers: [],   // 1
    otherMembers: [],   // 1
    date: '', // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
    speakerName: '', // 2, 3 
    designation: '',//2, 3, 5 , 11, 12, 13, 14, 15, 16, 17
    department: '',//2, 3, 5, 11, 12 , 13, 14 
    lectureType: '',  // 2, 3 
    speechTitle: '',// 2, 3 
    eventName: '',// 2, 9, 15, 16, 17 
    organizerName: '',// 2, 3, 14, 16, 17 
    organizerAddr: '', // 2
    pi: [], // 4
    copi: [], // 4 
    title:'', // 4, 8, 7, 9
    fundAgency: '',// 4, 5 
    facultyName: '',// 11, 12, 13
    job: '',  // 5
    invName: '', // 6
    patentYear: '', // 6
    patId: '',  // 6
    patOffice: '', // 6
    journalType: '', // 7
    authors: [],    // 7, 8, 9, 10
    pubYear: [],    // 7, 8
    journalTitle: '',   // 7
    volNo: '',    // 7
    issueNo: '',    // 7
    pageNos: '',    // 7, 10 
    doiUrl: '',     // 7, 8, 9
    publisher: '',  // 8, 10
    confType: '',   // 9
    place: '',  // 9, 15
    collaboration: '',  // 14, 15, 16, 17
    coordinatorName: '',  // 15
    eventLink: '',  // 17
    eventBrochure: '',  // 17
  }

  state = this.initialState

  categoryFormFields = [
    {   // MoU
      insName: '',
      partnerInsName: '',
      partnerInsAddr: '',
      theme: '',
      pursposeAgreement: '',
      insMembers: [],
      outMembers: [],
      otherMembers: [],
      date: ''
    },
    {   // invited expert lecutres by nitap
      speakerName: '',
      designation: '',
      department: '',
      lectureType: '',    // keynote lecture/inaugural addr/special lecture
      speechTitle: '',
      eventName: '',
      organizerName: '',
      organizerAddr: '',
      date: ''
    },
    {   //visits and invited/expert lectures from other institutes
      speakerName: '',
      designation: '',
      department: '',
      insName: '',
      lectureType: '',    // keynote lecture/inaugural addr/special lecture
      speechTitle: '',
      organizerName: '',
      date: ''
    },
    {   //ext funded proj
      pi: [],
      copi: [],
      title: '',
      fundAgency: '',
      date: ''
    },
    {   // consultancy proj
      facultyName: '',
      designation: '',
      department: '',
      job: '',
      fundAgency: '',
    },
    {   // patent
      invName: '',
      patentYear: '',
      patId: '',
      patOffice: ''
    },
    {   // research papers
      journalType: '',   // international/national
      authors: [],
      pubYear: [],
      title: '',
      journalTitle: '',
      volNo: '',
      issueNo: '',
      pageNos: '',
      doiUrl: ''        // optional
    },
    {   // book
      authors: [],
      pubYear: [],
      title: '',
      publisher: '',
      doiUrl: ''
    },
    {   // conference paper
      authors: [],
      confType: '',   // national/international
      date: '',       // complete date of conference rather than 
      title: '',
      eventName: '',
      place: '',
      doiUrl: ''
    },
    {   // book chapters
      authors: [],
      chapterTitle: '',
      editorName: '',
      bookTitle: '',
      pageNos: '',
      publisher: '',
      doi: ''
    },
    {   // faculty empowered prog
      facultyName: '',
      designation: '',
      department: '',
      program: '',    // workshop/conference/seminar/short term course/FDP/EDP/webinar/others
      programTitle: '',
      organizingName: '',
      organizingAddr: '',
      date: ''
    },
    {   // reviewers
      facultyName: '',
      designation: '',
      department: '',
      journalName: '',
      publishingName: '',
      date: ''
    },
    {   // session chairs
      facultyName: '',
      designation: '',
      department: '',
      name: '',
      workshop: ''
    },
    {   // winners of competitions
      winnerName: '',
      winnerRoll: '',
      eventName: '',
      theme: '',
      rank: '',     // first/second/third present
      organizerName: '',
      collaboration: '',  //optional
      date: ''
    },
    {   // Workshop/FDP/Conference/ seminar/short term course/etc
      eventName: '',
      theme: '',
      coordinatorName: '',
      designation: '',
      collaboration: '',   // optional
      date: '',
      place: ''
    },
    {   // outreach activities
      eventName: '',
      theme: '',
      organizerName: '',
      designation: '',
      collaboration: '', // optional
      date: ''
    },
    {   // announcements
      eventName: '',
      theme: '',
      organizerName: '',
      designation: '',
      collaboration: '', // optinal (with full address)
      eventLink: '',
      date: '',
      eventBrochure: ''
    }
  ]

  render() {
    return (
      <>
        
      </>
    )
  }
}


export class Form extends Component {

  initialState = {
    category: 0,
    activityTitle: '',
    formData: {}
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  selectOptions = [
    { value: 0, name: 'Select an activity category' },
    { value: 1, name: 'Memorandum of Understanding (MoU)' },
    { value: 2, name: 'Invited/Expert Lectures given by NIT AP members' },
    { value: 3, name: 'Visits and Invited/Expert Lectures to NITAP from other insitutes' },
    { value: 4, name: 'External Funded Projects' },
    { value: 5, name: 'Consultancy Projects' },
    { value: 6, name: 'Patent (APA 7th edition format)' },
    { value: 7, name: 'Research Papers' },
    { value: 8, name: 'Books' },
    { value: 9, name: 'Conference Paper' },
    { value: 10, name: 'Book Chapters' },
    { value: 11, name: 'Faculty Empowerment Programmes' },
    { value: 12, name: 'Reviewers' },
    { value: 13, name: 'Session Chairs' },
    { value: 14, name: 'Winners of Competition' },
    { value: 15, name: 'Workshop/FDP/Conference/seminar/short term course etc.' },
    { value: 16, name: 'Outreach Activity' },
    { value: 17, name: 'Announcement' },
  ]
  categoriesSelect = this.selectOptions.map((opt, i) => {
    return <option key={i} value={opt.value}>{opt.name}</option>
  })

  render() {
    return (
      <form autoComplete="off" className='form-group'>
        <input
          type="text" 
          name="activityTitle"
          className='form-control form-title'
          required
          placeholder="New activity title here..." 
          onChange={this.handleChange}
          value={this.state.activityTitle}
        />

        <select
          type="number" 
          name="category"
          className='form-control' 
          required 
          onChange={this.handleChange} 
          value={this.state.category}
        >
          {this.categoriesSelect}
        </select>

        {parseInt(this.state.category) !== 0 && (
          <CategoryForm />
        )}

      </form>
    )
  }
}
