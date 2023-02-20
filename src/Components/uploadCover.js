import React,{useState} from 'react'
import {storage,fs} from '../config/config'

export const UploadCover = () => {

    const [title, setTitle]=useState('');
    const [image, setImage]=useState(null);
    const [vol,setVolume] = useState('')
    const [iss,setIss] = useState('')
    const [month,setMonth] =useState('')
    const [year,setYear] = useState('')
    const [pdfLink,setPdfLink] = useState('')
    const [imageError, setImageError]=useState(null);
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');
    
    const types =['image/jpg','image/jpeg','image/png','image/PNG','image/webp','image/svg'];
    const handleCoverImage=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile && types.includes(selectedFile.type)){
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
        const uploadOnFirestore =()=>{
            storage.ref(`Technodaya/CoverImages/`).child(image.name).getDownloadURL().then(imgurl=>{
                console.log({
                    index: parseInt(`${year}${iss}`),
                    Title : title,
                    Vol :vol,
                    Issue: iss,
                    Month :month,
                    Year :year,
                    ImageUrl : imgurl,
                    PdfUrl : pdfLink,
                })

                fs.collection('PastPublications').doc().set({
                    index: parseInt(`${year}${iss}`),
                    Title : title,
                    Vol :vol,
                    Issue: iss,
                    Month :month,
                    Year :year,
                    ImageUrl : imgurl,
                    PdfUrl : pdfLink,
                }).then(()=>{
                    setSuccessMsg('Sucessfully uploaded');
                    setTitle('');
                    setIss('')
                    setMonth('')
                    setVolume('')
                    setPdfLink('')
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        
        }
        e.preventDefault();
        const uploadTask=storage.ref(`Technodaya/CoverImages/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message)
        ,()=>{
            uploadOnFirestore();   
        }
       )
    }


  
  return (
    <> 
        <div className='container'>
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
                <label>Magazine Title</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>

                <label>Volume</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setVolume(e.target.value)} value={vol}></input>
                <br></br>
                <label>Issue</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setIss(e.target.value)} value={iss}></input>
                <br></br>
                <label>Month Pair Name eg(Jan-Fab)</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setMonth(e.target.value)} value={month}></input>
                <br></br>
                <label>Year</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setYear(e.target.value)} value={year}></input>
                <br></br>
                <label>Upload Magazine Cover Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleCoverImage}></input>
                <br></br>
                <label>Upload  Magazine Link</label>
                <input type="text" onChange={(e)=>setPdfLink(e.target.value)} value ={pdfLink} className='form-control' required
                ></input>
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



