import React from 'react'

import { BsBrowserEdge } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function ProfileForm({image,project,description,weblink,codelink,hide}) {
  return (
    <div className='text-center card'>
        <img src={image} alt='project'/>
        <div className='p-2'>
            <h2>{project}</h2>
            <p>{description}</p>
            <div className='d-flex justify-content-between align-items-center ps-5 pe-5'>
                <Link to={weblink} className='text-center view' target='_blank' style={{"display":`${hide}`}}>
                    <BsBrowserEdge />
                    <span className='d-block '>  Website</span>
                </Link>
                <Link to={codelink} className='text-center view' target='_blank'>
                    <FaGithub />
                        <span className='d-block'> Source Code</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileForm
