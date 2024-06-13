import React from 'react'
import { Link } from 'react-router-dom'

function PersonalItem({title,value,to}) {
  return (
    <li className='d-flex gap-3 justify-content-start'>
        <span>{title}:</span>
        <Link to={to}><span>{value}</span></Link>
    </li>
  )
}

export default PersonalItem
