import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const NoPreview = () => {
  return (
    <div className='no-content'>
      <div className='illustration'>
      <svg width="155" height="141" viewBox="0 0 155 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2602 117.081C11.2602 117.371 11.1875 117.662 11.1147 117.879C11.042 118.097 10.8965 118.314 10.6782 118.532C10.46 118.75 10.3145 118.822 10.0962 118.967C9.87797 119.112 9.58696 119.112 9.29595 119.112C9.00495 119.112 8.71395 119.04 8.4957 118.895C8.27745 118.75 8.05919 118.604 7.91369 118.314C7.76819 118.024 7.62268 117.807 7.54993 117.444C7.47718 117.081 7.40443 116.719 7.40443 116.283C7.40443 115.776 7.47718 115.268 7.54993 114.833C7.62268 114.397 7.84094 114.035 8.05919 113.744C8.27744 113.454 8.56845 113.164 8.85945 113.019C9.15046 112.874 9.51421 112.801 9.87796 112.801C10.3145 112.801 10.6055 112.874 10.8965 112.946V113.599C10.6055 113.454 10.2417 113.382 9.87796 113.382C9.58696 113.382 9.36871 113.454 9.15045 113.599C8.9322 113.744 8.71395 113.89 8.56844 114.107C8.42294 114.325 8.27744 114.615 8.20469 114.905C8.13194 115.195 8.05919 115.558 8.05919 115.921C8.35019 115.413 8.78671 115.195 9.44146 115.195C9.73247 115.195 9.95072 115.268 10.169 115.34C10.3872 115.413 10.5327 115.558 10.751 115.703C10.9692 115.848 11.042 116.066 11.1147 116.283C11.1875 116.501 11.2602 116.791 11.2602 117.081ZM10.5327 117.154C10.5327 116.936 10.5327 116.719 10.46 116.573C10.3872 116.428 10.3145 116.283 10.2417 116.138C10.169 115.993 10.0235 115.921 9.87796 115.848C9.73246 115.776 9.58696 115.775 9.36871 115.775C9.22321 115.775 9.00496 115.776 8.85945 115.848C8.71395 115.921 8.56845 115.993 8.4957 116.138C8.42295 116.283 8.27744 116.356 8.27744 116.501C8.27744 116.646 8.20469 116.791 8.20469 117.009C8.20469 117.226 8.20469 117.444 8.27744 117.589C8.35019 117.734 8.42295 117.952 8.4957 118.097C8.56845 118.242 8.71395 118.314 8.85945 118.387C9.00496 118.459 9.15046 118.532 9.36871 118.532C9.51421 118.532 9.73246 118.532 9.87796 118.46C10.0235 118.387 10.169 118.314 10.2417 118.169C10.3145 118.024 10.3872 117.879 10.46 117.734C10.5327 117.589 10.5327 117.371 10.5327 117.154Z" fill="white"></path>
        <path d="M17.153 119.04H16.3528L15.698 117.299H13.079L12.497 119.04H11.6967L14.0247 112.946H14.7522L17.153 119.04ZM15.4797 116.646L14.534 114.035C14.534 113.962 14.4612 113.817 14.4612 113.599C14.4612 113.744 14.3885 113.889 14.3885 114.035L13.4427 116.646H15.4797Z" fill="white"></path>
        <path d="M18.026 119.04V112.946H19.6993C21.8818 112.946 22.9004 113.962 22.9004 115.921C22.9004 116.864 22.6093 117.589 22.0273 118.169C21.4453 118.75 20.6451 119.04 19.6266 119.04H18.026ZM18.7535 113.599V118.387H19.6993C20.4996 118.387 21.1543 118.169 21.5908 117.734C22.0273 117.299 22.2456 116.719 22.2456 115.921C22.2456 114.325 21.4453 113.599 19.7721 113.599H18.7535Z" fill="white"></path>
        <path d="M26.9744 112.946V116.936H27.7747V117.589H26.9744V119.04H26.3196V117.589H23.4824V117.009C23.7734 116.719 23.9916 116.356 24.2826 116.066C24.5736 115.776 24.7919 115.413 25.0829 115.05C25.3739 114.687 25.5921 114.325 25.7376 113.962C25.8831 113.599 26.1014 113.309 26.2469 112.946H26.9744ZM24.2099 116.936H26.3196V113.962C26.1014 114.325 25.8831 114.687 25.7376 114.978C25.5921 115.268 25.3739 115.558 25.2284 115.775C25.0829 115.993 24.8646 116.211 24.7191 116.428C24.5736 116.646 24.3554 116.791 24.2099 116.936Z" fill="white"></path>
        <path d="M28.8659 119.04V112.946H30.5392C32.7218 112.946 33.7403 113.962 33.7403 115.921C33.7403 116.864 33.4493 117.589 32.8672 118.169C32.2852 118.75 31.485 119.04 30.4665 119.04H28.8659ZM29.5934 113.599V118.387H30.5392C31.3395 118.387 31.9942 118.169 32.4308 117.734C32.8673 117.299 33.0855 116.719 33.0855 115.921C33.0855 114.325 32.2853 113.599 30.612 113.599H29.5934Z" fill="white"></path>
        <path d="M38.469 113.309C38.3963 113.454 38.2508 113.672 38.1053 113.89C37.9598 114.107 37.8143 114.397 37.6688 114.687C37.5233 114.978 37.3778 115.34 37.2323 115.63C37.0868 115.921 36.9413 116.356 36.7958 116.718C36.6503 117.081 36.5775 117.444 36.432 117.807C36.2865 118.169 36.2865 118.532 36.2138 118.895H35.4862C35.559 118.532 35.6318 118.169 35.7045 117.807C35.7773 117.444 35.9228 117.081 36.0683 116.718C36.2138 116.356 36.3593 115.993 36.5048 115.63C36.6503 115.268 36.7958 114.978 36.9413 114.687C37.0868 114.397 37.2323 114.18 37.305 113.962C37.3778 113.744 37.5233 113.599 37.596 113.454H34.5405V112.801H38.3963V113.309H38.469Z" fill="white"></path>
        <path d="M40.2879 72.791C40.2879 50.6996 58.1965 32.791 80.2879 32.791H105.049C127.141 32.791 145.049 50.6996 145.049 72.791V94.4491H40.2879V72.791Z" fill="url(#paint0_linear_5250_69230)"></path>
        <rect x="103.581" y="58.1796" width="5.82008" height="31.1917" rx="2.91004" fill="#979593"></rect>
        <rect x="16.2801" y="94.449" width="138.227" height="9.43005" rx="4.71503" fill="#89D1D1"></rect>
        <ellipse cx="106.491" cy="60.3558" rx="6.54758" ry="6.5285" fill="#F3F3F3"></ellipse>
        <path fillRule="evenodd" clipRule="evenodd" d="M120.314 72.6874H115.949V72.6874H109.401V84.2935H115.949V84.2935H120.314L115.949 78.4904L120.314 72.6874Z" fill="#EE8F94"></path>
        <rect x="83.4197" y="103.879" width="4.35233" height="36.2694" fill="#ACACAC"></rect>
        <rect x="87.772" y="103.879" width="11.6062" height="36.2694" fill="#C7C7C7"></rect>
        <path d="M39.8964 57.4542C39.8964 43.8331 50.9385 32.791 64.5596 32.791C78.1807 32.791 89.2228 43.8331 89.2228 57.4542V94.449H39.8964V57.4542Z" fill="#6AD4D7"></path>
        <path d="M45.2753 37.8549L43.2447 44.0046L49.8051 43.8772L45.2753 37.8549Z" fill="#E3646A"></path>
        <rect x="58.3679" y="27.6818" width="1.13859" height="6.5285" rx="0.569297" transform="rotate(-37.5528 58.3679 27.6818)" fill="#8A8886"></rect>
        <path fillRule="evenodd" clipRule="evenodd" d="M65.2849 31.6409H65.2072C62.4457 31.6409 60.2072 33.8795 60.2072 36.6409V36.7187H62.2072V36.6409C62.2072 34.9841 63.5503 33.6409 65.2072 33.6409H65.2849V31.6409Z" fill="#8A8886"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M64.5595 31.6409H64.4818C61.7204 31.6409 59.4818 33.8795 59.4818 36.6409V36.7187H60.9818V36.6409C60.9818 34.7079 62.5488 33.1409 64.4818 33.1409H64.5595V31.6409Z" fill="#8A8886"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M63.8341 31.6409H63.7564C60.995 31.6409 58.7564 33.8795 58.7564 36.6409V36.7187H60.2564V36.6409C60.2564 34.7079 61.8234 33.1409 63.7564 33.1409H63.8341V31.6409Z" fill="#8A8886"></path>
        <circle cx="65.2849" cy="32.3663" r="0.725389" fill="#8A8886"></circle>
        <circle cx="59.4818" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <circle cx="60.9326" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <circle cx="60.2072" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <rect x="54.4041" y="27.6818" width="1.13859" height="6.5285" rx="0.569297" transform="rotate(-37.5528 54.4041 27.6818)" fill="#8A8886"></rect>
        <path fillRule="evenodd" clipRule="evenodd" d="M61.321 31.6409H61.2433C58.4819 31.6409 56.2433 33.8795 56.2433 36.6409V36.7187H58.2433V36.6409C58.2433 34.9841 59.5865 33.6409 61.2433 33.6409H61.321V31.6409Z" fill="#8A8886"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M60.5957 31.6409H60.518C57.7565 31.6409 55.518 33.8795 55.518 36.6409V36.7187H57.018V36.6409C57.018 34.7079 58.585 33.1409 60.518 33.1409H60.5957V31.6409Z" fill="#8A8886"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M59.8703 31.6409H59.7926C57.0311 31.6409 54.7926 33.8795 54.7926 36.6409V36.7187H56.2926V36.6409C56.2926 34.7079 57.8596 33.1409 59.7926 33.1409H59.8703V31.6409Z" fill="#8A8886"></path>
        <circle cx="61.3211" cy="32.3663" r="0.725389" fill="#8A8886"></circle>
        <circle cx="55.518" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <circle cx="56.9687" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <circle cx="56.2433" cy="36.7187" r="0.725389" fill="#8A8886"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M34.8542 35.1721L61.658 0.148438H70L57.6684 14.2935C59.6027 16.4697 62.8912 22.4179 60.5699 28.8013C58.2487 35.1847 49.81 37.8686 46.4249 38.2313L46.3312 38.2115C46.3928 38.5716 46.4249 38.9418 46.4249 39.3194C46.4249 42.925 43.5019 45.8479 39.8964 45.8479C36.2908 45.8479 33.3679 42.925 33.3679 39.3194C33.3679 37.9782 33.7723 36.7315 34.4658 35.6946L34.4559 35.6925L34.57 35.5435C34.6603 35.4163 34.7551 35.2924 34.8542 35.1721Z" fill="#EE8F94"></path>
        <path d="M46.9056 25.7787C47.4853 23.6786 52.573 16.3537 55.3308 13.004C57.8312 17.4788 61.1399 25.8608 56.4868 30.5798C51.1359 36.0064 45.5694 30.619 46.9056 25.7787Z" fill="#E3646A"></path>
        <ellipse cx="41.5052" cy="41.4833" rx="1.45078" ry="0.735162" transform="rotate(-35.3048 41.5052 41.4833)" fill="black"></ellipse>
        <path d="M45.6995 58.1794C45.6995 47.7633 54.1434 39.3193 64.5596 39.3193C74.9757 39.3193 83.4197 47.7633 83.4197 58.1794V94.4489H45.6995V58.1794Z" fill="#49ACAC"></path>
        <defs>
          <linearGradient id="paint0_linear_5250_69230" x1="92.6686" y1="32.791" x2="92.6686" y2="94.4491" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8EEEE"></stop>
            <stop offset="1" stopColor="#69BDBD"></stop>
          </linearGradient>
        </defs>
      </svg>
      </div>

      <h2 className='no-content-heading'>There's nothing here</h2>
      <p className='no-content-desc'>Select an activity category first and fill the form, then use this preview mode to edit the generated text.</p>
    </div>
  )
}

