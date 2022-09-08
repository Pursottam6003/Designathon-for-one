
import React, { useState } from 'react'
import { storage, fs } from '../config/config'
import addBlogs from '../images/AddBlogs.jpeg'

export const Add_blogs = () => {

    const [title, setTitle] = useState('');
    const [brief, setbriefDescription] = useState('');
    const [description, setDescription] = useState('');
    // const [price, setPrice]=useState('');
    const [image, setImage] = useState(null);
    const [category, blogCategory] = useState('')
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

    return (
        <div className='add-blogs'>
            <header className='hero'>
                <h1 className='container'>Add new activity</h1>
            </header>
            {/* <div className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }}>
                <img src={addBlogs} className='container img-fluid' style={{ maxWidth: '100%', height: 'auto' }} alt='add_images of cake'></img>
            </div> */}
            <div className='container form-ctnr'>
                {successMsg && <>
                    <div className='success-msg'>{successMsg}</div>
                </>}
                <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>

                    <div className='form-field'>
                        <input 
                            type="text" 
                            className='form-control form-title' 
                            required
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title} 
                            placeholder="New activity title here..."
                        />
                    </div>

                    <div className='form-field'>
                        <label>Select the activity category from below</label>
                        <select type="number" className='form-control' required

                            onChange={(e) => blogCategory(e.target.value)} value={category}>
                            
                            <option value={'Event'}>Event</option>
                            <option value={'News'}>News</option>
                            <option value={'Programme'}>Programme</option>
                            <option value={'Festival'}>Festival</option>
                            <option value={'Academics'}>Academics</option>
                            <option value={'Innugration'}>Innugration</option>
                            <option value={'Mou'}>MOU</option>
                        </select>
                    </div>
                    
                    <div className='form-field'>
                        <input type="text"
                            className='form-control'
                            required
                            onChange={(e) => setbriefDescription(e.target.value)} 
                            value={brief}
                            placeholder="Write a short description..."
                        />
                    </div>
                    

                    <div className='form-field'>
                        <textarea 
                            className='form-control'
                            required
                            onChange={(e) => setDescription(e.target.value)} 
                            value={description}
                            placeholder="Start writing the full description..."
                        />
                    </div>

                    <div className='form-field'>
                        <label>Upload activity image</label>
                        <input
                            type="file"
                            id="file"
                            className='form-control'
                            required
                            onChange={handleProductImg} />

                        {imageError && <>
                            <br></br>
                            <div className='error-msg'>{imageError}</div>
                        </>}
                        <br></br>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className='LoginAuthBtn'>
                                SUBMIT
                            </button>
                        </div>
                    </div>
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