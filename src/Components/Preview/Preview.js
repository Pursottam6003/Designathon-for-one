import React, { Component, useEffect, useState } from 'react';
import { ReactComponent as MarkdownIcon } from '../../images/icons/markdownIcon.svg';
import { CategoryTitles } from '../../helpers';
import NoPreview from '../NoPreview';
import MdInput from '../MdInput/MdInput';
import styles from './Preview.module.scss';
import cx from 'classnames';
import PreviewedInput from '../MdInput/MdInput'


const PreviewFC = ({ display, title, fields, category, images=[], imgCaption, submit, switchForm }) => {
  const [desc, setDesc] = useState('');
  const [editing, setEditing] = useState(false);

  const ov = (val) => {
    // const { fields, categoryId } = this.props
    const placeholder = {
      insName: { 1: 'Institute name', 3: 'Institute name', 14: 'Institute name' },        // 1, 3
      partnerInsName: { 1: 'Partner institute name' },   // 1
      partnerInsAddr: { 1: 'Partner institute address' },   // 1
      theme: { 1: 'Theme', 14: 'Theme of the competition', 15: 'Title (theme)', 16: 'Theme', 17: 'Theme' },// 1, 15, 16, 17
      purposeAgreement: { 1: 'Purpose of agreement' },  // 1, 
      insMembers: { 1: 'Members present from NITAP with their designation' },   // 1
      outMembers: { 1: 'Members present from partner Institute/Organization with their designation' },   // 1
      otherMembers: { 1: 'Other Renowned Members’ names with their designation' },   // 1
      date: { 1: 'Date', 2: 'Date', 3: 'Date', 4: 'Date', 5: 'Date', 6: 'Date', 7: 'Date', 8: 'Date', 9: 'Month (optional)', 10: 'Date', 11: 'Date', 12: 'Date', 13: 'Date', 14: 'Date', 15: 'Date', 16: 'Date', 17: 'Date', 18: 'Date' }, // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
      toDate: { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '' },
      speakerName: { 2: 'Speaker name', 3: 'Speaker name' }, // 2, 3 
      designation: { 2: 'Designation', 3: 'Designation', 5: 'Designation', 11: 'Designation', 12: 'Designation', 13: 'Designation', 16: 'Designation', 17: 'Designation', 18: 'Designation' },//2, 3, 5 , 11, 12, 13, 15, 18
      department: { 2: 'Department', 3: 'Department', 5: 'Department', 11: 'Department', 12: 'Department', 13: 'Department', 17: 'Department', 18: 'Department' },//2, 5, 11, 12 , 13, 15, 18
      lectureType: { 2: 'Keynote/special lecture/inagural address etc.', 3: 'Keynote/special lecture/inagural address etc.' },  // 2, 3 
      eventName: { 2: 'Event name', 9: 'Conference Name', 13: 'Name of workshop', 14: 'Name of the competition', 15: 'Event name', 16: 'Name of the event', 17: 'Event name' },// 2, 9, 15, 16, 17 
      confType: { 7: 'national', 9: 'national' },   // 9
      eventType: { 11: 'Programme type: workshop/confrence/seminaar/FDP/EDP' },   // 9, 10
      organizer: { 2: 'Organizer with address', 3: 'Organizing member/department/section (NITAP)', 11: 'Organising institute name and address', 13: 'Organising institute name with address', 14: 'Organising section/institute name', 16: 'Organizer name', 17: 'Organizer name and designation' },// 2, 3, 14, 16, 17 
      pi: { 4: 'Principal Investigators' }, // 4
      copi: { 4: 'Co-principal Investigators' }, // 4 
      title: { 2: 'Title of speech', 3: 'Title of speech', 4: 'PROJECT TITLE', 5: 'Nature/ title of the work/job', 7: 'Article title', 8: 'Book title, subtitle', 9: 'Contribution title', 10: 'Title', 11: 'Title of the programme', 18: 'Award name' }, // 2, 3, 4, 8, 7, 9, 10
      editors: { 10: "Editors' Name" }, // 10
      bookTitle: { 10: 'Title of book' }, // 10
      fundAgency: { 4: 'Funding Agency', 5: 'Sponsored agency', 18: 'Award Issuing Organization' },// 4, 5, 18 
      facultyName: { 5: 'Name of faculty', 11: 'Name of the faculty', 12: 'Name of the faculty', 13: 'Name of the faculty', 18: 'Name of the faculty' },// 11, 12, 13, 18
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
      imgCaption: { 5: 'Image caption' },    // 
      desc: { 19: 'Activity description' },
    }

    if (val === 'date' || val === 'toDate') {
      if (fields[val]) {
        let dateObj = new Date(fields[val])
        return dateObj.toLocaleDateString('en-IN')
      } else {
        return 'DATE'
      }
    }

    const peopleLs = ['copi', 'pi', 'author']
    if (!(peopleLs.includes(val))) {    // when not adding lists
      if (!fields[val]) {
        return placeholder[val][parseInt(category)].toUpperCase()
      } else {
        return fields[val]
      }
    } else if (fields[val]) {            // for persons that are not undefined
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
            return `${el.lastName}, ${el.firstInitials.toUpperCase()}.`
          })
        }
        let outstr = outstrArr[0];
        let n = outstrArr.length
        outstrArr.forEach((element, i) => {
          if (i !== 0) {
            if (i === n - 1) {
              outstr += ` & ${element}`;
            } else if (val === "author") {
              outstr += ` ${element}`;
            } else {
              outstr += `, ${element}`;
            }
          }
        });
        return outstr
      }
      return placeholder[val][parseInt(category)].toUpperCase()   // for empty lists
    }
    return placeholder[val][parseInt(category)].toUpperCase()   // for undefined

  }

  const updatePreview = () => {
    let outMdStr = '', dateStr = '';
    switch (parseInt(category)) {
      case 1:
        outMdStr = `${ov('insName')} and ${ov('partnerInsName')}, ${ov('partnerInsAddr')} signed a Memorandum of Understanding under ${ov('theme')}. ${ov('purposeAgreement')}. During the event, ${ov('insMembers')}, with ${ov('outMembers')} were present. ${ov('otherMembers')} had witnessed the event. ${ov('date')}`
        break;
      case 2:
        outMdStr = `${ov('speakerName')}, ${ov('designation')}, ${ov('department')}, NITAP delivered a ${ov('lectureType')} on "${ov('title')}" in the ${ov('eventName')} organised by ${ov('organizer')}, ${ov('date')}.`
        break;
      case 3:
        outMdStr = `${ov('speakerName')}, ${ov('designation')}, ${ov('department')}, ${ov('insName')} visited and delivered a ${ov('lectureType')} on "${ov('title')}" organised by ${ov('organizer')}, ${ov('date')}`
        break;
      case 4:
        outMdStr = `${ov('pi')} ${fields.pi ? (fields.pi.length === 1 ? 'as a Principal Investigator' : 'as Principal Investigators') : ''} ${fields.copi ? (fields.copi.length === 1 ? `and ${ov('copi')} as a Co-Principal Investigator` : `and ${ov('copi')} as Co-Principal Investigators`) : ''} received an external project titled "${ov('title')}". Funding Agency: ${ov('fundAgency')}, ${ov('date')}.`
        break;
      case 5:
        outMdStr = `Name of the job: ${ov('title')}  
Name of the Client: ${ov('fundAgency')}  
Principal Investigator: ${ov('facultyName')}, ${ov('designation')}, ${ov('department')}`
        break;
      case 6:
        outMdStr = `${ov('invName')}. (${ov('year')}). ${ov('patId')}. ${ov('patOffice')}.`
        break;
      case 7:
        outMdStr = `${ov('author')} (${ov('year')}). ${ov('title')}. *${ov('journalTitle')}*${fields.volNo ? ` *${ov('volNo')}*` : ""}${fields.issueNo ? `(${ov('issueNo')})` : ""}${fields.pageNos ? `, ${ov('pageNos')}` : ""}. ${fields.doiUrl ? ov('doiUrl') : ""}`
        break;
      case 8:
        outMdStr = `${ov('author')} (${ov('year')}). *${ov('title')}*. ${ov('publisher')}. ${ov('doiUrl')}`
        break;
      case 9:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('author')} *${ov('title')}* [Paper presentation]. ${ov('eventName')}, ${ov('place')}, ${dateStr}. ${ov('doiUrl')}`
        break;
      case 10:
        outMdStr = `${ov('author')}. (${ov('year')}). ${ov('title')}. In ${ov('editors')} (Eds.), *${ov('bookTitle')}* (pp. ${ov('pageNos')}). ${ov('publisher')}. ${ov('doiUrl')}`
        break;
      case 11:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('facultyName')}, ${ov('designation')}, ${ov('department')} attended ${ov('eventType')} on "${ov('title')}", organised by ${ov('organizer')} ${dateStr}.`
        break;
      case 12:
        outMdStr = `${ov('facultyName')}, ${ov('designation')}, ${ov('department')} served as a *Reviewer* of "${ov('journalTitle')}". ${ov('publisher')}. ${ov('date')}.`
        break;
      case 13:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('facultyName')}, ${ov('designation')}, ${ov('department')} was *The Chair of Panel Session* at ${ov('eventName')}, organised by ${ov('organizer')}, ${dateStr}.`
        break;
      case 14:
        outMdStr = `${ov('winner')}, ${ov('insName')} won the ${ov('rank')} in the ${ov('eventName')} on the theme of "${ov('theme')}" organized by ${ov('organizer')}${fields.collaboration ? ` in association with ${ov('collaboration')}` : ''}, ${ov('date')}`
        break;
      case 15:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('eventName')} on "${ov('theme')}" was organized by ${ov('coordinatorName')}, ${fields.collaboration ? `in collaboration with ${ov('collaboration')},` : ''} at ${ov('place')}, ${dateStr}.`
        break;
      case 16:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('eventName')} was organised  by ${ov('organizer')}, ${ov('designation')} ${fields.collaboration ? `in collaboration with ${ov('collaboration')},` : ''} on the ${ov('theme')}, ${dateStr}.`
        break;
      case 17:
        dateStr = fields.toDate ? `from ${ov('date')} to ${ov('toDate')}` : ` ${ov('date')}`
        outMdStr = `${ov('eventName')} on ${ov('theme')} will be organized by ${ov('organizer')}, ${ov('department')}, ${fields.collaboration ? `sponsored by ${ov('collaboration')},` : ''} ${dateStr}. More details, visit  NITAP official website: www.nitap.ac.in ${fields.eventLink ? `or link of event: ${ov('eventLink')}` : ''}`
        break;
      case 18:
        dateStr = fields.date ? ` ${ov('date')}` : ''
        outMdStr = `${ov('facultyName')}, ${ov('designation')}, ${ov('department')} is ${ov('title')} of ${ov('fundAgency')}${dateStr}.`
        break;
      case 19:
        outMdStr = `${ov('desc')}`
        break;
      default:
        break;
    }

    setDesc(outMdStr)
  }

  const handleSubmit = (event) => {
    if (document.getElementById('activityForm').checkValidity()) {
      event.preventDefault();

      const btn = event.target
      btn.setAttribute('disabled', '')
      btn.innerHTML = 'Please wait...'
      submit(desc);
    } else {
      switchForm(true);
    }
  }

  useEffect(() => {
    if (parseInt(category) !== 0) {
      updatePreview();
    }
  }, [fields])

  return (
    <div className={styles.preview} style={{ display: display }} >
      {parseInt(category) === 0 ? <NoPreview /> : (<>
        <div className={cx(styles['formatted-preview-wrapper'], { [styles.active]: editing })}>
          <div className={styles.previews}>
            <h1>{title ? title : CategoryTitles[parseInt(category)]}</h1>
            <PreviewedInput
              placeholder='Your output will show here'
              value={desc}
              updateVal={txt => { setDesc(txt) }}
              editing={status => { setEditing(status) }}
            />
          </div>

          <footer className={styles['markdown-support']}>
            <p>
              Click to edit
              <a className={styles['text-link']} target='_blank' rel='noreferrer' href='https://guides.github.com/features/mastering-markdown/'>
                <MarkdownIcon className={styles['markdown-icon']} />
                <span>Styling with Markdown is supported</span>
              </a>
            </p>
          </footer>
        </div>

        <div className={styles['image-preview']}>
          {images.map((img, i) => <img key={i} alt="" src={URL.createObjectURL(img)} /> )}
        </div>
        {images.length !== 0 && (category !== 1 || category !== 3) && (
          <p className={styles['img-caption-preview']}>{imgCaption}</p>
        )}
        {parseInt(category) !== 0 && (
          <div className={styles.actions}>
            <button id='submitBtn' form='activityForm' type='submit' onClick={handleSubmit} className={cx(styles.btn, styles.submit)}>Submit</button>
            <button onClick={updatePreview} className={cx(styles.btn, styles.reset)}>Reset</button>
          </div>
        )}
      </>)}
    </div>
  )
}

export { PreviewFC }

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
      date: { 1: 'Date', 2: 'Date', 3: 'Date', 4: 'Date', 5: 'Date', 6: 'Date', 7: 'Date', 8: 'Date', 9: 'Month (optional)', 10: 'Date', 11: 'Date', 12: 'Date', 13: 'Date', 14: 'Date', 15: 'Date', 16: 'Date', 17: 'Date', 18: 'Date' }, // 1, 2, 3, 4, 5, 6, 14, 15, 16, 17 
      toDate: { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '' },
      speakerName: { 2: 'Speaker name', 3: 'Speaker name' }, // 2, 3 
      designation: { 2: 'Designation', 3: 'Designation', 5: 'Designation', 11: 'Designation', 12: 'Designation', 13: 'Designation', 16: 'Designation', 17: 'Designation', 18: 'Designation' },//2, 3, 5 , 11, 12, 13, 15, 18
      department: { 2: 'Department', 3: 'Department', 5: 'Department', 11: 'Department', 12: 'Department', 13: 'Department', 17: 'Department', 18: 'Department' },//2, 5, 11, 12 , 13, 15, 18
      lectureType: { 2: 'Keynote/special lecture/inagural address etc.', 3: 'Keynote/special lecture/inagural address etc.' },  // 2, 3 
      eventName: { 2: 'Event name', 9: 'Conference Name', 13: 'Name of workshop', 14: 'Name of the competition', 15: 'Event name', 16: 'Name of the event', 17: 'Event name' },// 2, 9, 15, 16, 17 
      confType: { 7: 'national', 9: 'national' },   // 9
      eventType: { 11: 'Programme type: workshop/confrence/seminaar/FDP/EDP' },   // 9, 10
      organizer: { 2: 'Organizer with address', 3: 'Organizing member/department/section (NITAP)', 11: 'Organising institute name and address', 13: 'Organising institute name with address', 14: 'Organising section/institute name', 16: 'Organizer name', 17: 'Organizer name and designation' },// 2, 3, 14, 16, 17 
      pi: { 4: 'Principal Investigators' }, // 4
      copi: { 4: 'Co-principal Investigators' }, // 4 
      title: { 2: 'Title of speech', 3: 'Title of speech', 4: 'PROJECT TITLE', 5: 'Nature/ title of the work/job', 7: 'Article title', 8: 'Book title, subtitle', 9: 'Contribution title', 10: 'Title', 11: 'Title of the programme', 18: 'Award name' }, // 2, 3, 4, 8, 7, 9, 10
      editors: { 10: "Editors' Name" }, // 10
      bookTitle: { 10: 'Title of book' }, // 10
      fundAgency: { 4: 'Funding Agency', 5: 'Sponsored agency', 18: 'Award Issuing Organization' },// 4, 5, 18 
      facultyName: { 5: 'Name of faculty', 11: 'Name of the faculty', 12: 'Name of the faculty', 13: 'Name of the faculty', 18: 'Name of the faculty' },// 11, 12, 13, 18
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
      imgCaption: { 5: 'Image caption' },    // 
      desc: { 19: 'Activity description' },
    }

    if (val === 'date' || val === 'toDate') {
      if (fields[val]) {
        let dateObj = new Date(fields[val])
        return dateObj.toLocaleDateString('en-IN')
      } else {
        return 'DATE'
      }
    }

    const peopleLs = ['copi', 'pi', 'author']
    if (!(peopleLs.includes(val))) {    // when not adding lists
      if (!fields[val]) {
        return placeholder[val][parseInt(categoryId)].toUpperCase()
      } else {
        return fields[val]
      }
    } else if (fields[val]) {            // for persons that are not undefined
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
            return `${el.lastName}, ${el.firstInitials.toUpperCase()}.`
          })
        }
        let outstr = outstrArr[0];
        let n = outstrArr.length
        outstrArr.forEach((element, i) => {
          if (i !== 0) {
            if (i === n - 1) {
              outstr += ` & ${element}`;
            } else if (val === "author") {
              outstr += ` ${element}`;
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

  updatePreview() {
    const { fields, title, categoryId, images } = this.props
    const category = parseInt(categoryId)

    let outMdStr = '', dateStr = '';
    switch (category) {
      case 1:
        outMdStr = `${this.ov('insName')} and ${this.ov('partnerInsName')}, ${this.ov('partnerInsAddr')} signed a Memorandum of Understanding under ${this.ov('theme')}. ${this.ov('purposeAgreement')}. During the event, ${this.ov('insMembers')}, with ${this.ov('outMembers')} were present. ${this.ov('otherMembers')} had witnessed the event. ${this.ov('date')}`
        break;
      case 2:
        outMdStr = `${this.ov('speakerName')}, ${this.ov('designation')}, ${this.ov('department')}, NITAP delivered a ${this.ov('lectureType')} on "${this.ov('title')}" in the ${this.ov('eventName')} organised by ${this.ov('organizer')}, ${this.ov('date')}.`
        break;
      case 3:
        outMdStr = `${this.ov('speakerName')}, ${this.ov('designation')}, ${this.ov('department')}, ${this.ov('insName')} visited and delivered a ${this.ov('lectureType')} on "${this.ov('title')}" organised by ${this.ov('organizer')}, ${this.ov('date')}`
        break;
      case 4:
        outMdStr = `${this.ov('pi')} ${fields.pi ? (fields.pi.length === 1 ? 'as a Principal Investigator' : 'as Principal Investigators') : ''} ${fields.copi ? (fields.copi.length === 1 ? `and ${this.ov('copi')} as a Co-Principal Investigator` : `and ${this.ov('copi')} as Co-Principal Investigators`) : ''} received an external project titled "${this.ov('title')}". Funding Agency: ${this.ov('fundAgency')}, ${this.ov('date')}.`
        break;
      case 5:
        outMdStr = `Name of the job: ${this.ov('title')}  
