import React, { Component } from 'react'

export class Preview extends Component {
  initialState = {
    output: ''
  }

  state = this.initialState

  updatePreview() {
    const {fields, title, categoryId} = this.props

    const templateStr = [
      `${fields.insName} and ${fields.partnerInsName}, singed a ${fields.theme}. {this.porps.purposeAgreement} During the event {this.props.insMembers}, {this.props.outMembers} were present . {this.props.othersMembers} had witnessed the event {this.props.date}  {photo}`,
      `{this.props.speakerName} delivered a {this.props.lectureType} on "{this.props.title}" in the {this.props.eventName} organised by {this.state.organizer} on {date} {photo}  `,
      `{this.props.speakerName} ,{this.props.designation} of {this.props.department} visited and delivered a {this.props.lectureType} on "{this.state.title}" organised by {this.props.organizer} on {this.props.date} {photo}`,
      `{this.props.pi[0]} ,{this.props.designation} of {this.props.department} with {this.props.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`,
      `{this.props.job}. Drawing for {this.props.title} along with principle investigator {this.props.facultyName} ,{this.props.designation} of {this.props.department}`,
      `{this.props.invName} {this.props.year}, {this.props.patId}  {this.props.patOffice}`,
      `{this.props.authors[0]} {this.props.year} Article title: {this.props.title} Journal title : {this.props.journalTitle} , Volume {this.props.volNo} {this.props.doiUrl}`,
      `{this.props.authors[0]}, {this.props.year} {this.props.title} published by {this.props.publisher} {this.props.doiUrl}`,
      `{this.props.authors[0]} , {firstinitial} {this.props.date} {this.props.title} {paper representation} ,{this.props.confType} {this.props.location} {this.props.doiUrl}`,
      `{this.props.authors[0]} {first initial} {this.props.year}. {this.props.chapterTitle} {this.props.bookTitle} with {this.props.pageNos} published by {this.props.publisher} {doi}`,
      `{this.props.facultyName} {this.props.designation} of {this.props.department} on {this.props.programTitle} organised by {this.props.organizingName} {this.props.organizingAddr} {this.props.date} {photo}`,
      `{this.props.facultyName} {this.props.designation} of {this.props.department}  was reviewer of {this.props.journalName}. {this.props.publishingName} {this.props.date} {photo}`,
      `{this.props.facultyName} {this.props.designation} of {this.props.department}  was the chairpeson of {this.props.name} organised on {this.props.organizing} {address} {date} {photo}`,
      `{this.props.winnerName} {this.props.winnerRoll} {this.props.insName} won the {this.props.rank} in the competition on the theme of "{this.props.theme} of {this.props.organizer} in association with {this.props.collaboration} on {this.props.date} {photo}"`,
      `{this.props.eventName} on {this.props.theme}  by {this.props.coordinatorsName} {this.props.designation} in {this.props.collaboration} {this.props.address} {date} {photo}`,
      `{this.props.eventName}was organised  by {this.props.organizer}  on the {theme} on {date} `,
      `{this.props.eventName} {theme} will be {this.props.organizer} {this.props.designation} sponsord by {this.props.collaboration} from {this.props.date} {this.props.eventLink}`      
    ]

    this.setState({
      output: fullstr1
    })
  }

