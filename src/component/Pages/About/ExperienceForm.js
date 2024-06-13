import React from 'react'

import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

function ExperienceForm({dateFrom,dateTo,department,company,location,margin}) {
  return (
    <div className='ms-3 pb-4' style={{'marginTop':`${margin}`,'height':'180px'}}>
        <div className='mb-3'>
            <SlCalender className='me-2'/>
            <span>{dateFrom} - {dateTo}</span>
        </div>
        <h4 className='w-75'><b>{department}</b></h4>
        <p  className='text-yellow'>{company}</p>
        <div className='location'>
            <FaLocationDot className='me-2'/>
            <span>{location}</span>
        </div>
    </div>
  )
}

export default ExperienceForm
