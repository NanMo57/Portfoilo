import React from 'react'
import { Link } from 'react-router-dom'
import PersonalItem from './PersonalItem'

function PersonalInfo() {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/NancyAlOqdehResume.pdf';
    link.download = 'NancyAlOqdehResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='personalInfo'>
        <ul className='d-flex flex-column gap-3 justify-content-start p-0 mb-5'>
            <PersonalItem title='Email' value='aloqdehnancy@gmail.com' to='mailto:aloqdehnancy@gmail.com'/>
            <PersonalItem title='Phone' value='0795326548' to='https://wa.me/0795326548'  target='_blank' rel='noopener noreferrer'/>
            <PersonalItem title='Address' value='Jordan/Amman - Um Uthaina'/>
        </ul>
        <button 
          className='btn bg-light rounded-pill text-uppercase fw-bold' 
          onClick={downloadFile}
        >
          Download CV
        </button>
    </div>
  )
}

export default PersonalInfo
