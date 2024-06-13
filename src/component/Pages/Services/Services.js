import React from 'react'
import LineTitle from '../LineTitle'

import { IoIosColorPalette } from "react-icons/io";
import ServicesForm from './ServicesForm';
import { IoPhonePortrait } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function Services() {
  return (
    <div className='ps-5 mb-5 pt-5'>
        <div className='mb-5'>
            <h2>Services</h2>
            <LineTitle/>
        </div>
        <div className='d-flex gap-4 flex-wrap'>
            <ServicesForm icon={<IoIosColorPalette/>} title='UI/UX Design' description='Creating visually appealing and user-friendly designs.'/>
            <ServicesForm icon={<IoPhonePortrait/>} title='Responsive Design' description='Ensuring websites work seamlessly on all devices (mobile, tablet, desktop).'/>
            <ServicesForm icon={<RiPagesFill/>} title='SPA Development' description='Developing Single Page Applications using frameworks like React.js'/>
            <ServicesForm icon={<IoSpeedometer/>} title='Performance Optimization' description='Enhancing the speed and responsiveness of web applications.'/>
            <ServicesForm icon={<FaEarthAfrica/>} title='Cross-Browser Compatibility' description='Ensuring the website works well across different web browsers.'/>
            <ServicesForm icon={<FaDatabase/>} title='Database Design and Management' description='Designing database schemas, managing databases (SQL and NoSQL).'/>
            <ServicesForm icon={<FaLaptopCode/>} title='Server-Side Logic' description='Writing server-side code to handle business logic, authentication, and data processing.'/>
            <ServicesForm icon={<FaLock/>} title='Data Security' description='Implementing best practices for data security and privacy.'/>
        </div>
    </div>
  )
}

export default Services
