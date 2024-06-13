import React from 'react'

import Item from './Item'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Social() {
  return (
    <ul className='social d-flex justify-content-center gap-3 align-items-center p-0'>
        <Item icon={<FaGithub />} path='https://github.com/NanMo57' target='_blank'/> 
        <Item icon={<FaLinkedin/>} path='https://www.linkedin.com/in/nancymo99' target='_blank'/>
    </ul>
  )
}

export default Social
