import React, { Component } from 'react'

export class Previews extends Component {
  
  render() {
   const selectOptions = [
       'Memorandum of Understanding (MoU)' ,
       'Invited/Expert Lectures given by NIT AP members' ,
       'Visits and Invited/Expert Lectures to NITAP from other insitutes' ,
       'External Funded Projects' ,
       'Patent (APA 7th edition format)',
       'Consultancy Projects',
        'Books' ,
        'Research Papers' ,
        'Conference Paper' ,
        'Book Chapters' ,
        'Faculty Empowerment Programmes',
        'Reviewers' ,
        'Session Chairs',
        'Winners of Competition' ,
        'Workshop/FDP/Conference/seminar/short term course etc.',
        'Outreach Activity',
        'Announcement',
    ]
    
    var fullstr1=`{CollegeName} and {patnerInstitutes}, singed a {theme}. {Purpose of Agreement} During the event {MembersPresent nitap }, {patner inst} were present . {Otherrenould Members} had witnessed the event {date}  {photo}`;
    var fullstr2=`{speakername} delivered a {keynote lecture} on "{title of speech}" in the {event name} organised by {organiser with address} on {date} {photo}  `
    var fullstr3 =`{name of speaker} visited and delivered a {keynote lecture} on "{title of speech}" organised by {organizing} on {date} {photo}`
    var fullstr4=`{Pls} ,{designation} of {department} with {CoPls}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}` 
    var fullstr5=`{title of job}. Drawing for {sponserd agency} along with principle investigator {name of faculty members}`;
    var fullstr6=`{name of inventor} {year}, {unique patent idenfier}  {name of official source of patent}`;
    var fullstr7=`{author name} {year} Article title: {article title} Journal title : {joournal title} , Volume {volume no and isse no} {doi and url}`;
    var fullstr8 =`{author last name}, {year} {booktitle} published by {publisher} {doi}`;
    var fullstr9 =`{author last name} , {first initial} {date} {title of contribution} {paper representation} ,{confrence name}{location} {doi url}`;
    var fullstr10 =`{authors last name} {first initial} {year}. {Title of chapter} {book title} with {page nos} published by {publisher} {doi or url}`;
    var fullstr11 =`{name of faculty} {designation} of {department} on {title of programme} organised by {oragnising institute name} {address} {date} {photo}`;
    var fullstr12=`{name of faculty} {designation} of {department} was reviewer of {journal name}. {Publishing house} {date}{photo}`;
    var fullstr13=`{name of faculty} {designation} of {department} was the chairpeson of {name of programm} organised on {oragnising institute name} {address} {date} {photo}`;
    var fullstr14=`{name of winner} {roll no} {college name} won the {prize} in the competition on the theme of "{theme of competition} of {organising section} in association with {collaboration institutes} on {date} {photo}"`;
    var fullstr15=`{name of event} on {title}  by {coordinators} {designation} in {collaboraiton insitue}{full address} {date} {photo}`;
    var fullstr16=`{name of event} was organised  by {organier name}  on the {theme} on {date} `;
    var fullstr17=`{name of event} on {theme} will be {organiser with designation} sponsord by {collaboration full address} from {date} {link of event}`;
    
    let categoryid=1;

    if(categoryid ===1)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[0]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr1}>  
          </textarea>
          </div>
          </>
      )
    }


    else if(categoryid ===2)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[1]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr2}>  
          </textarea>
          </div>
          </>
      )
    }



    else if(categoryid ===3)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[2]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr3}>  
          </textarea>
          </div>
          </>
      )
    }

    else if(categoryid ===4)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[3]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr4}>  
          </textarea>
          </div>
          </>
      )
    }

    else if(categoryid ===5)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[4]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr5}>  
          </textarea>
          </div>
          </>
      )
    }

    else if(categoryid ===6)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[5]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr6}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===7)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[6]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr7}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===8)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[7]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr8}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===9)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[8]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr9}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===10)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[9]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr10}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===11)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[10]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr11}>  
          </textarea>
          </div>
          </>
      )
    }
    else if(categoryid ===12)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[11]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr12}>  
          </textarea>
          </div>
          </>
      )
    }


    else if(categoryid ===13)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[12]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr13}>  
          </textarea>
          </div>
          </>
      )
    }



    else if(categoryid ===14)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[13]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr14}>  
          </textarea>
          </div>
          </>
      )
    }


    else if(categoryid ===15)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[14]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr15}>  
          </textarea>
          </div>
          </>
      )
    }

    else if(categoryid ===16)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[16]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr16}>  
          </textarea>
          </div>
          </>
      )
    }


    else if(categoryid ===17)
    {
      // mou
      return (
          <>
          <div className='preview'>
          <h3>{selectOptions[16]} </h3>
          <textarea className='txtarea' placeholder='your output will show here'  value={fullstr17}>  
          </textarea>
          </div>
          </>
      )
    }

    else 
    {
      return (
        <>
        <div className='preview'>
        <h3> MEOW </h3>
        <textarea className='txtarea' placeholder='your output will show here'  value={fullstr2}> </textarea>
      
        </div>
        </>
    )
    }
  }
}

