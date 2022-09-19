
import React, { useState, Component } from 'react'
import { storage, fs } from '../config/config'

const Field = (props) => {
  const { children, hasLabel, label } = props;
  return (
    <div className='form-field'>
      {hasLabel && (
        <label>{label}</label>
      )}
      {children}
    </div>
  )
}

class ListFields extends Component {
  initialState = {
    isCoPi: false,
    name: '',
    designation: '',
    department: '',
    institute: ''
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <Field>
          <div className='list-fields'>
            <input type="text"
              name="name"
              className='form-control'
              required
              placeholder="Name"
              onChange={this.handleChange}
            />

            <input type="text"
              name="designation"
              className="form-control" 
              required 
              placeholder="Designation"
              onChange={this.handleChange}
            />

            <input type="text"
              name="department"
              className="form-control" 
              required 
              placeholder="Department"
              onChange={this.handleChange}
            />

            <label>
              Is a CoPI
              <input type="checkbox" 
                name="isCoPi"
                onChange={this.handleChange} 
              />
            </label>
          </div>
          
          <button>
            +
          </button>
        </Field>
      </>

    )
  }
}

const ActivityCategoryForm = (props) => {
  const {category} = props

  // const [categoryName,setCategory] = useState('');
  const [insituteName,setInstituteName] = useState('');
  const [PatnerInstituteName,setPatnerInstituteName] = useState('');
  const [PatnerInstituteAddress,setPatnerInstituteAddress] = useState('');
  const [theme,setTheme] = useState('');
  const [agreement,setAgrement] = useState('');
  const [members,setMembers] = useState('')
  const [membersFromPatnerInst,setMembersFromPatnerInst] = useState('');
  const [otherMember,setOtherMember] = useState('');

  if (category === 1) {
    return (
      <>
        <p className='sub-label'>Institute Section</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            onChange ={(e) =>setInstituteName(e.target.value)} 
            value={insituteName}
            // value ={insituteName}
            placeholder="Institute name"
          />
        </Field> 
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            onChange ={(e) => setPatnerInstituteName(e.target.value)} 
            value={PatnerInstituteName}
            placeholder="Partner institute name"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={PatnerInstituteAddress}
            onChange ={(e) =>setPatnerInstituteAddress(e.target.value)} 
            placeholder="Partner institute address"
          />
        </Field>
  
        <p className='sub-label'>MoU details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={theme}
            onChange ={(e) =>setTheme(e.target.value)} 
            placeholder="Theme"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={agreement}
            onChange ={(e) =>setAgrement(e.target.value)} 
            placeholder="Purpose of Agreement"
          />
        </Field>
  
        <p className='sub-label'>Members present</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={members}
            onChange ={(e) =>setMembers(e.target.value)} 
            placeholder="Members present from NITAP with their designation"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={membersFromPatnerInst}
            onChange ={(e) =>setMembersFromPatnerInst(e.target.value)} 
            placeholder="Members present from partner Institute/Organization with their designation "
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            value={otherMember}
            onChange ={(e) =>setOtherMember(e.target.value)} 
            placeholder="Other Renowned Members’ names with their designation"
          />
        </Field>
      </>
    )
  } else if (category === 2) {
    return (
      <>
        <p className='sub-label'>Details of the speaker</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Speaker name"
          />
        </Field>

        <Field hasLabel={false}>
        <input type="text"
          className='form-control'
          required
          placeholder="Designation"
        />
        </Field>

        
        <Field hasLabel={false}>
        <input type="text"
          className='form-control'
          required
          placeholder="Department"
        />
        </Field>

        <p className='sub-label'>Event details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title of speech"
          />
        </Field>
        <p className='sub-label'>Institute Section</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Institute name"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Partner institute name"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Partner institute address"
          />
        </Field>
  
        <p className='sub-label'>MoU details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Theme"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Purpose of Agreement"
          />
        </Field>
  
        <p className='sub-label'>Members present</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Members present from NITAP with their designation"
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Members present from partner Institute/Organization with their designation "
          />
        </Field>
  
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Other Renowned Members’ names with their designation"
          />
        </Field>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Event name"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Keynote"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Inaugural address"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Organizer with address"
          />
        </Field>
      </>
    )
  } else if (category === 3) {
    return (
      <>
        <p className='sub-label'>Details of the speaker</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Speaker name"
          />
        </Field>



        <Field hasLabel={false}>
        <input type="text"
          className='form-control'
          required
          placeholder="Designation"
        />
        </Field>

        
        <Field hasLabel={false}>
        <input type="text"
          className='form-control'
          required
          placeholder="Department"
        />
        </Field>

        <Field hasLabel={false}>
        <input type="text"
          className='form-control'
          required
          placeholder="Institute name"
        />
        </Field>

        <p className='sub-label'>Event details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title of speech"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Keynote"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Inaugural address"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Organizing member/department/section (NITAP)"
          />
        </Field>
      </>
    )
  } else if (category === 4) {
    return (
      <>
        <p className='sub-label'>Principal and Co-principal Investigators' details</p>
        <ListFields />

        <Field hasLabel={false}>
          <input type="number"
            className='form-control'
            required
            placeholder="No. of CoPIs"

            min={0}
          />

          <span>No of PI</span>
        </Field>

        <p className='sub-label'>Project details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Project title"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Funding Agency"
          />
        </Field>
      </>
    )
  } else if (category === 5) {
    return (
      <>
        <p className='sub-label'>Faculty member details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name of faculty"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Designation"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Department"
          />
        </Field>

        <p className='sub-label'>Project details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Project Title"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Sponsored agency"
          />
        </Field>
      </>
    )
  } else if (category === 6) {
    return (
      <>
        <p className='sub-label'>Patent details</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name of inventor to whom the patent was issued"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="number"
            className='form-control'
            required
            min={1950}
            placeholder="Year the patent was issued"
          />
        </Field>

        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Unique patent identifier (patent number)"
          />
        </Field>

        <p className='sub-label'>Official source of the patent information</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Patent office name"
          />
        </Field>
      </>
    )
  }
  else if(category ===7) {

    return (
      <>
        <p className='sub-label'>Research Papers</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Two boxes for National or International Journals"
          />
        </Field>

        <p className='sub-label'>No of authors</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="No of authors"
          />
        </Field>

        <p className='sub-label'>Author FUll Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the author first and last name"
          />
        </Field>


        <p className='sub-label'>Year</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the publications year between parenthesis followed by a period"
          />
        </Field>

        <p className='sub-label'>Article Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Article title"
          />
        </Field>


        <p className='sub-label'>Subtitle</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Article Subtitle"
          />
        </Field>

        <p className='sub-label'>Journals Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Journals Title"
          />
        </Field>

        <p className='sub-label'>Volume</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Volume No."
          />
        </Field>

        <p className='sub-label'>Issue No.</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Issue No."
          />
        </Field>

        
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Page No"
          />
        </Field>

        <p className='sub-label'>Research Papers</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            placeholder="DOI or Url if available"
          />
        </Field>
      </>
    )
  }
  else if(category ===8)
  {
    return(
      <>
        <p className='sub-label'>Books</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="No of authors"
          />
        </Field>

        <p className='sub-label'>Author Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the authors full name"
          />
        </Field>

        <p className='sub-label'>Year</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the publication Year"
          />
        </Field>

        <p className='sub-label'>Book Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title of Book"
          />
        </Field>

        <p className='sub-label'>Subtitle</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="subtitle of book"
          />
        </Field>

        <p className='sub-label'>Publisher Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List name of Publisher "
          />
        </Field>

        <p className='sub-label'>DOI</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="DOI if avialable"
          />
        </Field>
      </>
    )
  }

  else if(category ===9)
  {
    return(
      <>
        <p className='sub-label'>No of authors</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="No. of authors"
          />
        </Field>

        <p className='sub-label'>National Or International </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention it was National or International Confrence"
          />
        </Field>

        <p className='sub-label'>Author Full Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention author full name"
          />
        </Field>

        <p className='sub-label'>Title of Contribution</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention the title of contribution"
          />
        </Field>

        <p className='sub-label'>Confrence Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the name of Confrence"
          />
        </Field>

        <p className='sub-label'>Location</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="List the location of the confrence"
          />
        </Field>

        <p className='sub-label'>DOI</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="DOI if avialable"
          />
        </Field>

      </>
    )
  }


  else if(category ===10)
  {
    <>

      <p className='sub-label'>No. of authors</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="No of authors"
          />
        </Field>


        <p className='sub-label'>Author List</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Full name of author"
          />
        </Field>

        <p className='sub-label'>Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title"
          />
        </Field>

        <p className='sub-label'>Editor's Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention Editors Name"
          />
        </Field>

        <p className='sub-label'>Book Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title of Book"
          />
        </Field>

        <p className='sub-label'>Page Numbers</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Page Numbers"
          />
        </Field>

        <p className='sub-label'>Publisher</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Publisher Name"
          />
        </Field>

        <p className='sub-label'>DOI</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="DOI if avialable"
          />
        </Field>
    </>
  }

  else if(category === 11)
  {
    return(<>
        <p className='sub-label'>Full Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name of the faculty"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Designation"
          />
        </Field>

        <p className='sub-label'>Department</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Department"
          />
        </Field>

        <p className='sub-label'>Type of Program</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Please mention workshop/confrence/seminaar/FDP/EDP"
          />
        </Field>

        <p className='sub-label'>Title of Program</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Title of Programme"
          />
        </Field>

        <p className='sub-label'>Organising Institute Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Organising Institute name"
          />
        </Field>

        <p className='sub-label'>Address</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Address"
          />
        </Field>
    </>)
  }

  else if(category ===12)
  {
    return (<>
     <p className='sub-label'>Full Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name of the faculty"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Designation"
          />
        </Field>

        <p className='sub-label'>Department</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Department"
          />
        </Field>

        <p className='sub-label'>Journal name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Journal Name"
          />
        </Field>

        <p className='sub-label'>Publishing House</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Publishing House"
          />
        </Field>

    </>)
  }
  
  
  else if(category === 13)
  {
    return(<>
        <p className='sub-label'>Full Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name of the faculty"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Designation"
          />
        </Field>

        <p className='sub-label'>Department</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Department"
          />
        </Field>

        <p className='sub-label'>Type of Program</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Please mention workshop/confrence/seminaar/FDP/EDP"
          />
        </Field>

 

        <p className='sub-label'>Organising Institute Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Organising Institute name"
          />
        </Field>

        <p className='sub-label'>Address</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Address"
          />
        </Field>
    </>)
  }


  else if(category ===14)
  {
    return(<>
        <p className='sub-label'>Name of the winner</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Name with Roll No"
          />
        </Field>


        <p className='sub-label'>Name of Competition </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention name of competition"
          />
        </Field>

        <p className='sub-label'>Theme of competition</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Theme of Competition"
          />
        </Field>

        <p className='sub-label'>First Prize/Second/third</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="First Prize/Second/third"
          />
        </Field>

        <p className='sub-label'>Organising Section</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Organising Section"
          />
        </Field>


        <p className='sub-label'>Institute Name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Institute Name"
          />
        </Field>

        <p className='sub-label'>collaboration</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention Collaboration / Association"
          />
        </Field>
        
    </>)
  }


  else if(category ===15)
  {
    return(<>

        <p className='sub-label'>Name of the Event</p>
        <Field hasLabel={false}>
        <input type="text"
        className='form-control'
        required
        placeholder="Name of the event"
        />
        </Field>

        <p className='sub-label'>Title</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention Title(theme)"
          />
        </Field>

        <p className='sub-label'>Coordinators</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Coordinators Name"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Desingation"
          />
        </Field>

        <p className='sub-label'>If collaboration </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="If collaboration mention its full address"
          />
        </Field>

        <p className='sub-label'>Place</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Place Name"
          />
        </Field>

        </>)
  }

  
  else if(category ===16)
  {
    return(<>

        <p className='sub-label'>Name of the Event</p>
        <Field hasLabel={false}>
        <input type="text"
        className='form-control'
        required
        placeholder="Name of the event"
        />
        </Field>

        <p className='sub-label'>Theme</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention Title(theme)"
          />
        </Field>

        <p className='sub-label'>Organiser name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Coordinators Name"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Desingation"
          />
        </Field>

        <p className='sub-label'>If collaboration </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="If collaboration mention its full address"
          />
        </Field>
        </>)
  }

  else if(category ===17) 
  {
    return(<>
    <p className='sub-label'>Name of the Event</p>
        <Field hasLabel={false}>
        <input type="text"
        className='form-control'
        required
        placeholder="Name of the event"
        />
        </Field>

        <p className='sub-label'>Theme</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention Title(theme)"
          />
        </Field>

        <p className='sub-label'>Organiser name</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Coordinators Name"
          />
        </Field>

        <p className='sub-label'>Designation</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Desingation"
          />
        </Field>

        <p className='sub-label'>If collaboration </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="If collaboration mention its full address"
          />
        </Field>

        <p className='sub-label'>Link for the event </p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Mention the link of the event"
          />
        </Field>

        <p className='sub-label'>Event Brochure</p>
        <Field hasLabel={false}>
          <input type="text"
            className='form-control'
            required
            placeholder="Upload Brochure"
          />
        </Field>

    </>)
  }
}

