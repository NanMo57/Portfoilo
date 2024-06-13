import React from 'react'

import Item from './Item'


import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";

function List(){
  return (
    <nav className='mt-3'>
        <ul className='d-flex flex-column gap-5 justify-content-center align-items-center p-0'>
           <Item icon={<FaHome />} item='Home' path='/portfoilo'/>
           <Item icon={<FaUser />} item='About' path='/About'/>
           <Item icon={<FaList />} item='Services' path='/Services'/>
           <Item icon={<MdHomeRepairService />} item='Works' path='/Works'/>
           <Item icon={<IoLogoWechat />} item='Contact' path='/Contact'/>
        </ul>
      </nav>
  )
}

export default List