  render() {
    const selectOptions = [
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

    setTimeout(() => {
      this.updatePreview()
    }, 2000);
    
    const {fields, title, categoryId} = this.props

    var fullstr1 = `${fields.insName} and ${fields.patnerInsName}, singed a ${fields.theme}. {this.porps.purposeAgreement} During the event {this.props.insMembers}, {this.props.outMembers} were present . {this.props.othersMembers} had witnessed the event {this.props.date}  {photo}`;
    var fullstr2 = `${fields.speakerName} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by ${fields.organizer} on ${fields.date} {photo}  `
    var fullstr3 = `{this.props.speakerName} ,{this.props.designation} of {this.props.department} visited and delivered a {this.props.lectureType} on "{this.state.title}" organised by {this.props.organizer} on {this.props.date} {photo}`
    var fullstr4 = `{this.props.pi[0]} ,{this.props.designation} of {this.props.department} with {this.props.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`
    var fullstr5 = `{this.props.job}. Drawing for {this.props.title} along with principle investigator {this.props.facultyName} ,{this.props.designation} of {this.props.department}`;
    var fullstr6 = `{this.props.invName} {this.props.year}, {this.props.patId}  {this.props.patOffice}`;
    var fullstr7 = `{this.props.authors[0]} {this.props.year} Article title: {this.props.title} Journal title : {this.props.journalTitle} , Volume {this.props.volNo} {this.props.doiUrl}`;
    var fullstr8 = `{this.props.authors[0]}, {this.props.year} {this.props.title} published by {this.props.publisher} {this.props.doiUrl}`;
    var fullstr9 = `{this.props.authors[0]} , {firstinitial} {this.props.date} {this.props.title} {paper representation} ,{this.props.confType} {this.props.location} {this.props.doiUrl}`;
    var fullstr10 = `{this.props.authors[0]} {first initial} {this.props.year}. {this.props.chapterTitle} {this.props.bookTitle} with {this.props.pageNos} published by {this.props.publisher} {doi}`;
    var fullstr11 = `{this.props.facultyName} {this.props.designation} of {this.props.department} on {this.props.programTitle} organised by {this.props.organizingName} {this.props.organizingAddr} {this.props.date} {photo}`;
    var fullstr12 = `{this.props.facultyName} {this.props.designation} of {this.props.department}  was reviewer of {this.props.journalName}. {this.props.publishingName} {this.props.date} {photo}`;
    var fullstr13 = `{this.props.facultyName} {this.props.designation} of {this.props.department}  was the chairpeson of {this.props.name} organised on {this.props.organizing} {address} {date} {photo}`;
    var fullstr14 = `{this.props.winnerName} {this.props.winnerRoll} {this.props.insName} won the {this.props.rank} in the competition on the theme of "{this.props.theme} of {this.props.organizer} in association with {this.props.collaboration} on {this.props.date} {photo}"`;
    var fullstr15 = `{this.props.eventName} on {this.props.theme}  by {this.props.coordinatorsName} {this.props.designation} in {this.props.collaboration} {this.props.address} {date} {photo}`;
    var fullstr16 = `{this.props.eventName}was organised  by {this.props.organizer}  on the {theme} on {date} `;
    var fullstr17 = `{this.props.eventName} {theme} will be {this.props.organizer} {this.props.designation} sponsord by {this.props.collaboration} from {this.props.date} {this.props.eventLink}`;

    let categoryid = 1;

    if (parseInt(categoryId)=== 1) {
      // mou
      return (
        <>

          <div className='preview'>
            <textarea className='textarea' placeholder='Title..'>{selectOptions[parseInt(categoryId)]}</textarea>

            <textarea className='txtarea' placeholder='your output will show here' value={this.state.output} />
          </div>
          {/* <div className='preview'>
          <h3>{selectOptions[0]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr1}>  
          </textarea>
          </div> */}
        </>
      )
    }


    else if (parseInt(categoryId) === 2) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[1]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr2}>
            </textarea>
          </div>
        </>
      )
    }



    else if (parseInt(categoryId) === 3) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[2]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr3}>
            </textarea>
          </div>
        </>
      )
    }

    else if (parseInt(categoryId) === 4) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[3]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr4}>
            </textarea>
          </div>
        </>
      )
    }

    else if (parseInt(categoryId)=== 5) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[4]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr5}>
            </textarea>
          </div>
        </>
      )
    }

    else if (parseInt(categoryId) === 6) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[5]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr6}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 7) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[6]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr7}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 8) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[7]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr8}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 9) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[8]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr9}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 10) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[9]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr10}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 11) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[10]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr11}>
            </textarea>
          </div>
        </>
      )
    }
    else if (parseInt(categoryId) === 12) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[11]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr12}>
            </textarea>
          </div>
        </>
      )
    }


    else if (parseInt(categoryId)=== 13) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[12]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr13}>
            </textarea>
          </div>
        </>
      )
    }



    else if (parseInt(categoryId) === 14) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[13]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr14}>
            </textarea>
          </div>
        </>
      )
    }


    else if (parseInt(categoryId) === 15) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[14]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr15}>
            </textarea>
          </div>
        </>
      )
    }

    else if (parseInt(categoryId) === 16) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[16]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr16}>
            </textarea>
          </div>
        </>
      )
    }


    else if (parseInt(categoryId) === 17) {
      // mou
      return (
        <>
          <div className='preview'>
            <h3>{selectOptions[16]} </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr17}>
            </textarea>
          </div>
        </>
      )
    }

    else {
      return (
        <>
          <div className='preview'>
            <h3> MEOW </h3>
            <textarea className='txtarea' placeholder='your output will show here' value={fullstr2}> </textarea>

          </div>
        </>
      )
    }
  }
}

