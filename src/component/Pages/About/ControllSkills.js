import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

function ControllSkills({SkillsDiv}) {

  const ControlButton =useRef();

  const HandleToBeActive = (e,index)=>{
    for(let i=0 ; i<3 ; i++){
      let child = ControlButton.current.children[i].children[0];
      child.classList.contains('bgSpanControl') && child.classList.remove('bgSpanControl')
    }
    
    e.target.classList.add('bgSpanControl')

    for(let i=0 ; i<3 ; i++){
      let child = SkillsDiv.current.children[i];
      !child.classList.contains('hidden') && child.classList.add('hidden')
    }

    SkillsDiv.current.children[index].classList.remove('hidden')
  }

  return (
    <div className='controlButton d-flex flex-column justify-content-center align-items-center gap-3' ref={ControlButton}>
        <NavLink className='rounded-circle bg-light text-center' onClick={(e)=>HandleToBeActive(e,0)}><span className='rounded-circle  w-75 h-75 d-inline-block bgSpanControl'></span></NavLink>
        <NavLink className='rounded-circle bg-light text-center' onClick={(e)=>HandleToBeActive(e,1)}><span className='rounded-circle w-75 h-75 d-inline-block'></span></NavLink>
        <NavLink className='rounded-circle bg-light text-center' onClick={(e)=>HandleToBeActive(e,2)}><span className='rounded-circle  w-75 h-75 d-inline-block'></span></NavLink>
    </div>
  )
}

export default ControllSkills
