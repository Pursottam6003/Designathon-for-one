import React, { Component } from 'react'

export class Preview extends Component {
  initialState = {
    heading: '',
    output: ''
  }

  state = this.initialState

  updatePreview() {
    const { fields, title, categoryId } = this.props
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
      outStr = `${fields.speakerName} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by {this.state.organizer} on {date} {photo}  `
    } else if (category === 3) {
      outStr = `${fields.speakerName} ,${fields.designation} of ${fields.department} visited and delivered a ${fields.lectureType} on "{this.state.title}" organised by ${fields.organizer} on ${fields.date} {photo}`
    } else if (category === 4) {
      outStr = `${fields.pi[0]} ,${fields.designation} of ${fields.department} with ${fields.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`
    } else if (category === 5) {
      outStr = `${fields.job}. Drawing for ${fields.title} along with principle investigator ${fields.facultyName} ,${fields.designation} of ${fields.department}`
    } else if (category === 6) {
      outStr = `${fields.invName} ${fields.year}, ${fields.patId}  ${fields.patOffice}`
    } else if (category === 7) {
      outStr = `${fields.authors[0]} ${fields.year} Article title: ${fields.title} Journal title : ${fields.journalTitle} , Volume ${fields.volNo} ${fields.doiUrl}`
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
      outStr = `${fields.eventName}was organised  by ${fields.organizer}  on the {theme} on {date} `
    } else if (category === 17) {
      outStr = `${fields.eventName} {theme} will be ${fields.organizer} ${fields.designation} sponsord by ${fields.collaboration} from ${fields.date} ${fields.eventLink}`
    }
    
    const templateStr = [
      ``,
      // `${fields.insName} and ${fields.partnerInsName}, ${fields.partnerInsAddr} signed a ${fields.theme}. ${fields.purposeAgreement} During the event ${fields.insMembers}, ${fields.outMembers} were present . ${fields.otherMembers} had witnessed the event ${fields.date}  {photo}`,
      // `${fields.speakerName} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by {this.state.organizer} on {date} {photo}  `,
      // `${fields.speakerName} ,${fields.designation} of ${fields.department} visited and delivered a ${fields.lectureType} on "{this.state.title}" organised by ${fields.organizer} on ${fields.date} {photo}`,
      // `${fields.pi[0]} ,${fields.designation} of ${fields.department} with ${fields.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`,
      // `${fields.job}. Drawing for ${fields.title} along with principle investigator ${fields.facultyName} ,${fields.designation} of ${fields.department}`,
      // `${fields.invName} ${fields.year}, ${fields.patId}  ${fields.patOffice}`,
      // `${fields.authors[0]} ${fields.year} Article title: ${fields.title} Journal title : ${fields.journalTitle} , Volume ${fields.volNo} ${fields.doiUrl}`,
      // `${fields.authors[0]}, ${fields.year} ${fields.title} published by ${fields.publisher} ${fields.doiUrl}`,
      // `${fields.authors[0]} , {firstinitial} ${fields.date} ${fields.title} {paper representation} ,${fields.confType} ${fields.location} ${fields.doiUrl}`,
      // `${fields.authors[0]} {first initial} ${fields.year}. ${fields.chapterTitle} ${fields.bookTitle} with ${fields.pageNos} published by ${fields.publisher} {doi}`,
      // `${fields.facultyName} ${fields.designation} of ${fields.department} on ${fields.programTitle} organised by ${fields.organizingName} ${fields.organizingAddr} ${fields.date} {photo}`,
      // `${fields.facultyName} ${fields.designation} of ${fields.department}  was reviewer of ${fields.journalName}. ${fields.publishingName} ${fields.date} {photo}`,
      // `${fields.facultyName} ${fields.designation} of ${fields.department}  was the chairpeson of ${fields.name} organised on ${fields.organizing} {address} {date} {photo}`,
      // `${fields.winnerName} ${fields.winnerRoll} ${fields.insName} won the ${fields.rank} in the competition on the theme of "${fields.theme} of ${fields.organizer} in association with ${fields.collaboration} on ${fields.date} {photo}"`,
      // `${fields.eventName} on ${fields.theme}  by ${fields.coordinatorsName} ${fields.designation} in ${fields.collaboration} ${fields.address} {date} {photo}`,
      // `${fields.eventName}was organised  by ${fields.organizer}  on the {theme} on {date} `,
      // `${fields.eventName} {theme} will be ${fields.organizer} ${fields.designation} sponsord by ${fields.collaboration} from ${fields.date} ${fields.eventLink}`
    ]

    this.setState({
      output: outStr,
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updatePreview();
    }
  }

  render() {
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

    const { categoryId } = this.props

    return (
      <>
        <div className='preview'>
          <textarea className='textarea' placeholder='Title..' value={this.state.heading} />
          <textarea className='txtarea' placeholder='your output will show here' value={this.state.output} />
        </div>
      </>
    )
  }
  //   if (categoryid === 1) {
  //     // mou
  //     return (
  //       <>

  //         <div className='preview'>
  //           <textarea className='textarea' placeholder='Title..'>{selectOptions[parseInt(categoryId)]}</textarea>

  //           <textarea className='txtarea' placeholder='your output will show here' value={this.state.output} />
  //         </div>
  //         {/* <div className='preview'>
  //         <h3>{selectOptions[0]} </h3>
  //         <textarea className='txtarea' placeholder='your output will show here'  value={fullstr1}>  
  //         </textarea>
  //         </div> */}
  //       </>
  //     )
  //   }


  //   else if (categoryid === 2) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[1]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr2}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }



  //   else if (categoryid === 3) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[2]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr3}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }

  //   else if (categoryid === 4) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[3]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr4}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }

  //   else if (categoryid === 5) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[4]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr5}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }

  //   else if (categoryid === 6) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[5]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr6}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 7) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[6]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr7}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 8) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[7]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr8}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 9) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[8]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr9}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 10) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[9]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr10}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 11) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[10]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr11}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }
  //   else if (categoryid === 12) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[11]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr12}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }


  //   else if (categoryid === 13) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[12]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr13}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }



  //   else if (categoryid === 14) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[13]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr14}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }


  //   else if (categoryid === 15) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[14]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr15}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }

  //   else if (categoryid === 16) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[16]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr16}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }


  //   else if (categoryid === 17) {
  //     // mou
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3>{selectOptions[16]} </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr17}>
  //           </textarea>
  //         </div>
  //       </>
  //     )
  //   }

  //   else {
  //     return (
  //       <>
  //         <div className='preview'>
  //           <h3> MEOW </h3>
  //           <textarea className='txtarea' placeholder='your output will show here' value={fullstr2}> </textarea>

  //         </div>
  //       </>
  //     )
  //   }
  // }
}

