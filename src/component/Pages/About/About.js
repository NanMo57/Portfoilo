import React, { useRef } from 'react'
import LineTitle from '../LineTitle'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import ControllSkills from './ControllSkills';
import Education from './Education';
import Experience from './Experience';

function About() {

  const SkillsDiv = useRef();

  return (
    <div id='About' className='mb-5 pt-5'>
        <div className='ps-5 mb-5'>
            <h2>About Me</h2>
            <LineTitle/>
        </div>
        <div className='ps-5 pb-4'>
            <p className='fs-5 w-100'>I am an web developer - react js / PHP. I graduated from the University of Jordan in 2022 from the Department of Computer Information Systems. I have experience in creating attractive and easy- to-use websites using the best programming languages, and the ability to transform creative ideas and designs into a dynamic, responsive website that runs smoothly on different devices.
                                      I follow technological developments in the field of website programming continuously to develop myself in a way that suits work requirements. I have the ability to absorb and adapt to continuous technical changes and apply them in innovative ways. I have the ability to cooperate and work teamwork.  </p>
        </div>
        <div className='d-flex justify-content-between align-items-start gap-5 mt-5 pe-5 ps-5 pb-4'>
            <PersonalInfo />
            <div className='d-flex justify-content-end align-items-center gap-5 w-100'>
              <Skills reference={SkillsDiv}/>
              <ControllSkills SkillsDiv={SkillsDiv} />
            </div>
        </div>
        <div className='d-flex justify-content-start align-items-start gap-5 mt-5 pe-5 ps-5 pt-3'>
          <Education />
          <Experience />
        </div>
    </div>
  )
}

export default About
