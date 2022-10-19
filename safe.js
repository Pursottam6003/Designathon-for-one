const fetchedMagazine = {
  "orders": {
      "columns": {
          "0": {
              "title": "Highlights",
              "taskIds": [],
              "id": "0"
          },
          "1": {
              "id": "1",
              "taskIds": [
                  "21FqanXCtJ7ZdqQlDGB1"
              ],
              "title": "Memorandum of Understanding (MoU)"
          },
          "4": {
              "id": "4",
              "title": "External Funded Projects",
              "taskIds": [
                  "L9xUPZVwNTdSI3V3VKYR"
              ]
          },
          "5": {
              "title": "Consultancy Projects",
              "id": "5",
              "taskIds": [
                  "lq4V01SMEFWPKdoMAJOr"
              ]
          },
          "6": {
              "taskIds": [
                  "fOoLNcSLNhy8NtmyW63D"
              ],
              "title": "Patent (APA 7th edition format)",
              "id": "6"
          },
          "8": {
              "taskIds": [
                  "DZcLa6j7NACyLlOlC2Bk"
              ],
              "title": "Books",
              "id": "8"
          }
      },
      "columnOrder": [
          "0",
          "1",
          "8",
          "4",
          "6",
          "5"
      ],
      "tasks": {
          "21FqanXCtJ7ZdqQlDGB1": {
              "id": "21FqanXCtJ7ZdqQlDGB1",
              "imgUrl": [],
              "created": "Wed, 12 Oct 2022 10:39:17 GMT",
              "author": "TODO",
              "imgCaption": "Memorandum of Understanding (MoU)",
              "eventDate": "2022-10-20",
              "title": "Memorandum of Understanding (MoU)",
              "brochureUrl": "",
              "content": "Harvard Law College and Stanford University, Stanford California signed a Memorandum of Understanding under Ivy League colleges. Because why not. During the event, Professor Zomboss, with Dr. Walter Bishop were present. Olivia Dunham, Agent, Fringe Division FBI had witnessed the event 2022-10-20"
          },
          "DZcLa6j7NACyLlOlC2Bk": {
              "title": "Shyam",
              "created": "Thu, 13 Oct 2022 15:31:08 GMT",
              "imgCaption": "Books",
              "id": "DZcLa6j7NACyLlOlC2Bk",
              "content": "Tripathi, C, 1990 In the name of love published by ~Chandrashekhar~ Tripathi DOI is available but not for you",
              "author": "TODO",
              "brochureUrl": "",
              "eventDate": "",
              "imgUrl": []
          },
          "lq4V01SMEFWPKdoMAJOr": {
              "created": "Wed, 12 Oct 2022 05:12:49 GMT",
              "imgUrl": [],
              "eventDate": "2022-10-06",
              "id": "lq4V01SMEFWPKdoMAJOr",
              "author": "TODO",
              "brochureUrl": "",
              "imgCaption": "Consultancy Projects",
              "title": "Consultancy Projects",
              "content": "Name of the job: designathon\nName of the Client: NITAP\nPrincipal Investigator: Dr vijay Sir, Assistent professor, M &H "
          },
          "L9xUPZVwNTdSI3V3VKYR": {
              "created": "Fri, 14 Oct 2022 11:46:08 GMT",
              "eventDate": "2022-10-15",
              "brochureUrl": "",
              "id": "L9xUPZVwNTdSI3V3VKYR",
              "content": "Harsh Pathak, Student, CSE  as a Principal Investigator with CO-PRINCIPAL INVESTIGATORS  recieved an external project titled \"Optimus Prime\". Funding agency: Sonu Pvt Ltd, 2022-10-15",
              "author": "TODO",
              "imgCaption": "External Funded Projects",
              "title": "External Funded Projects",
              "imgUrl": [
                  "https://firebasestorage.googleapis.com/v0/b/designothon-bc5ca.appspot.com/o/Images%2FExternal%20Funded%20Projects%2F20221014_115344.jpg?alt=media&token=2090928f-5546-40f0-b40d-e4fab2a25ab9"
              ]
          },
          "fOoLNcSLNhy8NtmyW63D": {
              "title": "Patent (APA 7th edition format)",
              "eventDate": "2022-10-14",
              "author": "TODO",
              "imgCaption": "Patent (APA 7th edition format)",
              "imgUrl": [],
              "id": "fOoLNcSLNhy8NtmyW63D",
              "content": "Albert Einstein (2022), 69 Earth",
              "brochureUrl": "",
              "created": "Wed, 12 Oct 2022 10:35:27 GMT"
          }
      }
  },
  "title": "asdf",
  "month": "2022-03",
  "iss": "sd",
  "vol": "asdf",
  "ID": "zaXjCYIAuOcuD4qsn7bL"
}


	submissions = [
		{
			approved: false,
			category: 1,
			title: 'Birthday party organized at canteen',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pursottam Sah',
			date: '11-10-2022'
		},
		{
			approved: false,
			category: 1,
			title: 'Up all night for netflix and chill',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Chandrashekhar Tripathi',
			date: '30-09-2022'
		},
		{
			approved: false,
			category: 1,
			title: 'Guitar session by our pro guitarist Daknya',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pursottam Sah',
			date: '11-10-2022'
		},
		{
			approved: true,
			category: 1,
			title: 'Restrict time in washrooms to 10 seconds during exam hours',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Subhasish Banerjee',
			date: '27-10-2022'
		},
		{
			approved: true,
			category: 1,
			title: 'Force to use only one message by director on Technodaya Newsletter',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, asperiores!',
			author: 'Pi Mahanta',
			date: '15-09-2022'
		},
	]

