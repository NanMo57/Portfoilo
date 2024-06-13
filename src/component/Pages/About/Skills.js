import React from 'react'
import SkillsBar from './SkillsBar'

function Skills({reference}) {
  return (
    <div className='skills' ref={reference}>
      <div>
        <SkillsBar percentage='95%' color='#e05222' title='HTML'/>
        <SkillsBar percentage='75%' color='#35a8df' title='CSS'/>
        <SkillsBar percentage='95%' color='#efc125' title='JS'/>
        <SkillsBar percentage='90%' color='#14669e' title='JQuery'/>
      </div>
      <div className='hidden'>
        <SkillsBar percentage='80%' color='#1d85c8' title='AJAX'/>
        <SkillsBar percentage='70%' color='#54397c' title='Bootstrap 5'/>
        <SkillsBar percentage='80%' color='#c75a93' title='SASS'/>
        <SkillsBar percentage='95%' color='#49d4fd' title='React Js'/>
      </div>
      <div className='hidden'>
        <SkillsBar percentage='85%' color='#8891bc' title='PHP'/>
        <SkillsBar percentage='75%' color='#ed9000' title='MySql'/>
        <SkillsBar percentage='85%' color='#9475a6' title='JSON'/>
        <SkillsBar percentage='65%' color='#000' title='GitHub'/>
      </div>
    </div>
  )
}

export default Skills
