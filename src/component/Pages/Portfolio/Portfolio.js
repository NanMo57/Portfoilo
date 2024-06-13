import React from 'react'

import LineTitle from '../LineTitle'



import signin_signup from '../../../img/signin&signup.png';
import Antique_Cafe from '../../../img/Antique_Cafe.png';
import Digital_Oclock from '../../../img/digital_oclock.png';
import E_Shopping from '../../../img/E-Shopping.png';
import Dashboard from '../../../img/Dashboard.png';

import ProfileForm from './ProfileForm';


function Portfolio() {
  return (
    <div className='ps-5 pt-5 pb-5'>
        <div className='pb-5'>
            <h2>My Works</h2>
            <LineTitle/>
        </div>
        <div className='d-flex gap-4 flex-wrap'>
            <ProfileForm 
                image={signin_signup} 
                project='Login & Sigup' 
                description="it's a Static and Responsive website , created by React js and CSS."
                weblink='https://nanmo57.github.io/LoginAndSigup/'
                codelink='https://github.com/NanMo57/LoginAndSigup.git'   
            />
            <ProfileForm 
                image={Antique_Cafe} 
                project='Antique Cafe' 
                description="it's a Static and Responsive website , created by HTML , Bootstrap ,CSS ,JQuery."
                weblink='https://nanmo57.github.io/Antique_Cafe_Website/'
                codelink='https://github.com/NanMo57/Antique_Cafe_Website.git'   
            />
             <ProfileForm 
                image={Digital_Oclock} 
                project="Digital O'clock"
                description="it's a Static and Responsive website , created by HTML , CSS and JavaScript."
                weblink='https://nanmo57.github.io/Digital-O-clock/'
                codelink='https://github.com/NanMo57/Digital-O-clock.git'   
            />
             <ProfileForm 
                image={E_Shopping} 
                project="E-Shopping"
                description="it's a Dynamic website , created by React,CSS and server JSON."
                weblink=''
                codelink='https://github.com/NanMo57/Simple-E-Commerce.git'   
                hide='none'
            />
            <ProfileForm 
                image={Dashboard} 
                project="Dashboard"
                description="it's a Dynamic and Responsive website , created by React,CSS and server JSON."
                weblink=''
                codelink='https://github.com/NanMo57/Dashboard.git'
                hide='none'   
            />
        </div>
    </div>
  )
}

export default Portfolio
