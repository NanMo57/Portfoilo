import React from 'react'

function SkillsBar({percentage,color,title}) {
  return (
    <div className='mb-1'>
        <label>{title}</label>
        <div className='w-100 bg-secondary '>
            <div style={{'--BG':color,'--Width':percentage}} className='skill text-end p-0 pe-3'>{percentage}</div>
        </div>
    </div>
  )
}

export default SkillsBar