const Grow = (props) => {
  return (
    <div className='grow-component'>
      {props.content}`
      .`
    </div>
  )
}

class PreviewedInput extends Component {
  initialState = {
    output: '',
    edit: false
  }
  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      output: value
    })
    this.props.handleChange(name, value)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    }, () => { this.props.editingMode(this.state.edit) })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.output !== prevProps.output) {
      this.setState({
        output: this.props.output
      })
    }
  }

  componentDidMount() {
    this.setState({
      output: this.props.output
    })
  }

  render() {
    const { children, inpName, placeholder } = this.props
    const { output, edit } = this.state
    return (
      <div className='previewed-input'>
        {edit ? (
          <div id={`${inpName}FInput`} className='growable-txtarea'>
            <textarea autoFocus={true} className='txtarea' name={inpName} placeholder={placeholder} value={output} onBlur={this.toggleEdit} onChange={this.handleChange} />
            <Grow content={output} />
          </div>
        ) : (
          <div onClick={(e) => { this.toggleEdit(e) }} id={`${inpName}FPreview`} className='formatted-preview'>
            {children}
          </div>
        )}
      </div>
    )
  }
}

export class Preview extends Component {
  initialState = {
    heading: '',
    output: '',
    category: 0,
    images: [],
    imgCaption: '',
    edit: false
  }

