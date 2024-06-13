import React from 'react'
import { SlCalender } from "react-icons/sl";
function EducationForm({university,dateFrom,dateTo,gap,department}) {
  return (
    <div className='ms-3' style={{'marginTop':'-5px'}}>
        <div className='mb-3'>
            <SlCalender className='me-2'/>
            <span>{dateFrom} - {dateTo}</span>
        </div>
        <div className='d-flex justify-content-start align-items-center gap-4'>
            <div className='w-75'>
                <h4><b>{department}</b></h4>
                <p className='text-yellow'>{university}</p>
            </div>
            <div>
                <div className='border-0 border-start ps-3'><span>GPA :</span><p><span>{gap} </span>/ 4.0</p></div>
            </div>
        </div>
    </div>
  )
}

export default EducationForm