/**
 * 
 *  

import React,{useState} from 'react'
import {storage,fs} from '../config/config'
import {Navbar} from './Navbar'
import AddImages from '../images/assets/add_images.jpg'
import {Footer} from './Footer'

export const AddProducts = () => {

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [image, setImage]=useState(null);
    const [category,setProductCategory] = useState('')
    const [imageError, setImageError]=useState(null);
    
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    const types =['image/jpg','image/jpeg','image/png','image/PNG','image/webp','image/svg'];
    const handleProductImg=(e)=>{
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

    const handleAddProducts=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`product-images/${category}/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref(`product-images/${category}/`).child(image.name).getDownloadURL().then(url=>{
                fs.collection('Products').add({
                    title,
                    category,
                    description,
                    price: Number(price),
                    url
                }).then(()=>{
                    setSuccessMsg('Product added successfully');
                    setTitle('');
                    setDescription('');
                    setPrice('');
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
        <Navbar/>

        <div  className='img-fluid' style={{maxWidth:'100%', height:'auto'}}>
            <img src={AddImages} className='container img-fluid' style={{maxWidth:'100%', height:'auto'}}  alt='add_images of cake'></img>
        </div>
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Products</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>
                <label>Product Title</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>

                <label>Product category</label>
                <select type="number" className='form-control' required
            
                onChange={(e)=>setProductCategory(e.target.value)} value={category}>
                    <option  value={'Birthday'}>Birthday</option>
                    <option  value={'Wedding'}>Wedding</option>
                    <option  value={'Graduation'}>Graduation</option>
                    <option  value={'Anniversary'}>Anniversary</option>
                    <option  value={'Valentines'}>Valentines</option>
                    <option  value={'Christmas'}>Christmas</option>
                    <option  value={'Holi'}>Holi</option>
                    <option  value={'Diwali'}>Diwali</option>
                    <option  value={'Mothers Day'}>Mothers Day</option>
                    <option  value={'Innugration'}>Innugration</option>
                    <option  value={'Misc'}>Misc</option>

                </select>

                <br></br>
                <label>Product Description</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleProductImg}></input>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='LoginAuthBtn'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
                    
                </>}

        </div>

        <br></br>

        <Footer/>

        </>
    )
}
 */

/**Fretching problem
 * 
 * 
 * 
 * 
 * 
 * import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'
import { Items } from './Items';

const year = new Date().getFullYear();
let MonthName;
const month = new Date().getMonth();

const BiMonthlyNames = [
    '',
    'JanFeb',
    'MarApril',
    'MayJune',
    'JulyAug',
    'SeptOct',
    'NovDec',
  ]

if(month ===1 || month ===2) MonthName=BiMonthlyNames[1];
else if(month===3 || month ===4) MonthName=BiMonthlyNames[2];
else if(month===5 || month ===6) MonthName=BiMonthlyNames[3];
else if(month===7 || month ===8) MonthName=BiMonthlyNames[4];
else if(month===9 || month ===10) MonthName=BiMonthlyNames[5];
else if(month===11 || month ===12) MonthName=BiMonthlyNames[6];


export const ShowBlogs = () => {
    const [myproducts, setMyProducts]=useState([]);
    const getProducts = async ()=>{
        const myproducts = await fs.collection('Blogs').get();
        const productsArray = [];
        // getting its snapshort 
        for (var snap of myproducts.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            // console.log(myproducts)
            if(productsArray.length === myproducts.docs.length){
              //setting the products
                setMyProducts(productsArray);
                console.log(productsArray)
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
   // console.log('hello')

   /*
   const [blogs, setblogs]=useState([]);
    const getTechnodayaBlogs = async ()=>{
        const blogsarray = []
        for(let i=1;i<=17;i++)
        {
            const blogsFirebase = await fs.collection(`${year}/${MonthName}/${i}`).get();
            // getting its snapshort 
            for (var snap of blogsFirebase.docs){
                var data = snap.data();
                data.ID = snap.id;
                blogsarray.push({
                    ...data
                })
                // console.log(blogs)
                if(blogsarray.length === blogsFirebase.docs.length){
                  //setting the products
                    setblogs(blogsarray);
                   
                }
            }  
        }
        console.log(blogsarray)
    }

    useEffect(()=>{
        getTechnodayaBlogs();
    },[]) 
    */
  
    return (
      <>
      {myproducts.length > 0 && (
          <div className='my-products'>
  
              <h1 className='txt'> <span> <b>NEWS</b></span></h1>
                  <div className='all-news'>
                  <div className='highlight'>
  {/* bass abi ke liya dal hu isme img , title , short ,discription  firebase se fetch karke daldena  */}
       <div> <img className='zoom' src={require("../images/addactivity.jpg")} />  </div> <div className='writing'> 
          <h1>THE CAT THAT SAYS MEow </h1>
       <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nihil vitae atque? Esse asperiores consequatur sed quo, numquam corrupti commodi officiis hic sint illo recusandae. Voluptates quasi error commodi consequuntur.
  
       </p> </div> 
                  </div>
                  <div className='news-block'>
                    
                      
                      <Items myproducts={myproducts}/>
                  </div>
              </div>
          </div>
      )}
  
      {myproducts.length < 1 && (
          <div className='my-products please-wait'>Please wait...</div>
      )}
      </>
    )
  }
  
 */