  state = this.initialState

  ov(val) {
    const { fields, categoryId } = this.props
    const placeholder = {
      insName: { 1: 'Institute name', 3: 'Institute name', 14: 'Institute name' },        // 1, 3
      partnerInsName: { 1: 'Partner institute name' },   // 1
      partnerInsAddr: { 1: 'Partner institute address' },   // 1
      theme: { 1: 'Theme', 14: 'Theme of the competition', 15: 'Title (theme)', 16: 'Theme', 17: 'Theme' },// 1, 15, 16, 17
      purposeAgreement: { 1: 'Purpose of agreement' },  // 1, 
      insMembers: { 1: 'Members present from NITAP with their designation' },   // 1
      outMembers: { 1: 'Members present from partner Institute/Organization with their designation' },   // 1
      otherMembers: { 1: 'Other Renowned Members’ names with their designation' },   // 1
      date: { 1: 'Date', 2: 'Date', 3: 'Date', 4: 'Date', 5: 'Date', 6: 'Date', 7: 'Date', 8: 'Date', 9: 'Month (optional)', 10: 'Date', 11: 'Date', 12: 'Date', 13: 'Date', 14: 'Date', 15: 'Date', 16: 'Date', 17: 'Date' }, // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
      speakerName: { 2: 'Speaker name', 3: 'Speaker name' }, // 2, 3 
      designation: { 2: 'Designation', 3: 'Designation', 5: 'Designation', 11: 'Designation', 12: 'Designation', 13: 'Designation', 16: 'Designation', 17: 'Designation' },//2, 3, 5 , 11, 12, 13, 15
      department: { 2: 'Department', 3: 'Department', 5: 'Department', 11: 'Department', 12: 'Department', 13: 'Department' },//2, 5, 11, 12 , 13, 15
      lectureType: { 2: 'Keynote/special lecture/inagural address etc.', 3: 'Keynote/special lecture/inagural address etc.' },  // 2, 3 
      eventName: { 2: 'Event name', 9: 'Conference Name', 13: 'Name of workshop', 14: 'Name of the competition', 15: 'Event name', 16: 'Name of the event', 17: 'Event name' },// 2, 9, 15, 16, 17 
      confType: { 7: 'national', 9: 'national' },   // 9
      eventType: { 11: 'Programme type: workshop/confrence/seminaar/FDP/EDP' },   // 9, 10
      organizer: { 2: 'Organizer with address', 3: 'Organizing member/department/section (NITAP)', 11: 'Organising institute name and address', 13: 'Organising institute name with address', 14: 'Organising section/institute name', 16: 'Organizer name', 17: 'Organizer name' },// 2, 3, 14, 16, 17 
      pi: { 4: 'Principal Investigators' }, // 4
      copi: { 4: 'Co-principal Investigators' }, // 4 
      title: { 2: 'Title of speech', 3: 'Title of speech', 4: 'Projec title', 5: 'Nature/ title of the work/job', 7: 'Article title', 8: 'Book title, subtitle', 9: 'Contribution title', 10: 'Title', 11: 'Title of the programme' }, // 2, 3, 4, 8, 7, 9, 10
      editors: { 10: "Editors' Name" }, // 10
      bookTitle: { 10: 'Title of book' }, // 10
      fundAgency: { 4: 'Funding Agency', 5: 'Sponsored agency' },// 4, 5 
      facultyName: { 5: 'Name of faculty', 11: 'Name of the faculty', 12: 'Name of the faculty', 13: 'Name of the faculty' },// 11, 12, 13
      invName: { 6: 'Name of inventor' }, // 6
      year: { 6: 'Year the patent was issued', 7: 'Publication year', 8: 'Publication year', 10: 'Publication year' }, // 6, 7, 8
      patId: { 6: 'Unique patent identifier (patent number)' },  // 6
      patOffice: { 6: 'Patent office' }, // 6
      author: { 7: 'Author(s)', 8: 'Author(s)', 9: 'Author(s)', 10: 'Author(s)' },    // 7, 8, 9, 10
      journalTitle: { 7: 'Journal Title', 12: 'Journal name' },   // 7
      volNo: { 7: 'Volume no.', },    // 7
      issueNo: { 7: 'Issue No.' },    // 7
      pageNos: { 7: 'Page no.', 10: 'Page numbers' },    // 7, 10 
      doiUrl: { 7: '', 8: '', 9: '', 10: '' },     // 7, 8, 9
      publisher: { 8: 'Publisher name', 10: 'Publisher', 12: 'Publishing house' },  // 8, 10
      place: { 9: 'Location of conference', 15: 'Place name' },  // 9, 15
      winner: { 14: 'Name with roll no', }, // 14
      rank: { 14: 'first/second/third' },   // 14
      collaboration: { 14: 'Institute Name if any collaboration/association', 15: 'If collaboration mention its full address', 16: 'collaboration', 17: 'Collaborator address (optional)' },  // 14, 15, 16, 17
      coordinatorName: { 15: 'Coordinator Name' },  // 15
      eventLink: { 17: 'Event link' },  // 17
      eventBrochure: { 17: 'Upload brochure' },  // 17,
      imgCaption: { 5: 'Image caption' }    // 5
    }

    const peopleLs = ['copi', 'pi', 'author']
    if (!(peopleLs.includes(val))) {    // when not adding lists
      if (!fields[val]) {
        return placeholder[val][parseInt(categoryId)].toUpperCase()
      } else {
        return fields[val]
      }
    } else if (fields[val]) {            // for persons that are not undefined
      console.log(fields[val]);
      if (fields[val].length !== 0) {
        let outstrArr = []
        if (val === "pi") {
          outstrArr = fields[val].map(el => {
            return `${el.name}, ${el.designation}, ${el.department}`
          })
        } else if (val === "copi") {
          outstrArr = fields[val].map(el => {
            return `${el.name}, ${el.designation}, ${el.department}${el.insName ? `, ${el.insName}` : ''}`
          })
        } else if (val === "author") {
          outstrArr = fields[val].map(el => {
            return `${el.lastName}, ${el.firstInitials}`
          })
        }
        let outstr = outstrArr[0];
        let n = outstrArr.length
        outstrArr.forEach((element, i) => {
          if (i !== 0) {
            if (i === n - 1) {
              outstr += ` & ${element}`;
            } else {
              outstr += `, ${element}`;
            }
          }
        });
        return outstr
      }
      return placeholder[val][parseInt(categoryId)].toUpperCase()   // for empty lists
    }
    return placeholder[val][parseInt(categoryId)].toUpperCase()   // for undefined

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
      'Workshop / FDP / Conference / seminar / short term course etc.',
      'Outreach Activity',
      'Announcement',
    ]

