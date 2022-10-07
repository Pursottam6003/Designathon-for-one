import React,{useState} from 'react'
import {storage,fs} from '../config/config'

export const Upload_Cover = () => {

    const [title, setTitle]=useState('');
    const [image, setImage]=useState(null);
    const [imageError, setImageError]=useState(null);
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    
    const types =['image/jpg','image/jpeg','image/png','image/PNG','image/webp','image/svg'];
    const handleCoverImage=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    
    const handleAdd=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`Technodaya/CoverImages/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref(`Technodaya/CoverImages/`).child(image.name).getDownloadURL().then(url=>{
                fs.collection('CoverImages').add({
                    title,
                    url
                }).then(()=>{
                    setSuccessMsg('Product added successfully');
                    setTitle('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        })
    }
  
  return (
    <> 
        
        <div className=''>
            <br></br>
            <br></br>
            <h1>Add Cover Images</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            
            <div style={{margin:"auto", display:"block"}}>
            <form autoComplete="off" className='form-group' onSubmit={handleAdd} style={{margin:"auto",display:"block"}}>
                <label>Image Title</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>

                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleCoverImage}></input>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                </>}
                <br></br>           
                <div>
                    <button type="submit">
                        SUBMIT
                    </button>
                </div>
            </form>

            </div>

            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
            </>}

        </div>
    </>
  )
}