/*
    WORKING UPLOAD IMAGES FOR SINGLE ONE

    const uploadTask=storage.ref(`Images/${this.selectOptions[category_Id]}/${Image.name.split(/(\\|\/)/g).pop()}/`).put(Image);
    uploadTask.on('state_changed',snapshot=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(progress);
    },
    (error) =>{
      console.log(error);
    }
    ,()=>{
        storage.ref(`Images/${this.selectOptions[category_Id]}/`).child(`${Image.name.split(/(\\|\/)/g).pop()}`).getDownloadURL().then(url=>{
              fs.collection(`Technodaya/Blogs/${category_Id}/`).doc().set({
              Heading:heading,
              wholeDescription : wholeDescription,
              EventDate: date,
              Url:url,
              
            }).then(()=>{
              console.log("Sucessfully uploaded image");
            })

        })
    })
  */}


    let category_Id = this.state.category;
    // e.preventDefault();
    // console.log(title, description, price);
    // console.log(image);
    // console.log('my name is raam');

   console.log(`${this.selectOptions[category_Id]}`);
    
    // console.log(`${this.selectOptions[category_Id]}`);
    
    let  heading = out.heading;
    let wholeDescription = out.output;
    // let outp = out.output;
    // let image=out.images[0];

  //   const handleProductImg=(e)=>{
  //     let selectedFile = e.target.files[0];
  //     if(selectedFile){
  //         if(selectedFile&&types.includes(selectedFile.type)){
  //             setImage(selectedFile);
  //             setImageError('');
  //         }
  //         else{
  //             setImage(null);
  //             setImageError('please select a valid image file type (png or jpg)')
  //         }
  //     }
  //     else{
  //         console.log('please select your file');
  //     }
  // }
    
    // const uploadTask=storage.ref(`Images/${this.selectOptions[category_Id]}/${image}`).put(image);
    //   uploadTask.on('state_changed',snapshot=>{
    //     const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
    //     console.log(progress);
    // },error=>console.log(error),()=>{
    //     storage.ref(`Images/${this.selectOptions[category_Id]}/${image}`).child(image.name).getDownloadURL().then(url=>{
    //         fs.collection(this.selectOptions[category_Id]/heading).add({
    //             heading,
    //             wholeDescription,
    //             url
    //         }).then(()=>{
    //             console.log("sucessfually done");
    //            this.initialState;
    //         }).catch(error=> console.log(error.message));
    //     })
    // })


  

    // fs.collection(`Test/Technodaya/${this.selectOptions[category_Id]}`).add({
    //   heading,
    //   wholeDescription
    // }).then(()=>{
    //   console.log("Sucessfully uploaded");
    // })
  
    // console.log(this.submit);
}

    
	

  
//   const handleAddProducts=(e)=>{
//     e.preventDefault();
//     // console.log(title, description, price);
//     // console.log(image);
//     const uploadTask=storage.ref(`product-images/${category}/${image.name}`).put(image);
//     uploadTask.on('state_changed',snapshot=>{
//         const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
//         console.log(progress);
//     },error=>setUploadError(error.message),()=>{
//         storage.ref(`product-images/${category}/`).child(image.name).getDownloadURL().then(url=>{
//             fs.collection('Products').add({
//                 title,
//                 category,
//                 description,
//                 price: Number(price),
//                 url
//             }).then(()=>{
//                 setSuccessMsg('Product added successfully');
//                 setTitle('');
//                 setDescription('');
//                 setPrice('');
//                 document.getElementById('file').value='';
//                 setImageError('');
//                 setUploadError('');
//                 setTimeout(()=>{
//                     setSuccessMsg('');
//                 },3000)
//             }).catch(error=>setUploadError(error.message));
//         })
//     })
// }

  categoryFormFields = [
  {   // 1. MoU
    insName: '',
    partnerInsName: '',
    partnerInsAddr: '',
    theme: '',
    pursposeAgreement: '',
    insMembers: [],
    outMembers: [],
    otherMembers: [],
    date: ''
  },
  {   // 2. invited expert lecutres by nitap
    speakerName: '',
    designation: '',
    department: '',
    lectureType: '',    // keynote lecture/inaugural addr/special lecture
    title: '',
    eventName: '',
    organizer: '',      /// organizer with address
    date: ''
  },
  {   // 3. visits and invited/expert lectures from other institutes
    speakerName: '',
    designation: '',
    department: '',
    insName: '',
    lectureType: '',    // keynote lecture/inaugural addr/special lecture
    title: '',
    organizer: '',
    date: ''
  },
  {   // 4. ext funded proj
    pi: [],
    copi: [],
    title: '',
    fundAgency: '',
    date: ''
  },
  {   // 5. consultancy proj
    facultyName: '',
    designation: '',
    department: '',
    job: '',
    fundAgency: '',
  },
  {   // 6. patent
    invName: '',
    year: '',
    patId: '',
    patOffice: ''
  },
  {   // 7. research papers
    journalType: '',   // international/national
    authors: [],
    year: [],
    title: '',
    journalTitle: '',
    volNo: '',
    issueNo: '',
    pageNos: '',
    doiUrl: ''        // optional
  },
  {   // 8. book
    authors: [],
    year: '',
    title: '',
    publisher: '',
    doiUrl: ''
  },
  {   // conference paper
    authors: [],
    confType: '',   // national/international
    date: '',       // complete date of conference rather than 
    title: '',
    eventName: '',
    place: '',
    doiUrl: ''
  },
  {   // book chapters
    authors: [],
    chapterTitle: '',
    editorName: '',
    bookTitle: '',
    pageNos: '',
    publisher: '',
    doi: ''
  },
  {   // faculty empowered prog
    facultyName: '',
    designation: '',
    department: '',
    program: '',    // workshop/conference/seminar/short term course/FDP/EDP/webinar/others
    programTitle: '',
    organizingName: '',
    organizingAddr: '',
    date: ''
  },
  {   // reviewers
    facultyName: '',
    designation: '',
    department: '',
    journalName: '',
    publishingName: '',
    date: ''
  },
  {   // session chairs
    facultyName: '',
    designation: '',
    department: '',
    name: '',
    workshop: ''
  },
  {   // winners of competitions
    winnerName: '',
    winnerRoll: '',
    eventName: '',
    theme: '',
    rank: '',     // first/second/third present
    organizer: '',
    collaboration: '',  //optional
    date: ''

  },
  {   // Workshop/FDP/Conference/ seminar/short term course/etc
    eventName: '',
    theme: '',
    coordinatorName: '',
    designation: '',
    collaboration: '',   // optional
    date: '',
    place: ''
  },
  {   // outreach activities
    eventName: '',
    theme: '',
    organizer: '',
    designation: '',
    collaboration: '', // optional
    date: ''
  },
  {   // announcements
    eventName: '',
    theme: '',
    organizer: '',
    designation: '',
    collaboration: '', // optinal (with full address)
    eventLink: '',
    date: '',
    eventBrochure: ''
  }
]

    
const templateStr = [
  ``,
  // `${fields.insName} and ${fields.partnerInsName}, ${fields.partnerInsAddr} signed a ${fields.theme}. ${fields.purposeAgreement} During the event ${fields.insMembers}, ${fields.outMembers} were present . ${fields.otherMembers} had witnessed the event ${fields.date}  {photo}`,
  // `${fields.speakerName} delivered a ${fields.lectureType} on "${fields.title}" in the ${fields.eventName} organised by {this.state.organizer} on {date} {photo}  `,
  // `${fields.speakerName} ,${fields.designation} of ${fields.department} visited and delivered a ${fields.lectureType} on "{this.state.title}" organised by ${fields.organizer} on ${fields.date} {photo}`,
  // `${fields.pi[0]} ,${fields.designation} of ${fields.department} with ${fields.copi[0]}  {designation} of {department} {insititute name} recieved a {project type/inside/outside} {title}. {funding agency} on {date} {photo}`,
  // `${fields.job}. Drawing for ${fields.title} along with principle investigator ${fields.facultyName} ,${fields.designation} of ${fields.department}`,
  // `${fields.invName} ${fields.year}, ${fields.patId}  ${fields.patOffice}`,
  // `${fields.authors[0]} ${fields.year} Article title: ${fields.title} Journal title : ${fields.journalTitle} , Volume ${fields.volNo} ${fields.doiUrl}`,
  // `${fields.authors[0]}, ${fields.year} ${fields.title} published by ${fields.publisher} ${fields.doiUrl}`,
  // `${fields.authors[0]} , {firstinitial} ${fields.date} ${fields.title} {paper representation} ,${fields.confType} ${fields.location} ${fields.doiUrl}`,
  // `${fields.authors[0]} {first initial} ${fields.year}. ${fields.chapterTitle} ${fields.bookTitle} with ${fields.pageNos} published by ${fields.publisher} {doi}`,
  // `${fields.facultyName} ${fields.designation} of ${fields.department} on ${fields.programTitle} organised by ${fields.organizingName} ${fields.organizingAddr} ${fields.date} {photo}`,
  // `${fields.facultyName} ${fields.designation} of ${fields.department}  was reviewer of ${fields.journalName}. ${fields.publishingName} ${fields.date} {photo}`,
  // `${fields.facultyName} ${fields.designation} of ${fields.department}  was the chairpeson of ${fields.name} organised on ${fields.organizing} {address} {date} {photo}`,
  // `${fields.winnerName} ${fields.winnerRoll} ${fields.insName} won the ${fields.rank} in the competition on the theme of "${fields.theme} of ${fields.organizer} in association with ${fields.collaboration} on ${fields.date} {photo}"`,
  // `${fields.eventName} on ${fields.theme}  by ${fields.coordinatorsName} ${fields.designation} in ${fields.collaboration} ${fields.address} {date} {photo}`,
  // `${fields.eventName}was organised  by ${fields.organizer}  on the {theme} on {date} `,
  // `${fields.eventName} {theme} will be ${fields.organizer} ${fields.designation} sponsord by ${fields.collaboration} from ${fields.date} ${fields.eventLink}`
]