Name of the Client: ${this.ov('fundAgency')}  
Principal Investigator: ${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')}`
        break;
      case 6:
        outMdStr = `${this.ov('invName')}. (${this.ov('year')}). ${this.ov('patId')}. ${this.ov('patOffice')}.`
        break;
      case 7:
        outMdStr = `${this.ov('author')} (${this.ov('year')}). ${this.ov('title')}. *${this.ov('journalTitle')}*${fields.volNo ? ` *${this.ov('volNo')}*` : ""}${fields.issueNo ? `(${this.ov('issueNo')})` : ""}${fields.pageNos ? `, ${this.ov('pageNos')}` : ""}. ${fields.doiUrl ? this.ov('doiUrl') : ""}`
        break;
      case 8:
        outMdStr = `${this.ov('author')} (${this.ov('year')}). *${this.ov('title')}*. ${this.ov('publisher')}. ${this.ov('doiUrl')}`
        break;
      case 9:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('author')} *${this.ov('title')}* [Paper presentation]. ${this.ov('eventName')}, ${this.ov('place')}, ${dateStr}. ${this.ov('doiUrl')}`
        break;
      case 10:
        outMdStr = `${this.ov('author')}. (${this.ov('year')}). ${this.ov('title')}. In ${this.ov('editors')} (Eds.), *${this.ov('bookTitle')}* (pp. ${this.ov('pageNos')}). ${this.ov('publisher')}. ${this.ov('doiUrl')}`
        break;
      case 11:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} attended ${this.ov('eventType')} on "${this.ov('title')}", organised by ${this.ov('organizer')} ${dateStr}.`
        break;
      case 12:
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} served as a *Reviewer* of "${this.ov('journalTitle')}". ${this.ov('publisher')}. ${this.ov('date')}.`
        break;
      case 13:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} was *The Chair of Panel Session* at ${this.ov('eventName')}, organised by ${this.ov('organizer')}, ${dateStr}.`
        break;
      case 14:
        outMdStr = `${this.ov('winner')}, ${this.ov('insName')} won the ${this.ov('rank')} in the ${this.ov('eventName')} on the theme of "${this.ov('theme')}" organized by ${this.ov('organizer')}${fields.collaboration ? ` in association with ${this.ov('collaboration')}` : ''}, ${this.ov('date')}`
        break;
      case 15:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('eventName')} on "${this.ov('theme')}" was organized by ${this.ov('coordinatorName')}, ${fields.collaboration ? `in collaboration with ${this.ov('collaboration')},` : ''} at ${this.ov('place')}, ${dateStr}.`
        break;
      case 16:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('eventName')} was organised  by ${this.ov('organizer')}, ${this.ov('designation')} ${fields.collaboration ? `in collaboration with ${this.ov('collaboration')},` : ''} on the ${this.ov('theme')}, ${dateStr}.`
        break;
      case 17:
        dateStr = fields.toDate ? `from ${this.ov('date')} to ${this.ov('toDate')}` : ` ${this.ov('date')}`
        outMdStr = `${this.ov('eventName')} on ${this.ov('theme')} will be organized by ${this.ov('organizer')}, ${this.ov('department')}, ${fields.collaboration ? `sponsored by ${this.ov('collaboration')},` : ''} ${dateStr}. More details, visit  NITAP official website: www.nitap.ac.in ${fields.eventLink ? `or link of event: ${this.ov('eventLink')}` : ''}`
        break;
      case 18:
        dateStr = fields.date ? ` ${this.ov('date')}` : ''
        outMdStr = `${this.ov('facultyName')}, ${this.ov('designation')}, ${this.ov('department')} is ${this.ov('title')} of ${this.ov('fundAgency')}${dateStr}.`
        break;
      case 19:
        outMdStr = `${this.ov('desc')}`
        break;
      default:
        break;
    }

    this.setState({
      heading: title,
      images: images,
      output: outMdStr
    })
  }

  resetPreview = () => {
    this.updatePreview()
  }

  handleSubmit = (event) => {
    if (document.getElementById('activityForm').checkValidity()) {
      event.preventDefault();

      const btn = event.target
      btn.setAttribute('disabled', '')
      btn.innerHTML = 'Please wait...'
      this.props.submit(this.state);
    } else {
      this.props.switchForm(true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updatePreview();

      this.setState({
        category: parseInt(this.props.categoryId),
        imgCaption: this.props.imgCaption
      })
    }
  }

  render() {
    const { heading, output, images } = this.state
    const catId = parseInt(this.props.categoryId)
    let imgComponentArr = []
    if (images && images.length !== 0) {
      imgComponentArr = images.map((img, i) => {
        return <img key={i} alt="technodaya-magazine" src={URL.createObjectURL(img)} />
      })
    }
    return (
      <div className={styles.preview} style={{ display: this.props.display }} >

        {this.state.category === 0 ? <NoPreview /> : (
          <>
            <div className={cx(styles['formatted-preview-wrapper'], { [styles.active]: this.state.edit })}>
              <div className={styles.previews}>
                <h1>{heading ? heading : CategoryTitles[catId]}</h1>
                <MdInput
                  placeholder='Your output will show here'
                  value={output}
                  updateVal={txt => { this.setState({ output: txt }) }}
                  editing={status => { this.setState({ edit: status }) }}
                />
              </div>

              <footer className={styles['markdown-support']}>
                <p>
                  Click to edit
                  <a className={styles['text-link']} target='_blank' rel='noreferrer' href='https://guides.github.com/features/mastering-markdown/'>
                    <MarkdownIcon className={styles['markdown-icon']} />
                    <span>Styling with Markdown is supported</span>
                  </a>
                </p>
              </footer>
            </div>

            <div className={styles['image-preview']}>
              {imgComponentArr}
            </div>
            {imgComponentArr.length !== 0 && (this.state.category !== 1 || this.state.category !== 3) && (
              <p className={styles['img-caption-preview']}>{this.state.imgCaption}</p>
            )}
            {this.state.category !== 0 && (
              <div className={styles.actions}>
                <button id='submitBtn' form='activityForm' type='submit' onClick={this.handleSubmit} className={cx(styles.btn, styles.submit)}>Submit</button>
                <button onClick={this.resetPreview} className={cx(styles.btn, styles.reset)}>Reset</button>
              </div>
            )}
          </>
        )}

      </div>
    )
  }
}