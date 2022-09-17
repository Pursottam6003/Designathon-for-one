import React, { Component } from 'react'

const Grow = (props) => {
  const { content } = props;

  return (
    <div className='grow-component'>
      {content}
    </div>
  )
}

export class Preview extends Component {
  initialState = {
    heading: '',
    output: '',
    images: []
  }

  state = this.initialState


  updatePreview() {
    const { fields, title, categoryId, images } = this.props
    const category = parseInt(categoryId)

    const selectOptions = [
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

    let outStr = ''
    if (category === 1) {
      outStr = `${fields.insName} and ${fields.partnerInsName}, ${fields.partnerInsAddr} signed a ${fields.theme}. ${fields.purposeAgreement} During the event ${fields.insMembers}, ${fields.outMembers} were present . ${fields.otherMembers} had witnessed the event ${fields.date}  {photo}`
    } else if (category === 2) {
      outStr = `${fields.speakerName} ${fields.designation} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by ${fields.organizer} on ${fields.date} {photo}  `
    } else if (category === 3) {
      outStr = `${fields.speakerName} ,${fields.designation} of ${fields.department} visited and delivered a ${fields.lectureType} on ${fields.title} organised by ${fields.organizer} on ${fields.date} {photo}`
    } else if (category === 4) {
      outStr = `${fields.pi[0]} ,${fields.designation} of ${fields.department} with ${fields.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`
    } else if (category === 5) {
      outStr = `${fields.fundAgency}  is funding a for project ${fields.title} along with principle investigator ${fields.facultyName} ,${fields.designation} of ${fields.department}`
    } else if (category === 6) {
      outStr = `${fields.invName} ${fields.year}, ${fields.patId}  ${fields.patOffice}`
    } else if (category === 7) {
      outStr = `${fields.authors[0].firstInitials}  ${fields.authors[0].lastName} ${fields.year} Article title: ${fields.title} Journal title : ${fields.journalTitle} , Volume ${fields.volNo} ${fields.doiUrl}`
    } else if (category === 8) {
      outStr = `${fields.authors[0]}, ${fields.year} ${fields.title} published by ${fields.publisher} ${fields.doiUrl}`
    } else if (category === 9) {
      outStr = `${fields.authors[0]} , {firstinitial} ${fields.date} ${fields.title} {paper representation} ,${fields.confType} ${fields.location} ${fields.doiUrl}`
    } else if (category === 10) {
      outStr = `${fields.authors[0]} {first initial} ${fields.year}. ${fields.chapterTitle} ${fields.bookTitle} with ${fields.pageNos} published by ${fields.publisher} {doi}`
    } else if (category === 11) {
      outStr = `${fields.facultyName} ${fields.designation} of ${fields.department} on ${fields.programTitle} organised by ${fields.organizingName} ${fields.organizingAddr} ${fields.date} {photo}`
    } else if (category === 12) {
      outStr = `${fields.facultyName} ${fields.designation} of ${fields.department}  was reviewer of ${fields.journalName}. ${fields.publishingName} ${fields.date} {photo}`
    } else if (category === 13) {
      outStr = `${fields.facultyName} ${fields.designation} of ${fields.department}  was the chairpeson of ${fields.name} organised on ${fields.organizing} {address} {date} {photo}`
    } else if (category === 14) {
      outStr = `${fields.winnerName} ${fields.winnerRoll} ${fields.insName} won the ${fields.rank} in the competition on the theme of "${fields.theme} of ${fields.organizer} in association with ${fields.collaboration} on ${fields.date} {photo}"`
    } else if (category === 15) {
      outStr = `${fields.eventName} on ${fields.theme}  by ${fields.coordinatorsName} ${fields.designation} in ${fields.collaboration} ${fields.address} {date} {photo}`
    } else if (category === 16) {
      outStr = `${fields.eventName} was organised  by ${fields.organizer} ${fields.designation} on the  theme of ${fields.theme} on ${fields.date} `
    } else if (category === 17) {
      outStr = `${fields.eventName} ${fields.theme} will be ${fields.organizer} ${fields.designation} sponsord by ${fields.collaboration} from ${fields.date} ${fields.eventLink}`
    }

    this.setState({
      output: outStr,
      images: images
    })

    if (title.length !== 0) {
      this.setState({
        heading: title
      })
    } else {
      this.setState({
        heading: selectOptions[category]
      })
    }
  }

  resetPreview = () => {
    this.updatePreview()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.submit(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updatePreview();
    }
  }

  render() {
    const { heading, output, images } = this.state
    let imgComponentArr = []
    if (images && images.length !== 0) {
      imgComponentArr = images.map((img, i) => {
        return <img key={i} alt="technodaya-magazine" src={URL.createObjectURL(img) } />
      })
    }
    return (
      <>
        <div className='preview' >
          <textarea className='textarea' name="heading" placeholder='Title...' value={heading} onChange={this.handleChange} />
          <div className='txtarea-wrapper'>
            <textarea className='txtarea' name="output" placeholder='your output will show here' value={output} onChange={this.handleChange} />
            <Grow content={output} />
          </div>

          <div className='image-preview'>
            {imgComponentArr}
          </div>

          <button onClick={this.handleSubmit} className='btn submit'>Submit</button>
          <button onClick={this.resetPreview} className='btn reset'>Reset</button>
        </div>
      </>
    )
  }
}