
const templates = {
  '1': ({ insName, partnerInsName, partnerInsAddr, theme, purposeAgreement, insMembers, outMembers, otherMembers, date }) =>
    `${insName} and ${partnerInsName}, ${partnerInsAddr} signed a Memorandum of Understanding under ${theme}. ${purposeAgreement}. During the event, ${insMembers}, with ${outMembers} were present. ${otherMembers} had witnessed the event. ${date}`,
  '2': ({ speakerName, designation, department, lectureType, title, eventName, organizer, date }) => 
    `${speakerName}, ${designation}, ${department}, NITAP delivered a ${lectureType} on "${title}" in the ${eventName} organised by ${organizer}, ${date}.`,
  '3': ({ speakerName, designation, department, insName, lectureType, title, organizer, date }) => 
    `${speakerName}, ${designation}, ${department}, ${insName} visited and delivered a ${lectureType} on "${title}" organised by ${organizer}, ${date}`,
  '4': ({ pi, copi, title, fundAgency, date }) => 
    `${pi} ${copi ? (copi.length === 1 ? `and ${copi} as a Co-Principal Investigator` : `and ${copi} as Co-Principal Investigators`) : ''} received an external project titled "${title}". Funding Agency: ${fundAgency}, ${date}.`,
  '5': ({ title, fundAgency, facultyName, designation, department }) =>
    `Name of the job: ${title}
Name of the Client: ${fundAgency}  
Principal Investigator: ${facultyName}, ${designation}, ${department}`,
  '6': ({ invName, year, patId, patOffice }) =>
    `${invName}. (${year}). ${patId}. ${patOffice}.`,
  '7': ({ author, year, title, journalTitle, volNo, issueNo, pageNos, doiUrl }) =>
    `${author} (${year}). ${title}. *${journalTitle}*${volNo ? ` *${volNo}*` : ""}${issueNo ? `(${issueNo})` : ""}${pageNos ? `, ${pageNos}` : ""}. ${doiUrl ? doiUrl : ''}`,
  '8': ({ author, year, title, publisher, doiUrl }) =>
    `${author} (${year}). *${title}*. ${publisher}. ${doiUrl}`,
  '9': ({ author, title, eventName, place, date, toDate, doiUrl }) =>
    `${author} *${title}* [Paper presentation]. ${eventName}, ${place}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}. ${doiUrl}`,
  '10': ({ author, year, title, editors, bookTitle, pageNos, publisher, doiUrl}) =>
    `${author}. (${year}). ${title}. In ${editors} (Eds.), *${bookTitle}* (pp. ${pageNos}). ${publisher}. ${doiUrl}`,
  '11': ({ facultyName, designation, department, eventType, title, organizer, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} attended ${eventType} on "${title}", organised by ${organizer}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '12': ({ facultyName, designation, department, journalTitle, publisher, date }) =>
    `${facultyName}, ${designation}, ${department} served as a *Reviewer* of "${journalTitle}". ${publisher}. ${date}.`,
  '13': ({ facultyName, designation, department, eventName, organizer, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} was *The Chair of Panel Session* at ${eventName}, organised by ${organizer}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '14': ({ winner, insName, rank, eventName, theme, organizer, collaboration, date }) =>
    `${winner}, ${insName} won the ${rank} in the ${eventName} on the theme of "${theme}" organized by ${organizer}${collaboration ? ` in association with ${collaboration}` : ''}, ${date}`,
  '15': ({ eventName, theme, coordinatorName, collaboration, place, date, toDate }) =>
    `${eventName} on "${theme}" was organized by ${coordinatorName}, ${collaboration ? `in collaboration with ${collaboration},` : ''} at ${place}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '16': ({ eventName, organizer, designation, collaboration, theme, date, toDate }) =>
    `${eventName} was organised  by ${organizer}, ${designation} ${collaboration ? `in collaboration with ${collaboration},` : ''} on the ${theme}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '17': ({ eventName, theme, organizer, department, collaboration, date, toDate, eventLink }) =>
    `${eventName} on ${theme} will be organized by ${organizer}, ${department}, ${collaboration ? `sponsored by ${collaboration},` : ''}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}. For more details, visit  NITAP official website: www.nitap.ac.in. ${eventLink ? `Link of event: ${eventLink}` : ''}`,
  '18': ({ facultyName, designation, department, title, fundAgency, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} is ${title} of ${fundAgency}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '19': ({ desc }) =>
    desc
}

export default templates;