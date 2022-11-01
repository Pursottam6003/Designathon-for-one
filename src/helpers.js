const Categories = [
    '',
    'Memorandum of Understanding (MoU)',
    'Invited/Expert Lectures given by NIT AP members',
    'Visits and Invited/Expert Lectures to NITAP from other insitutes',
    'External Funded Projects',
    'Consultancy Projects',
    'Patent (APA 7th edition format)',
    'Research Papers',
    'Books',
    'Conference Paper',
    'Book Chapters',
    'Faculty Empowerment Programmes',
    'Reviewers',
    'Session Chairs',
    'Winners of Competition',
    'Workshop / FDP / Conference / seminar / short term course etc.',
    'Outreach Activity',
    'Announcement',
]

const CategoryTitles = [
    '',
    'Memorandum of Understanding (MoU)',
    'Invited/Expert Lectures given by NIT AP members',
    'Visits and Invited/Expert Lectures to NITAP from other insitutes',
    'External Funded Projects',
    'Consultancy Projects',
    'Patent',
    'Research Papers',
    'Books',
    'Conference Paper',
    'Book Chapters',
    'Faculty Empowerment Programmes',
    'Reviewers',
    'Session Chairs',
    'Winners of Competition',
    'Workshop / FDP / Conference / seminar / short term course etc.',
    'Outreach Activity',
    'Announcement',
]

const BiMonthlyNames = [
    ['', ''],
    ['JanFeb', 'January - February'],
    ['MarApril', 'March - April'],
    ['MayJune', 'May - June'],
    ['JulyAug', 'July - August'],
    ['SeptOct', 'September - October'],
    ['NovDec', 'November - December'],
]

const getBiMonth = (date) => {
    const biMonth = Math.floor((+date.slice(5, date.length) + 1) / 2)
    return biMonth
}


const toCapital = (s) => {
    const len = s.length
    return s.slice(0, 1).toUpperCase() + s.slice(1, len).toLowerCase()
}

export { Categories, CategoryTitles, toCapital, BiMonthlyNames, getBiMonth } 