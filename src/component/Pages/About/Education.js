import React from 'react'
import MarkPoint from './MarkPoint'
import EducationForm from './EducationForm'


function Education() {
  return (
    <div className='education me-5'>
      <h3>Education</h3>
      <div className='d-flex justify-content-start bg-dark p-3 pt-4 pb-4 mt-4 rounded'>
        <div className='d-flex flex-column justify-content-start'>
            <MarkPoint />
        </div>
        <div>
           <EducationForm university='University Of Jordan' dateFrom='9/2017'  dateTo='8/2022' gap='3.2' department='Computer Information System'/>
        </div>
      </div>
    </div>
  )
}

export default Education
