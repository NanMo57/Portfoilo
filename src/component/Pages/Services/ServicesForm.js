import React from 'react'

function ServicesForm({icon,title,description}) {
  return (
    <div className='text-center card'>
        <div className='m-3 ms-5 me-5 contentcard'>
            <div className='fs-1 iconservices'>{icon}</div>
            <h2 className='mt-2'><b>{title}</b></h2>
            <p className='mt-4'>{description}</p>
        </div>
    </div>
  )
}

export default ServicesForm
