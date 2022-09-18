
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
