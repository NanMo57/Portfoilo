import React from 'react'

import MarkPoint from './MarkPoint'
import ExperienceForm from './ExperienceForm'

function Experience() {
  return (
    <div className='experience ms-4'>
      <h3>Experience</h3>
      <div className='d-flex justify-content-start bg-dark p-3 pt-4 pb-4 mt-4 rounded'>
        <div className='d-flex flex-column justify-content-start'>
            <MarkPoint />
            <MarkPoint margin='-16px'/>
            <MarkPoint margin='-16px'/>
        </div>
        <div>
            <ExperienceForm dateFrom='1/2024' dateTo='5/2024' department='Web Developer & Gamming Designer' company='Tamra Games' location='King Hussein Business Park' margin='-5px'/>
            <ExperienceForm dateFrom='10/2023' dateTo='12/2023' department='Receptionist & Call Center' company='Princice Clinic' location='Al Bayader' margin='3px' />
            <ExperienceForm dateFrom='8/2023' dateTo='10/2023' department='Receptionist & Call Center' company='Riva Spa' location='Abdali Mall' margin='3px' />
        </div>
      </div>
    </div>
  )
}

export default Experience
