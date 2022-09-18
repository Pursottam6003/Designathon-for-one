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

  ov(val) {
    const { fields, categoryId } = this.props
    const fieldName = {
      insName: {
        1: 'Institute name',
        3: 'Institute name'
      },        // 1, 3
      partnerInsName: {
        1: 'Partner institute name'
      },   // 1
      partnerInsAddr: {
        1: 'Partner institute address'
      },   // 1
      theme: {
        1: 'Theme',
        14: 'Theme of the competition',
        15: 'Title (theme)',
        16: 'Theme'
      },// 1, 15, 16, 17
      purposeAgreement: {
        1: 'Purpose of agreement'
      },  // 1, 
      insMembers: {
        1: 'Members present from NITAP with their designation'
      },   // 1
      outMembers: {
        1: 'Members present from partner Institute/Organization with their designation'
      },   // 1
      otherMembers: {
        1: 'Other Renowned Members’ names with their designation'
      },   // 1
      date: {
        1: 'Date', 2: 'Date', 3: 'Date', 4: 'Date', 5: 'Date', 9: 'Date YYYY-MM (optional)', 12: 'Date', 13: 'Date', 15: 'Date', 16: 'Date', 17: 'Date'
      }, // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
      speakerName: {
        2: 'Speaker name',
        3: 'Speaker name'
      }, // 2, 3 
      designation: {
        2: 'Designation', 3: 'Designation', 5: 'Designation', 11: 'Designation', 12: 'Designation', 13: 'Designation', 15: 'Designation'
      },//2, 3, 5 , 11, 12, 13, 15
      department: {
        2: 'Department', 5: 'Designation', 11: 'Designation', 12: 'Designation', 13: 'Designation', 15: 'Designation'
      },//2, 5, 11, 12 , 13, 15
      lectureType: {
        2: 'Keynote/special lecture/inagural address etc.',
        3: 'Keynote/special lecture/inagural address etc.'
      },  // 2, 3 
      eventName: {
        2: 'Event name',
        9: 'Conference Name',
        13: 'Name of workshop',
        14: 'Name of the competition',
        15: 'Event name',
        16: 'Name of the event'
      },// 2, 9, 15, 16, 17 
      confType: {
        7: 'national',
        9: 'national'
      },   // 9
      eventType: {
        11: 'Programme type: workshop/confrence/seminaar/FDP/EDP'
      },   // 9, 10
      organizer: {
        2: 'Organizer with address',
        3: 'Organizing member/department/section (NITAP)',
        11: 'Organising institute name and address',
        13: 'Organising institute name with address',
        14: 'Organising section/institute name',
        16: 'Organizer name',
        17: 'Organizer name'
      },// 2, 3, 14, 16, 17 
      pi: {
        4: 'Principal Investigators'
      }, // 4
      copi: {
        4: 'Co-principal Investigators'
      }, // 4 
      title: {
        2: 'Title of speech',
        3: 'Title of speech',
        4: 'Projec title',
        5: 'Nature/ title of the work/job',
        7: 'Article title',
        8: 'Book title, subtitle',
        9: 'Contribution title',
        10: 'Title',
        11: 'Title of the programme'
      }, // 2, 3, 4, 8, 7, 9, 10
      editors: {
        10: "Editors' Name"
      }, // 10
      bookTitle: {
        10: 'Title of book'
      }, // 10
      fundAgency: {
        4: 'Funding Agency',
        5: 'Sponsored agency'
      },// 4, 5 
      facultyName: {
        5: 'Name of faculty',
        11: 'Name of the faculty',
        12: 'Name of the faculty',
        13: 'Name of the faculty'
      },// 11, 12, 13
      invName: {
        6: 'Name of inventor'
      }, // 6
      year: {
        6: 'Year the patent was issued',
        7: 'Publication year',
        8: 'Publication year'
      }, // 6, 7, 8
      patId: {
        6: 'Unique patent identifier (patent number)',
      },  // 6
      patOffice: {
        6: 'Patent office'
      }, // 6
      authors: {
        7: 'Author(s)',
        8: 'Author(s)',
        9: 'Author(s)',
        10: 'Author(s)'
      },    // 7, 8, 9, 10
      journalTitle: {
        7: 'Journal Title',
        12: 'Journal name'
      },   // 7
      volNo: {
        7: 'Volume no.',
      },    // 7
      issueNo: {
        7: 'Issue No.'
      },    // 7
      pageNos: {
        7: 'Page no.',
        10: 'Page numbers'
      },    // 7, 10 
      doiUrl: {
        7: 'DOI (if available)',
        8: 'DOI (if available)',
        9: 'DOI (if available)',
        10: 'DOI (if available)'
      },     // 7, 8, 9
      publisher: {
        8: 'Publisher name',
        10: 'Publisher',
        12: 'Publishing house'
      },  // 8, 10
      place: {
        9: 'Location of conference',
        15: 'Place name'
      },  // 9, 15
      winner: {
        14: 'Name with roll no',
      }, // 14
      rank: {
        14: 'first/second/third'
      },   // 14
      collaboration: {
        14: 'Institute Name if any collaboration/association',
        15: 'If collaboration mention its full address',
        16: 'collaboration',
        17: 'Collaborator address (optional)'
      },  // 14, 15, 16, 17
      coordinatorName: {
        15: 'Coordinator Name'
      },  // 15
      eventLink: {
        17: 'Event link'
      },  // 17
      eventBrochure: {17: 'Upload brochure'}  // 17
    }
    if (!fields[val]) {
      return fieldName[val][parseInt(categoryId)].toUpperCase()
    } else {
      return fields[val]
    }
  }

  updatePreview(updateType) {
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
    switch (category) {
      case 1:
        outStr = `${this.ov('insName')} and ${this.ov('partnerInsName')}, ${this.ov('partnerInsAddr')} signed a Memorandum of Understanding under ${this.ov('theme')}. ${this.ov('purposeAgreement')}. During the event, ${this.ov('insMembers')}, with ${this.ov('outMembers')} were present. ${this.ov('otherMembers')} had witnessed the event ${this.ov('date')}`
        break;    
      case 2:
        outStr = `${this.ov('speakerName')} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by {this.state.organizer} on {date} {photo}  `
        break;
      case 3:
        outStr = `${this.ov('speakerName')} ,${this.ov('designation')} of ${this.ov('department')} visited and delivered a ${this.ov('lectureType')} on "${this.ov('title')}" organised by ${this.ov('organizer')} on ${this.ov('date')}`
        break;      
      case 4:
        outStr = `${fields.pi[0]} ,${this.ov('designation')} of ${this.ov('department')} with ${fields.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`
        break;
      case 5:
        outStr = `${fields.job}. Drawing for ${fields.title} along with principle investigator ${fields.facultyName} ,${fields.designation} of ${fields.department}`
        break;
      case 6:
        outStr = `${fields.invName} ${fields.year}, ${fields.patId}  ${fields.patOffice}`
        break;
      case 7:
        outStr = `${fields.authors[0]} ${fields.year} Article title: ${fields.title} Journal title : ${fields.journalTitle} , Volume ${fields.volNo} ${fields.doiUrl}`
        break;
      case 8:
        outStr = `${fields.authors[0]}, ${fields.year} ${fields.title} published by ${fields.publisher} ${fields.doiUrl}`
        break;
      case 9:
        outStr = `${fields.authors[0]} , {firstinitial} ${fields.date} ${fields.title} {paper representation} ,${fields.confType} ${fields.location} ${fields.doiUrl}`
        break;
      case 10:
        outStr = `${fields.authors[0]} {first initial} ${fields.year}. ${fields.chapterTitle} ${fields.bookTitle} with ${fields.pageNos} published by ${fields.publisher} {doi}`
        break;
      case 11:
        outStr = `${fields.facultyName} ${fields.designation} of ${fields.department} on ${fields.programTitle} organised by ${fields.organizingName} ${fields.organizingAddr} ${fields.date} {photo}`
        break;
      case 12:
        outStr = `${fields.facultyName} ${fields.designation} of ${fields.department}  was reviewer of ${fields.journalName}. ${fields.publishingName} ${fields.date} {photo}`
        break;
      case 13:
        outStr = `${fields.facultyName} ${fields.designation} of ${fields.department}  was the chairpeson of ${fields.name} organised on ${fields.organizing} {address} {date} {photo}`
        break;
      case 14:
        outStr = `${fields.winnerName} ${fields.winnerRoll} ${fields.insName} won the ${fields.rank} in the competition on the theme of "${fields.theme} of ${fields.organizer} in association with ${fields.collaboration} on ${fields.date} {photo}"`
        break;
      case 15:
        outStr = `${fields.eventName} on ${fields.theme}  by ${fields.coordinatorsName} ${fields.designation} in ${fields.collaboration} ${fields.address} {date} {photo}`
        break;
      case 16:
        outStr = `${fields.eventName}was organised  by ${fields.organizer}  on the {theme} on {date} `
        break;
      case 17:
        outStr = `${fields.eventName} {theme} will be ${fields.organizer} ${fields.designation} sponsord by ${fields.collaboration} from ${fields.date} ${fields.eventLink}`
        break;
      default:
        break;    
    }

    if (updateType === "title") {
      if (title.length !== 0) {
        this.setState({
          heading: title
        })
      } else {
        this.setState({
          heading: selectOptions[category]
        })
      }
    } else {
      this.setState({
        output: outStr,
        images: images
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
      if (this.props.title !== prevProps.title) {
        this.updatePreview('title');
      }
      else {
        this.updatePreview('rest');
      }
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
<div className='prevbtn'>
          <button onClick={this.handleSubmit} className='btn submit'>Submit</button>
          <button onClick={this.resetPreview} className='btn reset'>Reset</button>
          </div>
        </div>
      </>
    )
  }
}