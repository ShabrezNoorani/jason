// All site content lives here. Replace every [BRACKETED] placeholder before publishing.

export const profile = {
  name: 'Jason Suri',
  title: 'Financial Analyst',
  tagline: '[TAGLINE]',
  bio: ['[BIO]'],
  location: 'Paris, France',
  languages: ['English', 'French'],
  cvUrl: '/cv.pdf',
  contact: {
    email: '[EMAIL]',
    phone: '[PHONE]',
    linkedin: '[LINKEDIN_URL]',
  },
}

export const experience = [
  {
    company: 'Sephora',
    role: 'Assistant',
    location: 'Paris',
    start: 'Jun 2025',
    end: 'Sep 2025',
    skills: ['Client relations', 'Microsoft Excel'],
  },
  {
    company: 'Venchi',
    role: 'Sales Associate',
    location: 'Paris',
    start: 'Sep 2024',
    end: 'Jan 2025',
    skills: ['Communication', 'Microsoft Excel'],
  },
  {
    company: 'P.C.S & Associates',
    role: 'Financial Analyst Intern',
    location: 'New Delhi',
    start: 'Jun 2024',
    end: 'Aug 2024',
    highlight: true,
    bullets: [
      'Created a data analytical report on financial statements in Excel for more than 10 clients and summarised results for the senior auditor.',
      "Checked clients' basic accounting records and prepared discrepancy reports under IFRS.",
      'Used advanced Excel functions to automate financial ratio calculations, cutting processing time by 20%.',
      'Analysed company expenditures and identified cost-saving opportunities that reduced overall expenses by 10%.',
    ],
  },
  {
    company: 'Act IÉSEG Paris',
    role: 'Treasurer and Board Member',
    start: 'Jan 2023',
    end: 'Dec 2023',
    highlight: true,
    bullets: [
      'Scrutinised financial accounts with analysis tools and Excel.',
      'Managed a budget for a group of 40 students and raised $1,000 for their events.',
      'Presented a weekly budget to the chief and other associations for approval.',
    ],
  },
  {
    company: 'Michael Kors',
    role: 'Associate (part-time contract)',
    location: 'Paris',
    start: 'Nov 2022',
    end: 'Dec 2022',
    skills: ['Organisation', 'Communication'],
  },
  {
    company: 'Act IÉSEG Paris',
    role: 'Event team (Pôle Évent)',
    start: 'Oct 2022',
    end: 'Dec 2022',
    skills: ['Event organisation'],
  },
]

export const education = [
  {
    school: 'University of Paris I: Panthéon-Sorbonne',
    degree: "Master's in Economics",
    start: 'Sep 2024',
    end: 'Nov 2025',
    details: [
      'Specialisation: Financial Economics',
      'Coursework: Macroeconomics, Microeconomics',
    ],
  },
  {
    school: 'IÉSEG School of Management',
    degree: 'Bachelor in International Business',
    start: 'Sep 2021',
    end: 'Jun 2024',
    details: ['Finance specialisation'],
  },
]

export const skills = [
  'Financial Analysis',
  'Financial Modeling',
  'Financial Statements',
  'Microsoft Excel',
  'IFRS',
  'Python',
  'Data Visualisation',
  'Budgeting',
  'Client Relations',
  'Teamwork',
]

export const certifications = [
  {
    issuer: 'DataCamp',
    name: 'Introduction to Data Visualization with Seaborn',
    date: 'Apr 2025',
  },
  {
    issuer: 'DataCamp',
    name: 'Object-Oriented Programming in Python',
    date: 'Apr 2025',
  },
]

export const achievements = [
  {
    value: '20%',
    label: 'faster processing',
    context: 'Automated financial ratio calculations in Excel at P.C.S & Associates',
  },
  {
    value: '10%',
    label: 'expense reduction',
    context: 'Cost-saving opportunities identified from company expenditure analysis',
  },
  {
    value: '10+',
    label: 'client reports',
    context: 'Financial statement analysis reports built in Excel for the senior auditor',
  },
  {
    value: '$1,000',
    label: 'raised',
    context: 'For student events as Treasurer of Act IÉSEG Paris',
  },
]
