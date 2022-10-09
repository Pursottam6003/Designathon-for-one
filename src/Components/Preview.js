import React, { Component } from 'react'
import { ReactComponent as EmptyLetterBoxSvg } from '../images/emptyletterbox.svg'
import { ReactComponent as MarkdownIcon } from '../images/icons/markdownIcon.svg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const NoPreview = () => {
  return (
    <div className='no-content'>
      <div className='illustration'>
        <EmptyLetterBoxSvg />
      </div>

      <h2 className='no-content-heading'>There's nothing to show yet.</h2>
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
    edit: false
  }
  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
    this.props.handleChange(name, value)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    }, () => { this.props.editingMode(this.state.edit) })
  }

  render() {
    const { children, output, inpName, placeholder } = this.props
    const { edit } = this.state
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
      'Consultancy Projects',
      'Patent (APA 7th edition format)',
      'Research Papers',
      'Books',
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

                <footer className='markdown-support'>
                  <p>
                    Click to edit
                    <a className='text-link' target='_blank' href='https://guides.github.com/features/mastering-markdown/'>

                      <MarkdownIcon className='markdown-icon' />
                      <span>
                        Styling with Markdown is supported
                      </span>
                    </a>
                  </p>
                </footer>
              </div>

              <div className='image-preview'>
                {imgComponentArr}
              </div>
              {imgComponentArr.length !== 0 && (this.state.category !== 1 || this.state.category !== 3) && (
                <p className='img-caption-preview'>{this.state.imgCaption}</p>
              )}
              {this.state.category !== 0 && (
                <div className='prev-btns'>
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