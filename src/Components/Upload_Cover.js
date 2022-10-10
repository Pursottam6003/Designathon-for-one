import React,{useState} from 'react'
import {storage,fs} from '../config/config'

export const Upload_Cover = () => {

    const [title, setTitle]=useState('');
    const [image, setImage]=useState(null);
    const [vol,setVolume] = useState('')
    const [iss,setIss] = useState('')
    const [month,setMonth] =useState('')
    const [year,setYear] = useState('')
    const [pdfLink,SetPdfLink] = useState('')
    const [pdfError, setPdfError]=useState(null);
    const [imageError, setImageError]=useState(null);
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');
    let MagazineUrl =''
    
    const types =['image/jpg','image/jpeg','image/png','image/PNG','image/webp','image/svg'];
    const pdftypes =['.pdf','pdf','/pdf'];
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

    const handlePdf=(e) =>{
        let selectedpdf =e.target.files[0];
        if(selectedpdf){
            SetPdfLink(selectedpdf);
            setPdfError('')
        }
        else 
        {
            console.log('please select the file')
        }
    }

    
    const handleAdd=(e)=>{

        const uploadOnFirestore =()=>{
        
            storage.ref(`Technodaya/CoverImages/`).child(image.name).getDownloadURL().then(imgurl=>{
                fs.collection('PastPublications').doc().set({
                    Title : title,
                    Vol :vol,
                    Issue: iss,
                    Month :month,
                    Year :year,
                    ImageUrl : imgurl,
                    PdfUrl : MagazineUrl,
                }).then(()=>{
                    setSuccessMsg('Sucessfully uploaded');
                    setTitle('');
                    setIss('')
                    setMonth('')
                    setVolume('')
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        
        }
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`Technodaya/CoverImages/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message)
        ,()=>{
            if (pdfLink) {
                const uploadTask = storage.ref(`Technodaya/Volums/${pdfLink.name.split(/(\\|\/)/g).pop()}/`).put(pdfLink);
                uploadTask.on('state_changed', (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  console.log(progress);
                },
                  (error) => {
                    console.log(error);
                  },
                  () => {
                    storage.ref(`Technodaya/Volums/`).child(`${pdfLink.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(pdfurl => {
                      MagazineUrl = pdfurl
                      uploadOnFirestore()
                    })
                  }
                )
            }
        },
        
       )
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
                <label>Upload previous magazine</label>
                <input type="file" id="file" className='form-control' required
                onChange={handlePdf}></input>
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                </>}

                {pdfError &&<>
                    <br></br>
                    <div className='error-msg'>{pdfError}</div>
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