export const AddBlogs = () => {

  const [description, setDescription] = useState('');
  // const [price, setPrice]=useState('');

  const [category, blogCategory] = useState('1')
  const [imageError, setImageError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(' ');
  const [uploadError, setUploadError] = useState('');
  // states for mou
  // const [categoryName,setCategory] = useState('');
  // const [title, setTitle] = useState('');
  // const [insituteName,setInstituteName] = useState('');
  // const [PatnerInstituteName,setPatnerInstituteName] = useState('');
  // const [PatnerInstituteAddress,setPatnerInstituteAddress] = useState('');
  // const [theme,settheme] = useState('');
  // const [Agreement,setAgrement] = useState('');
  // const [members,setMembers] = useState('')
  // const [membersFromPatnerInst,SetmembersFromPatnerInst] = useState('');
  // const [othermember,Setothermember] = useState('');
  // const [date,SetDate] = useState('');
  // const [brief, setbriefDescription] = useState('');
  const [image, setImage] = useState(null);


  
  const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG', 'image/webp', 'image/svg'];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError('');
      }
      else {
        setImage(null);
        setImageError('please select a valid image file type (png or jpg)')
      }
    }
    else {
      console.log('please select your file');
    }
  }

  // const handleAddProducts = (e) => {
  //   e.preventDefault();

  //   const uploadTask = storage.ref(`Categories/${category}/${image.name}`).put(image);
  //   uploadTask.on('state_changed', snapshot => {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     console.log(progress);
  //   }, error => setUploadError(error.message), () => {
  //     storage.ref(`Categories/${category}/`).child(image.name).getDownloadURL().then(url => {
  //       fs.collection('Blogs').add({
  //         categoryName,
  //         title,
  //         insituteName,
  //         PatnerInstituteName,
  //         PatnerInstituteAddress,
  //         theme,
  //         Agreement,
  //         members,
  //         membersFromPatnerInst,
  //         othermember,
  //         date,
  //         brief,
  //         url
  //       }).then(() => {
  //         setSuccessMsg('Product added successfully');
  //         setCategory('');
  //         setTitle('');
  //         setInstituteName('');
  //         setPatnerInstituteName('')
  //         setPatnerInstituteAddress('');
  //         settheme('')
  //         setTitle('');
  //         setMembers('');
  //         setAgrement('');
  //         setMembers('');
  //         SetmembersFromPatnerInst('');
  //         Setothermember('');
  //         SetDate('');
  //         setbriefDescription('');
  //         setDescription('');
  //         document.getElementById('file').value = '';
  //         setImageError('');
  //         setUploadError('');
  //         setTimeout(() => {
  //           setSuccessMsg('');
  //         }, 3000)
  //       }).catch(error => setUploadError(error.message));
  //     })
  //   })
  // }

  // form options
  const selectOptions = [
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
    { value: 15, name: 'Workshop / FDP / Conference / seminar / short term course etc.' },
    { value: 16, name: 'Outreach Activity' },
    { value: 17, name: 'Announcement' },
  ]

  const [title, setTitle] = useState('');

  return (
    <div className='add-blogs'>
      <header className='hero'>
        <h1 className='container'>Add new activities</h1>
      </header>
      <div className='container form-ctnr'>
        {successMsg && <>
          <div className='success-msg'>{successMsg}</div>
        </>}
        <form autoComplete="off" className='form-group' onSubmit={() => {console.log("submitting :)")}}>

          <Field hasLabel={true} label="Select the activity category">
            <select
              type="number"
              className='form-control'
              required
              onChange={(e) => blogCategory(e.target.value)}
              value={category}
            >
              {selectOptions.map((opt, key) => {
                return <option key={key} value={opt.value}>{opt.name}</option>
              })}
            </select>
          </Field>

          <Field hasLabel={false}>
            <input
              type="text"
              className='form-control form-title'
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="New activity title here..."
            />
          </Field>

          <ActivityCategoryForm category={parseInt(category)} />
      

          <br />
          <Field hasLabel={true} label="Date of event">
            <input type="date"
              required
              style={{ display: "block", minWidth: "15rem" }}
            />
          </Field>

          <Field hasLabel={false}>
            <textarea
              className='form-control'
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Start writing the full description..."
            />
          </Field>

          <Field hasLabel={true} label="Upload activity image">
            <input
              type="file"
              id="file"
              multiple
              className='form-control'
              required
              onChange={handleProductImg}
            />

            {imageError && <>
              <br></br>
              <div className='error-msg'>{imageError}</div>
            </>}
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className='LoginAuthBtn'>
                Submit
              </button>
            </div>
          </Field>

        </form>
        {uploadError && <>
          <br></br>
          <div className='error-msg'>{uploadError}</div>
        </>}

      </div>

      <br></br>

    </div>
  )
}