
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
