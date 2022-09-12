import React, { Component, useState } from 'react'

const Field = (props) => {
  const { children, labeltxt, showLabel } = props
  return (
    <div className='form-field'>
      {parseInt(showLabel) !== 0 && (
        <label className='field-label'>{labeltxt}</label>
      )}
      {children}
    </div>
  )
}

class Person extends Component {
  initialState = {
    name: '',
    lastName: '',
    firstInitials: '',
    designation: '',
    department: '',
    insName: '',
    investigatorType: 'PI'
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  addPerson = () => {
    if (this.props.personType === "author") {
      const newPerson = {
        type: "author",
        lastName: this.state.lastName,
        firstInitials: this.state.firstInitials
      }
      console.log(newPerson);
      this.props.handleSubmit(newPerson);
    } else {
      const newPerson = {
        type: this.state.investigatorType,
        name: this.state.name,
        designation: this.state.designation,
        department: this.state.department,
        insName: this.state.insName
      }
      console.log(newPerson);
      this.props.handleSubmit(newPerson);
    }

    this.setState(this.initialState)
  }

  render() {
    const { personType, multiple } = this.props
    if ( personType === "author") {
      return (
        // lastname and firstInitials
        <div className='person-form'>
          <Field labeltxt="Last name" showLabel={this.state.lastName.length}>
          <input 
            type="text" 
            placeholder='Last name'
            required 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          </Field>

          <Field labeltxt="First initials (second initials)" showLabel={this.state.lastName.length}>
          <input
            type="text"
            placeholder='First initials (second initials)'
            required
            name="firstInitials"
            value={this.state.firstInitials}
            onChange={this.handleChange}
          />
          </Field>

          <Field labeltxt="" showLabel={0}>
            <input 
              type="button"
              value="+"
              className='list-add'
              onClick={this.addPerson}
            /> 
          </Field>
        </div>
      )
    } else {
      return (
        <div className='person-form'>
          <Field labeltxt="Select PI or CoPI" showLabel={0}>
            <select 
              type="text" 
              name="investigatorType" 
              required
              defaultValue={"PI"}
              onChange={this.handleChange}
              value={this.state.investigatorType}
            >
              <option value="PI">PI</option>
              { multiple === "1" && (
                <option value="CoPI">CoPI</option>
              )} 
            </select>
          </Field>

          <Field labeltxt="Name" showLabel={this.state.name.length}>
          <input 
            type="text" 
            placeholder='Name'
            required 
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          </Field>

          <Field labeltxt="Designation" showLabel={this.state.designation.length}>
          <input
            type="text"
            placeholder='Designation'
            required
            name="designation"
            value={this.state.designation}
            onChange={this.handleChange}
          />
          </Field>

          <Field labeltxt="Department" showLabel={this.state.department.length}>
          <input
            type="text"
            placeholder='Department'
            required
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
          </Field>

          {this.state.investigatorType === "CoPI" && (
            <Field labeltxt="Institute name (if from outside NITAP)" showLabel={this.state.insName.length}>
            <input
              type="text"
              placeholder='Institute name (if from outside NITAP)'
              required
              name="insName"
              value={this.state.insName}
              onChange={this.handleChange}
            />
            </Field>
          )} 

          <Field labeltxt="" showLabel={0}>
            <input
              type="button"
              value="+"
              className='list-add'
              onClick={this.addPerson}
            />
          </Field>
        </div>
      )
    }
  }
}

export class CategoryForm extends Component {
  initialState = {
    insName: '',        // 1, 3
    partnerInsName: '',   // 1
    partnerInsAddr: '',   // 1
    theme: '',// 1, 15, 16, 17
    pursposeAgreement: '',  // 1, 
    insMembers: '',   // 1
    outMembers: '',   // 1
    otherMembers: '',   // 1
    date: '', // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
    speakerName: '', // 2, 3 
    designation: '',//2, 3, 5 , 11, 12, 13, 14, 15, 16, 17
    department: '',//2, 3, 5, 11, 12 , 13, 14 
    lectureType: '',  // 2, 3 
    eventName: '',// 2, 9, 15, 16, 17 
    organizer: '',// 2, 3, 14, 16, 17 
    pi: [], // 4
    copi: [], // 4 
    title: '', // 2, 3, 4, 8, 7, 9
    fundAgency: '',// 4, 5 
    facultyName: '',// 11, 12, 13
    job: '',  // 5
    invName: '', // 6
    patentYear: '', // 6
    patId: '',  // 6
    patOffice: '', // 6
    journalType: '', // 7
    authors: [],    // 7, 8, 9, 10
    pubYear: '',    // 7, 8
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  addPerson = (person) => {
    if (person["type"] === "author") {
      this.setState({
        authors: [...this.state.authors, person]
      })
    } else if (person["type"] === "PI") {
      this.setState({
        pi: [...this.state.pi, person]
      })
    } else {
      this.setState({
        copi: [...this.state.copi, person]
      })
    }
  }

  removePerson = (index, personType) => {
    if (personType === "PI") {
      const {pi} = this.state
      this.setState({
        pi: pi.filter((person, i) => {
          return i !== index;
        }) 
      })
    } else if (personType === "CoPI") {
      const {copi} = this.state
      this.setState({
        copi: copi.filter((person, i) => {
          return i !== index;
        })
      })
    } else {
      const {authors} = this.state
      this.setState({
        authors: authors.filter((person, i) => {
          return i !== index;
        })
      })
    }
    console.log(index);
  }

  categoryFormFields = [
    {   // 1. MoU
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
    {   // 2. invited expert lecutres by nitap
      speakerName: '',
      designation: '',
      department: '',
      lectureType: '',    // keynote lecture/inaugural addr/special lecture
      title: '',
      eventName: '',
      organizer: '',      /// organizer with address
      date: ''
    },
    {   // 3. visits and invited/expert lectures from other institutes
      speakerName: '',
      designation: '',
      department: '',
      insName: '',
      lectureType: '',    // keynote lecture/inaugural addr/special lecture
      title: '',
      organizer: '',
      date: ''
    },
    {   // 4. ext funded proj
      pi: [],
      copi: [],
      title: '',
      fundAgency: '',
      date: ''
    },
    {   // 5. consultancy proj
      facultyName: '',
      designation: '',
      department: '',
      job: '',
      fundAgency: '',
    },
    {   // 6. patent
      invName: '',
      patentYear: '',
      patId: '',
      patOffice: ''
    },
    {   // 7. research papers
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
    {   // 8. book
      authors: [],
      pubYear: '',
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
      organizer: '',
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
      organizer: '',
      designation: '',
      collaboration: '', // optional
      date: ''
    },
    {   // announcements
      eventName: '',
      theme: '',
      organizer: '',
      designation: '',
      collaboration: '', // optinal (with full address)
      eventLink: '',
      date: '',
      eventBrochure: ''
    }
  ]

  render() {
    const { categoryId } = this.props

    if (parseInt(categoryId) === 1) {
      return (
        <>
          <p className='sub-label'>Institute Section</p>
          <Field labeltxt="Institute name" showLabel={this.state.insName.length}>
            <input type="text"
              className='form-control'
              required
              name="insName"
              value={this.state.insName}
              onChange={this.handleChange}
              placeholder="Institute name"
            />
          </Field>

          <Field labeltxt="Partner institute name" showLabel={this.state.partnerInsName.length}>
            <input type="text"
              className='form-control'
              required
              name="partnerInsName"
              value={this.state.partnerInsName}
              onChange={this.handleChange}
              placeholder="Partner institute name"
            />
          </Field>

          <Field labeltxt="Partner institute address" showLabel={this.state.partnerInsAddr.length}>
            <input type="text"
              className='form-control'
              required
              name="partnerInsAddr"
              value={this.state.partnerInsAddr}
              onChange={this.handleChange}
              placeholder="Partner institute address"
            />
          </Field>

          <p className='sub-label'>MoU details</p>
          <Field labeltxt="Theme" showLabel={this.state.theme.length}>
            <input type="text"
              className='form-control'
              required
              name="theme"
              value={this.state.theme}
              onChange={this.handleChange}
              placeholder="Theme"
            />
          </Field>

          <Field labeltxt="Purpose of agreement" showLabel={this.state.pursposeAgreement.length}>
            <input type="text"
              className='form-control'
              required
              name="pursposeAgreement"
              value={this.state.pursposeAgreement}
              onChange={this.handleChange}
              placeholder="Purpose of agreement"
            />
          </Field>

          <p className='sub-label'>Members present</p>
          <Field labeltxt="Members present from NITAP with their designation" showLabel={this.state.insMembers.length}>
            <input type="text"
              className='form-control'
              required
              name="insMembers"
              value={this.state.insMembers}
              onChange={this.handleChange}
              placeholder="Members present from NITAP with their designation"
            />
          </Field>

          <Field labeltxt="Members present from partner Institute/Organization with their designation" showLabel={this.state.outMembers.length}>
            <input type="text"
              className='form-control'
              required
              name="outMembers"
              value={this.state.outMembers}
              onChange={this.handleChange}
              placeholder="Members present from partner Institute/Organization with their designation"
            />
          </Field>

          <Field labeltxt="Other Renowned Members’ names with their designation" showLabel={this.state.otherMembers.length}>
            <input type="text"
              className='form-control'
              required
              name="otherMembers"
              value={this.state.otherMembers}
              onChange={this.handleChange}
              placeholder="Other Renowned Members’ names with their designation"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 2) {
      return (
        <>
          <p className='sub-label'>Details of the speaker</p>
          <Field showLabel={this.state.speakerName.length} labeltxt="Speaker name">
            <input type="text"
              className='form-control'
              required
              name="speakerName"
              value={this.state.speakerName}
              onChange={this.handleChange}
              placeholder="Speaker name"
            />
          </Field>

          <Field showLabel={this.state.designation.length} labeltxt="Designation">
            <input type="text"
              className='form-control'
              required
              name="designation"
              value={this.state.designation}
              onChange={this.handleChange}
              placeholder="Designation"
            />
          </Field>

          <Field showLabel={this.state.department.length} labeltxt="Department">
            <input type="text"
              className='form-control'
              required
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              placeholder="Department"
            />
          </Field>

          <p className='sub-label'>Event details</p>
          <Field showLabel={this.state.eventName.length} labeltxt="Event name">
            <input type="text"
              className='form-control'
              required
              name="eventName"
              value={this.state.eventName}
              onChange={this.handleChange}
              placeholder="Event name"
            />
          </Field>

          <Field showLabel={this.state.title.length} labeltxt="Title of speech">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title of speech"
            />
          </Field>

          <Field showLabel={this.state.lectureType.length} labeltxt="Keynote/special lecture/inagural address etc.">
            <input type="text"
              className='form-control'
              required
              name="lectureType"
              value={this.state.lectureType}
              onChange={this.handleChange}
              placeholder="Keynote/special lecture/inagural address etc."
            />
          </Field>

          <Field showLabel={this.state.organizer.length} labeltxt="Organizer with address">
            <input type="text"
              className='form-control'
              required
              name="organizer"
              value={this.state.organizer}
              onChange={this.handleChange}
              placeholder="Organizer with address"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 3) {
      return (
        <>
          <p className='sub-label'>Details of the speaker</p>
          <Field showLabel={this.state.speakerName.length} labeltxt="Speaker name">
            <input type="text"
              className='form-control'
              required
              name="speakerName"
              value={this.state.speakerName}
              onChange={this.handleChange}
              placeholder="Speaker name"
            />
          </Field>

          <Field showLabel={this.state.designation.length} labeltxt="Designation">
            <input type="text"
              className='form-control'
              required
              name="designation"
              value={this.state.designation}
              onChange={this.handleChange}
              placeholder="Designation"
            />
          </Field>

          <Field showLabel={this.state.insName.length} labeltxt="Institute name">
            <input type="text"
              className='form-control'
              required
              name="insName"
              value={this.state.insName}
              onChange={this.handleChange}
              placeholder="Institute name"
            />
          </Field>

          <p className='sub-label'>Event details</p>
          <Field showLabel={this.state.title.length} labeltxt="Title of speech">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title of speech"
            />
          </Field>

          <Field showLabel={this.state.lectureType.length} labeltxt="Keynote/special lecture/inagural address etc.">
            <input type="text"
              className='form-control'
              required
              name="lectureType"
              value={this.state.lectureType}
              onChange={this.handleChange}
              placeholder="Keynote/special lecture/inagural address etc."
            />
          </Field>

          <Field showLabel={this.state.organizer.length} labeltxt="Organizing member/department/section (NITAP)">
            <input type="text"
              className='form-control'
              required
              name="organizer"
              value={this.state.organizer}
              onChange={this.handleChange}
              placeholder="Organizing member/department/section (NITAP)"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 4) {
      return (
        <>
          <p className='sub-label'>Principal and Co-principal Investigators' details</p>
          <h4>Testing</h4>

          <table>
            {this.state.pi.length !== 0 && (
              <>
              <p className='sub-level'>Principal investigators</p>

              {this.state.pi.map((person, i) => {
                return (
                  <tr key={i}>
                    <span className='insidetable'>
                    <td>{person.name}</td>
                    <td>{person.designation}</td>
                    <td>{person.department}</td>
                    </span>
                    <td>
                      <button onClick={() => {this.removePerson(i, "PI")}}>x</button>
                    </td>
                  </tr>
                )
              })}
              </>
            )}

            {this.state.copi.length !== 0 && (
              <>
                <p className='sub-level'>Co-principal investigators</p>

                {this.state.copi.map((person, i) => {
                  return (
                    <tr key={i}>
                      <td>{person.name}</td>
                      <td>{person.designation}</td>
                      <td>{person.department}</td>

                      {this.state.insName.length === 0 && (
                        <td>{person.insName}</td>
                      )}
                      <td>
                        <button onClick={() => { this.removePerson(i, "CoPI") }}>x</button>
                      </td>
                    </tr>
                  )
                })}
              </>
            )}
          </table>
          {this.state.pi.length === 0 && (
            <Person personType="investigator" multiple="0" handleSubmit={this.addPerson}/>
          )}
          {this.state.pi.length !== 0 && (
            <Person personType="investigator" multiple="1" handleSubmit={this.addPerson}/>
          )}

          <p className='sub-label'>Project details</p>
          <Field labeltxt="Project title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Project title"
            />
          </Field>

          <Field labeltxt="Funding Agency">
            <input type="text"
              className='form-control'
              required
              name="fundAgency"
              value={this.state.fundAgency}
              onChange={this.handleChange}
              placeholder="Funding Agency"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 5) {
      return (
        <>
          <p className='sub-label'>Faculty member details</p>
          <Field labeltxt="Name of faculty">
            <input type="text"
              className='form-control'
              required
              name="facultyName"
              value={this.state.facultyName}
              onChange={this.handleChange}
              placeholder="Name of faculty"
            />
          </Field>

          <Field labeltxt="Designation">
            <input type="text"
              className='form-control'
              required
              name="designation"
              value={this.state.designation}
              placeholder="Designation"
            />
          </Field>

          <Field labeltxt="Department">
            <input type="text"
              className='form-control'
              required
              name="department"
              value={this.state.department}
              placeholder="Department"
            />
          </Field>

          <p className='sub-label'>Project details</p>
          <Field labeltxt="Project Title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              placeholder="Project Title"
            />
          </Field>

          <Field labeltxt="Sponsored agency">
            <input type="text"
              className='form-control'
              required
              name="fundAgency"
              value={this.state.fundAgency}
              placeholder="Sponsored agency"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 6) {
      return (
        <>
          <p className='sub-label'>Patent details</p>
          <Field showLabel={this.state.invName.length} labeltxt="Name of inventor to whom the patent was issued">
            <input type="text"
              className='form-control'
              required
              name="invName"
              value={this.state.invName}
              onChange={this.handleChange}
              placeholder="Name of inventor to whom the patent was issued"
            />
          </Field>

          <Field showLabel={this.state.patentYear.length} labeltxt="Year the patent was issued">
            <input type="number"
              className='form-control'
              required
              name="patentYear"
              value={this.state.patentYear}
              onChange={this.handleChange}
              min={1950}
              placeholder="Year the patent was issued"
            />
          </Field>

          <Field showLabel={this.state.patId.length} labeltxt="Unique patent identifier (patent number)">
            <input type="text"
              className='form-control'
              required
              name="patId"
              value={this.state.patId}
              onChange={this.handleChange}
              placeholder="Unique patent identifier (patent number)"
            />
          </Field>

          <p className='sub-label'>Official source of the patent information</p>
          <Field showLabel={this.state.patOffice.length} labeltxt="Patent office name">
            <input type="text"
              className='form-control'
              required
              name="patOffice"
              value={this.state.patOffice}
              onChange={this.handleChange}
              placeholder="Patent office name"
            />
          </Field>

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 8) {
      return (
        <>
          <p className='sub-label'>Author details</p>
          <h4>TODO: list</h4>


          <p className='sub-label'>Book details</p>
          <Field showLabel={this.state.pubYear.length} labeltxt="Publication year">
            <input type="text"
              className='form-control'
              required 
              name="pubYear"
              value={this.state.pubYear}
              onChange={this.handleChange}
              placeholder="Publication year"
            />
          </Field>

          <Field showLabel={this.state.title.length} labeltxt="Book title, subtitle">
            <input type="text"
              className='form-control'
              required 
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Book title, subtitle"
            />
          </Field>

          <Field showLabel={this.state.publisher.length} labeltxt="Publisher name">
            <input type="text"
              className='form-control'
              required 
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleChange}
              placeholder="Publisher name"
            />
          </Field>

          <Field showLabel={this.state.doiUrl.length} labeltxt="DOI (if avialable)">
            <input type="text"
              className='form-control'
              name="doiUrl"
              value={this.state.doiUrl}
              onChange={this.handleChange}
              placeholder="DOI (if avialable)"
            />
          </Field>
        </>
      )
    } else if (parseInt(categoryId) === 9) {
      return (
        <>
          <p className='sub-label'>Author details</p>
          <h4>TODO: list</h4>

          {/* <p className='sub-label'>National Or International </p>
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="Mention it was National or International Confrence"
            />
          </Field>

          <p className='sub-label'>Author Full Name</p>
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="Mention author full name"
            />
          </Field>

          <p className='sub-label'>Title of Contribution</p>bad habits
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="Mention the title of contribution"
            />
          </Field>

          <p className='sub-label'>Confrence Name</p>
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="List the name of Confrence"
            />
          </Field>

          <p className='sub-label'>Location</p>
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="List the location of the confrence"
            />
          </Field>

          <p className='sub-label'>DOI</p>
          <Field showLabel={this.state..length} labeltxt="">
            <input type="text"
              className='form-control'
              required
              placeholder="DOI if avialable"
            />
          </Field> */}

          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </>
      )
    } 
    else {
      return (
        <p>TODO</p>
      )
    }
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
    const { name, value } = event.target
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
          <CategoryForm categoryId={parseInt(this.state.category)} />
        )}

      </form>
    )
  }
}
