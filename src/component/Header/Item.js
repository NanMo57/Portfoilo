import React from 'react'
import {NavLink} from 'react-router-dom';

function Item({icon,item,path,target}) {
  return (
    <li><NavLink to={path} target={target} className='d-flex gap-2 justify-content-center align-items-center fs-5'>
        <span className='icon'>{icon}</span>
        <span>{item}</span>
    </NavLink></li>
  )
}

export default Item

