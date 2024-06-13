import React from 'react'

import List from './List';

import Logo from '../../img/logo.png';
import Social from './Social';


function Header() {
  return (
    <header className='d-flex flex-column justify-content-between align-items-center position-fixed fixed-start p-3 ps-5 pe-5 h-100'>
      <div className='d-flex flex-column justify-content-start align-items-center gap-5'>
        <img src={Logo} alt='logo' className='Logo'/>
        <List />
      </div>
      <Social />
    </header>
  )
}

export default Header
