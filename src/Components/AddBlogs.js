
import React, { useState } from 'react'
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

export const AddBlogs = () => {

  const [title, setTitle] = useState('');
  const [brief, setbriefDescription] = useState('');
  const [description, setDescription] = useState('');
  // const [price, setPrice]=useState('');
  const [image, setImage] = useState(null);
  const [category, blogCategory] = useState('1')
  const [imageError, setImageError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

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

  const handleAddProducts = (e) => {
    e.preventDefault();
    // console.log(title, description, price);
    // console.log(image);
    const uploadTask = storage.ref(`Categories/${category}/${image.name}`).put(image);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(progress);
    }, error => setUploadError(error.message), () => {
      storage.ref(`Categories/${category}/`).child(image.name).getDownloadURL().then(url => {
        fs.collection('Blogs').add({
          title,
          category,
          brief,
          description,
          url
        }).then(() => {
          setSuccessMsg('Product added successfully');
          setTitle('');
          setbriefDescription('');
          setDescription('');
          document.getElementById('file').value = '';
          setImageError('');
          setUploadError('');
          setTimeout(() => {
            setSuccessMsg('');
          }, 3000)
        }).catch(error => setUploadError(error.message));
      })
    })
  }

  // form options
  const selectOptions = [
    { value: 1, name: 'Memorandum of Understanding (MoU)' },
    { value: 2, name: 'Invited/Expert Lectures given by NIT AP members' },
    { value: 3, name: 'Visits and Invited/Expert Lectures to NITAP from other insitutes' },
    { value: 4, name: 'External Funded Projects' },
    { value: 5, name: 'Consultancy Projects' },
    { value: 6, name: 'Patent (APA 7th edition format' },
    { value: 7, name: 'Research Papers' },
    { value: 8, name: 'Books' },
    { value: 9, name: 'Conference Paper' },
    { value: 10, name: 'Book Chapters' },
    { value: 11, name: 'Faculty Empowerment Programmes' },
    { value: 12, name: 'Reviewers' },
    { value: 13, name: 'Session Chairs' },
    { value: 14, name: 'Winners of Competition' },
    { value: 15, name: 'Workshop/FDP/Conference/seminar/short term course etc.' },
    { value: 16, name: 'Outreach Activity' },
    { value: 17, name: 'Announcement' },
  ]

  return (
    <div className='add-blogs'>
      <header className='hero'>
        <h1 className='container'>Add new activities</h1>
      </header>
      <div className='container form-ctnr'>
        {successMsg && <>
          <div className='success-msg'>{successMsg}</div>
        </>}
        <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>

          <Field hasLabel={true} label="Select the activity category">
            <select
              type="number" 
              className='form-control'
              required
              onChange={(e)=>blogCategory(e.target.value)}
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
          
          {category === "1" && (
            <>            
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
            </>

          )}

          <br/>
          <Field hasLabel={true} label="Date of event">
            <input type="date" 
              required 
              style={{display: "block", minWidth: "15rem"}}
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