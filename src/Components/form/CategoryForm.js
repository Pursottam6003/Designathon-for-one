import React, { Component } from 'react'
import { Person } from './Person'
import { Field } from './Field'
import { List } from './List'

export class CategoryForm extends Component {
  initialState = {
    insName: '',        // 1, 3
    partnerInsName: '',   // 1
    partnerInsAddr: '',   // 1
    theme: '',// 1, 15, 16, 17
    purposeAgreement: '',  // 1, 
    insMembers: '',   // 1
    outMembers: '',   // 1
    otherMembers: '',   // 1
    date: '', // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
    toDate: '', // announcement, outreach, 
    speakerName: '', // 2, 3 
    designation: '',//2, 3, 5 , 11, 12, 13, 14, 15, 16, 17
    department: '',//2, 3, 5, 11, 12 , 13, 14 
    lectureType: '',  // 2, 3 
    eventName: '',// 2, 9, 15, 16, 17 
    nationalCount: '',   // 7, 9
    internationalCount: '',   // 7, 9
    eventType: '',   // 9, 10
    organizer: '',// 2, 3, 14, 16, 17 
    pi: [], // 4
    copi: [], // 4 
    title: '', // 2, 3, 4, 8, 7, 9, 10
    editors: '', // 10
    bookTitle: '', // 10
    fundAgency: '',// 4, 5 
    facultyName: '',// 11, 12, 13
    job: '',  // 5
    invName: '', // 6
    year: '', // 6, 7, 8
    patId: '',  // 6
    patOffice: '', // 6
    journalType: '', // 7
    author: [],    // 7, 8, 9, 10
    journalTitle: '',   // 7
    volNo: '',    // 7
    issueNo: '',    // 7
    pageNos: '',    // 7, 10 
    doiUrl: '',     // 7, 8, 9
    publisher: '',  // 8, 10
    place: '',  // 9, 15
    winner: '', // 14
    rank: '',   // 14
    collaboration: '',  // 14, 15, 16, 17
    coordinatorName: '',  // 15
    eventLink: '',  // 17
    eventBrochure: null,  // 17
    formData: {}
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value, files } = event.target;
    let setVal = value
    if (name === "eventBrochure") {
      setVal = files[0]
    }
    this.setState({
      [name]: setVal,
      formData: { ...this.state.formData, [name]: setVal }
    }, () => { this.props.handleUpdate(this.state.formData) })
  }

  addPerson = (person) => {
    const personType = person["type"].toLowerCase();
    this.setState({
      [personType]: [...this.state[personType], person]
    }, () => {
      this.setState({
        formData: { ...this.state.formData, [personType]: this.state[personType] }
      }, () => { this.props.handleUpdate(this.state.formData) })
    })
  }

  removePerson = (index, personType) => {
    const personTypeSm = personType.toLowerCase()
    const { [personTypeSm]: people } = this.state
    this.setState({
      [personTypeSm]: people.filter((person, i) => {
        return i !== index;
      })
    }, () => {
      this.setState({
        formData: { ...this.state.formData, [personTypeSm]: this.state[personTypeSm] }
      }, () => { this.props.handleUpdate(this.state.formData) })
    })
  }

  componentDidMount() {
    this.setState(this.initialState, () => {
      if ((this.props.categoryId === 7) || (this.props.categoryId === 9)) {
        this.setState({
          formData: { ...this.state.formData, confType: "national" }
        }, () => { this.props.handleUpdate(this.state.formData) })
      }
      this.props.handleUpdate(this.state.formData)
    });
  }

  render() {
    const { categoryId } = this.props

    if (parseInt(categoryId) === 1) {       // done
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

          <Field labeltxt="Purpose of agreement" showLabel={this.state.purposeAgreement.length}>
            <input type="text"
              className='form-control'
              required
              name="purposeAgreement"
              value={this.state.purposeAgreement}
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

          <p className='sub-label'>Date</p>
          <div className='date-wrapper'>
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 2) {    // done
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

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 3) {    // done
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

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 4) {    // done
      return (
        <>
          <p className='sub-label'>Principal and Co-principal Investigators' details</p>
          <List items={this.state.pi} itemType="PI" removeItem={this.removePerson} />
          <List items={this.state.copi} itemType="CoPI" removeItem={this.removePerson} />
          <Person personType="investigator" notFirst={this.state.pi.length} handleSubmit={this.addPerson} />

          <p className='sub-label'>Project details</p>
          <Field showLabel={this.state.title.length} labeltxt="Project title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Project title"
            />
          </Field>

          <Field showLabel={this.state.fundAgency.length} labeltxt="Funding Agency">
            <input type="text"
              className='form-control'
              required
              name="fundAgency"
              value={this.state.fundAgency}
              onChange={this.handleChange}
              placeholder="Funding Agency"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 5) {    // done
      return (
        <>
          <p className='sub-label'>Faculty member details</p>
          <Field showLabel={this.state.facultyName.length} labeltxt="Name of faculty">
            <input type="text"
              className='form-control'
              required
              name="facultyName"
              value={this.state.facultyName}
              onChange={this.handleChange}
              placeholder="Name of faculty"
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

          <p className='sub-label'>Project details</p>
          <Field showLabel={this.state.title.length} labeltxt="Nature/title of the work/job">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Nature/title of the work/job"
            />
          </Field>

          <Field showLabel={this.state.fundAgency.length} labeltxt="Sponsored agency">
            <input type="text"
              className='form-control'
              required
              name="fundAgency"
              value={this.state.fundAgency}
              onChange={this.handleChange}
              placeholder="Sponsored agency"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 6) {    // done
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

          <Field showLabel={this.state.year.length} labeltxt="Year the patent was issued">
            <input type="number"
              className='form-control'
              required
              name="year"
              value={this.state.year}
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

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 7) {    // done
      return (
        <>
          <p className='sub-label'>Research Papers</p>

          <div className='count-fields'>
            <Field showLabel={this.state.nationalCount.length} labeltxt="No. of National journals">
              <input type="number"
                className='form-control'
                required
                name="nationalCount"
                value={this.state.nationalCount}
                onChange={this.handleChange}
                min={0}
                placeholder="No. of National journals"
              />
            </Field>

            <Field showLabel={this.state.internationalCount.length} labeltxt="No. of International journals">
              <input type="number"
                className='form-control'
                required
                name="internationalCount"
                value={this.state.internationalCount}
                onChange={this.handleChange}
                min={0}
                placeholder="No. of International journals"
              />
            </Field>
          </div>

          <p className='sub-label'>Author details</p>
          <List items={this.state.author} itemType="author" removeItem={this.removePerson} />
          <Person personType="author" notFirst={this.state.author.length} handleSubmit={this.addPerson} />

          <p className='sub-label'>Research details</p>
          <Field showLabel={this.state.year.length} labeltxt="Publication year">
            <input type="number"
              className='form-control'
              required
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
              min={1950}
              placeholder="Publication year"
            />
          </Field>

          <Field showLabel={this.state.title.length} labeltxt="Article title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Article title"
            />
          </Field>

          <Field showLabel={this.state.journalTitle.length} labeltxt="Journal Title">
            <input type="text"
              className='form-control'
              required
              name="journalTitle"
              value={this.state.journalTitle}
              onChange={this.handleChange}
              placeholder="Journal Title"
            />
          </Field>

          <Field showLabel={this.state.volNo.length} labeltxt="Volume no.">
            <input type="text"
              className='form-control'
              required
              name="volNo"
              value={this.state.volNo}
              onChange={this.handleChange}
              placeholder="Volume no."
            />
          </Field>

          <Field showLabel={this.state.issueNo.length} labeltxt="Issue No.">
            <input type="text"
              className='form-control'
              required
              name="issueNo"
              value={this.state.issueNo}
              onChange={this.handleChange}
              placeholder="Issue No."
            />
          </Field>

          <Field showLabel={this.state.pageNos.length} labeltxt="Page no.">
            <input type="text"
              className='form-control'
              required
              name="pageNos"
              value={this.state.pageNos}
              onChange={this.handleChange}
              placeholder="Page no."
            />
          </Field>

          <Field showLabel={this.state.doiUrl.length} labeltxt="DOI (if available)">
            <input type="text"
              className='form-control'
              required
              name="doiUrl"
              value={this.state.doiUrl}
              onChange={this.handleChange}
              placeholder="DOI (if available)"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 8) {    // done
      return (
        <>
          <p className='sub-label'>Author details</p>
          <List items={this.state.author} itemType="author" removeItem={this.removePerson} />
          <Person personType="author" notFirst={this.state.author.length} handleSubmit={this.addPerson} />

          <p className='sub-label'>Book details</p>
          <Field showLabel={this.state.year.length} labeltxt="Publication year">
            <input type="text"
              className='form-control'
              required
              name="year"
              value={this.state.year}
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
    } else if (parseInt(categoryId) === 9) {    // done
      return (
        <>
          <p className='sub-label'>Author details</p>
          <List items={this.state.author} itemType="author" removeItem={this.removePerson} />
          <Person personType="author" notFirst={this.state.author.length} handleSubmit={this.addPerson} />

          <p className='sub-label'>Research details </p>
          <div className='count-fields'>
            <Field showLabel={this.state.nationalCount.length} labeltxt="No. of National journals">
              <input type="number"
                className='form-control'
                required
                name="nationalCount"
                value={this.state.nationalCount}
                onChange={this.handleChange}
                min={0}
                placeholder="No. of National papers"
              />
            </Field>

            <Field showLabel={this.state.internationalCount.length} labeltxt="No. of International journals">
              <input type="number"
                className='form-control'
                required
                name="internationalCount"
                value={this.state.internationalCount}
                onChange={this.handleChange}
                min={0}
                placeholder="No. of International papers"
              />
            </Field>
          </div>

          <Field showLabel={this.state.title.length} labeltxt="Contribution title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Contribution title"
            />
          </Field>

          <Field showLabel={this.state.eventName.length} labeltxt="Conferenece Name">
            <input type="text"
              className='form-control'
              required
              name="eventName"
              value={this.state.eventName}
              onChange={this.handleChange}
              placeholder="Conference Name"
            />
          </Field>

          <Field showLabel={this.state.place.length} labeltxt="Location of conference">
            <input type="text"
              className='form-control'
              required
              name="place"
              value={this.state.place}
              onChange={this.handleChange}
              placeholder="Location of conference"
            />
          </Field>

          <Field showLabel={this.state.doiUrl.length} labeltxt="DOI if avialable">
            <input type="text"
              className='form-control'
              name="doiUrl"
              onChange={this.handleChange}
              value={this.state.doiUrl}
              placeholder="DOI if avialable"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )
    } else if (parseInt(categoryId) === 10) {   // done
      return (

        <>
          <p className='sub-label'>Author details</p>
          <List items={this.state.author} itemType="author" removeItem={this.removePerson} />
          <Person personType="author" notFirst={this.state.author.length} handleSubmit={this.addPerson} />

          <p className='sub-label'>Publication details</p>
          <Field showLabel={this.state.title.length} labeltxt="Chapter title">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Chapter title"
            />
          </Field>
          <Field showLabel={this.state.editors.length} labeltxt="Editors' Name">
            <input type="text"
              className='form-control'
              required
              name="editors"
              value={this.state.editors}
              onChange={this.handleChange}
              placeholder="Editors' Name"
            />
          </Field>

          <Field showLabel={this.state.bookTitle.length} labeltxt="Title of Book">
            <input type="text"
              className='form-control'
              required
              placeholder="Title of Book"
              name="bookTitle"
              value={this.state.bookTitle}
              onChange={this.handleChange}
            />
          </Field>

          <Field showLabel={this.state.year.length} labeltxt="Publication year">
            <input type="number"
              className='form-control'
              required
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
              min={1950}
              placeholder="Publication year"
            />
          </Field>

          <Field showLabel={this.state.pageNos.length} labeltxt="Page Numbers">
            <input type="text"
              className='form-control'
              required
              name="pageNos"
              value={this.state.pageNos}
              onChange={this.handleChange}
              placeholder="Page Numbers"
            />
          </Field>

          <Field showLabel={this.state.publisher.length} labeltxt="Publisher">
            <input type="text"
              className='form-control'
              required
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleChange}
              placeholder="Publisher"
            />
          </Field>

          <Field showLabel={this.state.doiUrl.length} labeltxt="DOI (if avaialable)">
            <input type="text"
              className='form-control'
              name="doiUrl"
              value={this.state.doiUrl}
              onChange={this.handleChange}
              placeholder="DOI (if avialable)"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>
      )

    } else if (parseInt(categoryId) === 11) {   // done
      return (
        <>
          <p className='sub-label'>Faculty details</p>
          <Field showLabel={this.state.facultyName.length} labeltxt="Faculty name">
            <input type="text"
              className='form-control'
              required
              name="facultyName"
              value={this.state.facultyName}
              onChange={this.handleChange}
              placeholder="Name of the faculty"
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

          <p className='sub-label'>Programme details</p>
          <Field showLabel={this.state.eventType.length} labeltxt="Programme type">
            <input type="text"
              className='form-control'
              required
              name="eventType"
              onChange={this.handleChange}
              value={this.state.eventType}
              placeholder="Programme type: workshop/confrence/seminaar/FDP/EDP"
            />
          </Field>

          <Field showLabel={this.state.title.length} labeltxt="Title of the programme">
            <input type="text"
              className='form-control'
              required
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title of the programme"
            />
          </Field>

          <Field showLabel={this.state.organizer.length} labeltxt="Organising institute name and address">
            <input type="text"
              className='form-control'
              required
              name="organizer"
              value={this.state.organizer}
              onChange={this.handleChange}
              placeholder="Organising institute name and address"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
            <span>to</span>
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="toDate"
                value={this.state.toDate}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>)
    } else if (parseInt(categoryId) === 12) {   // done
      return (
        <>
          <p className='sub-label'>Faculty details</p>
          <Field showLabel={this.state.facultyName.length} labeltxt="Faculty name">
            <input type="text"
              className='form-control'
              required
              name="facultyName"
              value={this.state.facultyName}
              onChange={this.handleChange}
              placeholder="Name of the faculty"
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

          <p className='sub-label'>Journal details</p>
          <Field showLabel={this.state.journalTitle.length} labeltxt="Journal Name">
            <input type="text"
              className='form-control'
              required
              name="journalTitle"
              value={this.state.journalTitle}
              onChange={this.handleChange}
              placeholder="Journal Name"
            />
          </Field>

          <Field showLabel={this.state.publisher.length} labeltxt="Publishing House">
            <input type="text"
              className='form-control'
              required
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleChange}
              placeholder="Publishing House"
            />
          </Field>


          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>)
    } else if (parseInt(categoryId) === 13) {   // done
      return (
        <>
          <p className='sub-label'>Faculty details</p>
          <Field showLabel={this.state.facultyName.length} labeltxt="Faculty name">
            <input type="text"
              className='form-control'
              required
              name="facultyName"
              value={this.state.facultyName}
              onChange={this.handleChange}
              placeholder="Name of the faculty"
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

          <p className='sub-label'>Program details</p>
          <Field showLabel={this.state.eventName.length} labeltxt="Name of workshop">
            <input type="text"
              className='form-control'
              required
              name="eventName"
              value={this.state.eventName}
              onChange={this.handleChange}
              placeholder="Name of workshop/conference/seminar/short term course/FDP/EDP/webinar etc."
            />
          </Field>

          <Field showLabel={this.state.organizer.length} labeltxt="Organising institute name with address">
            <input type="text"
              className='form-control'
              required
              name="organizer"
              value={this.state.organizer}
              onChange={this.handleChange}
              placeholder="Organising institute name with address"
            />
          </Field>

          <p className='sub-label'>Date</p>
          <div className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Field>
            <span>to</span>
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                required
                name="toDate"
                value={this.state.toDate}
                onChange={this.handleChange}
              />
            </Field>
          </div>
        </>)
    } else if (parseInt(categoryId) === 14) {   // done
      return (<>
        <p className='sub-label'>Winner details</p>
        <Field showLabel={this.state.winner.length} labeltxt="Name with roll no.">
          <input type="text"
            className='form-control'
            required
            name="winner"
            value={this.state.winner}
            onChange={this.handleChange}
            placeholder="Name with roll no."
          />
        </Field>

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


        <p className='sub-label'>Competition details</p>
        <Field showLabel={this.state.eventName.length} labeltxt="Name of the competition">
          <input type="text"
            className='form-control'
            required
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleChange}
            placeholder="Name of the competition"
          />
        </Field>

        <Field showLabel={this.state.theme.length} labeltxt="Theme of the competition">
          <input type="text"
            className='form-control'
            required
            name="theme"
            value={this.state.theme}
            onChange={this.handleChange}
            placeholder="Theme of the competition"
          />
        </Field>

        <Field showLabel={this.state.rank.length} labeltxt="Position: first/second/third etc.">
          <input type="text"
            className='form-control'
            required
            name="rank"
            value={this.state.rank}
            onChange={this.handleChange}
            placeholder="Position: first/second/third etc."
          />
        </Field>

        <p className='sub-label'>Organizer details</p>
        <Field showLabel={this.state.organizer.length} labeltxt="Organising section/institute name">
          <input type="text"
            className='form-control'
            required
            name="organizer"
            value={this.state.organizer}
            onChange={this.handleChange}
            placeholder="Organising section/institute name"
          />
        </Field>

        <Field showLabel={this.state.collaboration.length} labeltxt="Institute Name if any collaboration/association">
          <input type="text"
            className='form-control'
            required
            name="collaboration"
            value={this.state.collaboration}
            onChange={this.handleChange}
            placeholder="Institute Name if any collaboration/association (optional)"
          />
        </Field>

        <p className='sub-label'>Date</p>
        <div className="date-wrapper">
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
        </div>
      </>)
    } else if (parseInt(categoryId) === 15) {   // done
      return (<>
        <p className='sub-label'>Coordinator details</p>
        <Field showLabel={this.state.coordinatorName.length} labeltxt="Coordinator(s) Name with designation and department">
          <input type="text"
            className='form-control'
            required
            placeholder="Coordinator(s) Name with designation and department"
            onChange={this.handleChange}
            name="coordinatorName"
            value={this.state.coordinatorName}
          />
        </Field>

        <Field showLabel={this.state.collaboration.length} labeltxt="If collaboration mention its full address">
          <input type="text"
            className='form-control'
            name="collaboration"
            onChange={this.handleChange}
            value={this.state.collaboration}
            placeholder="If collaboration mention its full address"
          />
        </Field>

        <p className='sub-label'>Event details</p>
        <Field showLabel={this.state.eventName.length} labeltxt="Event name">
          <input type="text"
            className='form-control'
            required
            name="eventName"
            onChange={this.handleChange}
            value={this.state.eventName}
            placeholder="Event name"
          />
        </Field>

        <Field showLabel={this.state.theme.length} labeltxt="Title (theme)">
          <input type="text"
            className='form-control'
            required
            name="theme"
            value={this.state.theme}
            onChange={this.handleChange}
            placeholder="Title (theme)"
          />
        </Field>

        <Field showLabel={this.state.place.length} labeltxt="Place Name">
          <input type="text"
            className='form-control'
            required
            name="place"
            onChange={this.handleChange}
            value={this.state.place}
            placeholder="Place Name"
          />
        </Field>

        <p className='sub-label'>Date</p>
        <div className="date-wrapper">
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
          <span>to</span>
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="toDate"
              value={this.state.toDate}
              onChange={this.handleChange}
            />
          </Field>
        </div>
      </>)
    } else if (parseInt(categoryId) === 16) {   // done
      return (<>

        <p className='sub-label'>Activity details</p>
        <Field showLabel={this.state.eventName.length} labeltxt="Name of the event">
          <input type="text"
            className='form-control'
            required
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleChange}
            placeholder="Name of the event"
          />
        </Field>

        <Field showLabel={this.state.theme.length} labeltxt="Theme">
          <input type="text"
            className='form-control'
            required
            name="theme"
            value={this.state.theme}
            onChange={this.handleChange}
            placeholder="Theme"
          />
        </Field>

        <p className='sub-label'>Organiser details</p>
        <Field showLabel={this.state.organizer.length} labeltxt="Organizer name">
          <input type="text"
            className='form-control'
            required
            name="organizer"
            value={this.state.organizer}
            onChange={this.handleChange}
            placeholder="Organizer name"
          />
        </Field>

        <Field showLabel={this.state.designation.length} labeltxt="Designation">
          <input type="text"
            className='form-control'
            required
            name='designation'
            onChange={this.handleChange}
            value={this.state.designation}
            placeholder="Desingation"
          />
        </Field>

        <Field showLabel={this.state.collaboration.length} labeltxt="If collaboration mention its name and full address">
          <input type="text"
            className='form-control'
            name="collaboration"
            onChange={this.handleChange}
            value={this.state.collaboration}
            placeholder="If collaboration mention its name and full address (optional)"
          />
        </Field>

        <p className='sub-label'>Date</p>
        <div className="date-wrapper">
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
          <span>to</span>
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="toDate"
              value={this.state.toDate}
              onChange={this.handleChange}
            />
          </Field>
        </div>
      </>)
    } else if (parseInt(categoryId) === 17) {   // done
      return (<>
        <p className='sub-label'>Event details</p>
        <Field showLabel={this.state.eventName.length} labeltxt="Event name">
          <input type="text"
            className='form-control'
            required
            name='eventName'
            value={this.state.eventName}
            onChange={this.handleChange}
            placeholder="Event name"
          />
        </Field>

        <Field showLabel={this.state.theme.length} labeltxt="Theme">
          <input type="text"
            className='form-control'
            required
            name='theme'
            value={this.state.theme}
            onChange={this.handleChange}
            placeholder="Theme"
          />
        </Field>

        <p className='sub-label'>Organiser details</p>
        <Field showLabel={this.state.organizer.length} labeltxt="Organizer name">
          <input type="text"
            className='form-control'
            required
            name="organizer"
            value={this.state.organizer}
            onChange={this.handleChange}
            placeholder="Organizer name"
          />
        </Field>

        <Field showLabel={this.state.designation.length} labeltxt="Desingation">
          <input type="text"
            className='form-control'
            required
            name='designation'
            value={this.state.designation}
            onChange={this.handleChange}
            placeholder="Desingation"
          />
        </Field>

        <Field showLabel={this.state.collaboration.length} labeltxt="If collaboration mention its full address">
          <input type="text"
            className='form-control'
            name="collaboration"
            onChange={this.handleChange}
            value={this.state.collaboration}
            placeholder="If collaboration mention its full address"
          />
        </Field>

        <p className='sub-label'>Further details</p>

        <Field showLabel={this.state.eventLink.length} labeltxt="Event link">
          <input type="text"
            className='form-control'
            required
            name="eventLink"
            value={this.state.eventLink}
            onChange={this.handleChange}
            placeholder="Event link"
          />
        </Field>

        <p className='sub-label'>Date</p>
        <div className="date-wrapper">
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Field>
          <span>to</span>
          <Field labeltxt="Date" showLabel={0}>
            <input type="date"
              className='form-control'
              required
              name="toDate"
              value={this.state.toDate}
              onChange={this.handleChange}
            />
          </Field>
        </div>


        <p className='sub-label'>Upload Brochure (pdf/jpg/png)</p>
        <Field showLabel={0} labeltxt="Upload Brochure">
          <input type="file"
            name="eventBrochure"
            className='form-control'
            accept='application/pdf, image/png, image/webp, image/jpeg'
            required
            onChange={this.handleChange}
          />
        </Field>
      </>)
    }
  }
}