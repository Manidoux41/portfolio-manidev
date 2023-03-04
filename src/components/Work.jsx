import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: '2023',
    title: 'OpenClassrooms',
    duration: '6 months',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua.'
  },
  {
    year: 2018,
    title: 'Safran',
    duration: '4 years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua.'
  },
  {
    year: 2014,
    title: 'Hutchinson',
    duration: '4 years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua.'
  },
  {
    year: 2009,
    title: 'MP Publication Web',
    duration: '',
    details: 'Création de site web sous wordpress et joomla - webmaster en autoentreprise'
  },
  {
    year: 2006,
    title: 'Gan Assurances',
    duration: '3 years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua.'
  },
  {
    year: 2002,
    title: 'Journal le Pays',
    duration: '3 years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua.'
  },
]

function Work() {
  return (
    <div id='work' className='max-w-[1040px m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {
        data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))
      }
    </div>
  )
}

export default Work