    let outMdStr = '';
    switch (category) {
      case 1:
        outMdStr = `**${this.ov('insName')}** and _${this.ov('partnerInsName')}_, ${this.ov('partnerInsAddr')} signed a Memorandum of Understanding under ${this.ov('theme')}. ${this.ov('purposeAgreement')}. During the event, ${this.ov('insMembers')}, with ${this.ov('outMembers')} were present. ${this.ov('otherMembers')} had witnessed the event ${this.ov('date')}`
        break;
      case 2:
        outMdStr = `${this.ov('speakerName')}, ${this.ov('designation')}, **${this.ov('department')}**, NITAP delivered a ${this.ov('lectureType')} on "${this.ov('title')}" in the ${this.ov('eventName')} organised by ${this.ov('organizer')} on ${this.ov('date')}.`
        break;
      case 3:
        outMdStr = `${this.ov('speakerName')}, ${this.ov('designation')}, ${this.ov('department')}, ${this.ov('insName')} visited and delivered a ${this.ov('lectureType')} on "${this.ov('title')}" organised by ${this.ov('organizer')} on ${this.ov('date')}`
        break;
      case 4:
        outMdStr = `${this.ov('pi')} ${fields.pi ? (fields.pi.length === 1 ? 'as a Principal Investigator' : 'as Principal Investigators') : ''} with ${this.ov('copi')} ${fields.copi ? (fields.copi.length === 1 ? 'as a Co-Principal Investigator' : 'as Co-Principal Investigators') : ''} recieved an external project titled "${this.ov('title')}". Funding agency: ${this.ov('fundAgency')}, ${this.ov('date')}`
        break;
      case 5:
        outMdStr = `Name of the job: ${this.ov('title')}\nName of the Client: ${this.ov('fundAgency')}\nPrincipal Investigator: ${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')}`
        break;
      case 6:
        outMdStr = `${this.ov('invName')} (${this.ov('year')}), ${this.ov('patId')} ${this.ov('patOffice')}`
        break;
      case 7:
        outMdStr = `${this.ov('author')} ${this.ov('year')} Article title: ${this.ov('title')} Journal title :` + <em>{this.ov('journalTitle')}</em> + `Volume ${this.ov('volNo')} ${this.ov('doiUrl')}`
        break;
      case 8:
        outMdStr = `${this.ov('author')}, ${this.ov('year')} ${this.ov('title')} published by ${this.ov('publisher')} ${this.ov('doiUrl')}`
        break;
      case 9:
        outMdStr = `${this.ov('author')}, ${this.ov('date')} ${this.ov('title')} {paper representation} ,${this.ov('confType')} ${this.ov('place')} ${this.ov('doiUrl')}`
        break;
      case 10:
        outMdStr = `${this.ov('author')} (${this.ov('year')}).Title of chapter: ${this.ov('title')}.Edited by ${this.ov('editors')} of book "${this.ov('bookTitle')}"  (pp ${this.ov('pageNos')}). Published by ${this.ov('publisher')}, ${this.ov('doiUrl')}`
        break;
      case 11:
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} attended ${this.ov('eventType')} on "${this.ov('title')}", organised by ${this.ov('organizer')} on  ${this.ov('date')}`
        break;
      case 12:
        outMdStr = `${this.ov('facultyName')} ${this.ov('designation')} of ${this.ov('department')}  was Reviewer of "${this.ov('journalTitle')}". ${this.ov('publisher')}  on ${this.ov('date')}`
        break;
      case 13:
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} was The Chair of Panel Session at ${this.ov('eventName')}, organised by ${this.ov('organizer')} on ${this.ov('date')}`
        break;
      case 14:
        outMdStr = `${this.ov('winner')}, ${this.ov('insName')} won the ${this.ov('rank')} in the competition on the theme of "${this.ov('theme')}" organized by ${this.ov('organizer')}  ${fields.collaboration ? `in association with ${this.ov('collaboration')},` : ''} on ${this.ov('date')}`
        break;
      case 15:
        outMdStr = `${this.ov('eventName')} on "${this.ov('theme')}" was organized by ${this.ov('coordinatorName')}, ${fields.collaboration ? `in collaboration with ${this.ov('collaboration')},` : ''} at ${this.ov('place')} on ${this.ov('date')}.`
        break;
      case 16:
        outMdStr = `${this.ov('eventName')} was organised  by ${this.ov('organizer')}, ${this.ov('designation')}  ${fields.collaboration ? `in collaboration with ${this.ov('collaboration')},` : ''} on the mark/occassion of ${this.ov('theme')}, on ${this.ov('date')}.`
        break;
      case 17:
        outMdStr = `${this.ov('eventName')} on ${this.ov('theme')} will be organized by ${this.ov('organizer')}, ${this.ov('designation')}, NITAP, ${fields.collaboration ? `sponsored by ${this.ov('collaboration')},` : ''} , ${this.ov('date')}. More details, visit  NITAP official website : www.nitap.ac.in or link of event: ${this.ov('eventLink')}`
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
        images: images,
        output: outMdStr
      })
    }
  }

  resetPreview = () => {
    this.updatePreview()
  }

  editingMode = (edit) => {
    this.setState({
      edit: edit
    })
  }

  // handleChange = (event) => {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // new handleChange
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    if (document.getElementById('activityForm').checkValidity()) {
      event.preventDefault();

      const btn = event.target
      btn.setAttribute('disabled', '')
      btn.innerHTML = 'Please wait...'
      this.props.submit(this.state);
    }
  }

  toggleEdit = (event, type) => {
    const fPreview = document.getElementById('fPreview');
    const fInput = document.getElementById('fInput');
    const showChanges = document.getElementById('showChanges');
    let fPreviewWrapper = document.getElementsByClassName('formatted-preview-wrapper')
    fPreviewWrapper = fPreviewWrapper[0]

    fPreview.classList.toggle('hidden');
    fInput.classList.toggle('hidden');
    showChanges.classList.toggle('hidden');

    if (event.type === 'click') {
      if (type === 'showChanges') {
        fPreviewWrapper.classList.remove('active');
      } else {
        fPreviewWrapper.classList.add('active');
      }
    } else {
      fPreviewWrapper.classList.remove('active');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      if (this.props.title !== prevProps.title || this.props.categoryId !== prevProps.categoryId) {
        this.updatePreview('title');
      }
      else {
        this.updatePreview('rest');
      }

      this.setState({
        category: parseInt(this.props.categoryId),
        imgCaption: this.props.imgCaption
      })
    }
  }

  render() {
    const { heading, output, images } = this.state
    let imgComponentArr = []
    if (images && images.length !== 0) {
      imgComponentArr = images.map((img, i) => {
        return <img key={i} alt="technodaya-magazine" src={URL.createObjectURL(img)} />
      })
    }
    return (
      <>
        <div className='preview' style={{ display: this.props.display }} >

          {this.state.category === 0 ? (
            <NoPreview />
          ) : (
            <>
              <div className={`formatted-preview-wrapper ${this.state.edit ? 'active' : ''}`}>
                <button id='showChanges' className='hidden' onClick={(e) => { this.toggleEdit(e, 'showChanges') }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.701 2.57141L10.0197 17.9516L2.93363 12.1665L1.71429 13.6608L10.4153 20.7644L22.2857 3.67144L20.701 2.57141Z" fill="white" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>

                <PreviewedInput
                  inpName='heading'
                  placeholder='Title...'
                  handleChange={this.handleChange}
                  editingMode={this.editingMode}
                  output={heading}
                >
                  <h1>{heading}</h1>
                </PreviewedInput>

                <PreviewedInput
                  inpName='output'
                  placeholder='your output will show here'
                  handleChange={this.handleChange}
                  editingMode={this.editingMode}
                  output={output}
                >
                  <ReactMarkdown children={output} remarkPlugins={[remarkGfm]} />
                </PreviewedInput>
              </div>

              <div className='image-preview'>
                {imgComponentArr}
              </div>
              {imgComponentArr.length !== 0 && (this.state.category !== 1 || this.state.category !== 3) && (
                <p className='img-caption-preview'>{this.state.imgCaption}</p>
              )}
              {this.state.category !== 0 && (
                <div className='prevbtn'>
                  <button id='submitBtn' form='activityForm' type='submit' onClick={this.handleSubmit} className='btn submit'>Submit</button>
                  <button onClick={this.resetPreview} className='btn reset'>Reset</button>
                </div>
              )}
            </>
          )}

        </div>
      </>
    )
  }
}