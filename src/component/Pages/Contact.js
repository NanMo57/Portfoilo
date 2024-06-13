import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

import LineTitle from './LineTitle'
import { Link } from 'react-router-dom';

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [Subject,setSubject] = useState('');
  const [Message,setMessage] = useState('');
  const [MessageState,setMessageState] = useState('');

  const message = useRef();


  const sendDataToEmail = (e)=>{
    e.preventDefault();
      console.log(Name);
      console.log(Email);
      console.log(Subject);
      console.log(Message);

      let formData = {
          'Name':Name,
          'Email':Email,
          'Subject':Subject,
          'Message':Message
      }

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const boxHeight = message.current.offsetHeight;
      const boxTop = scrollTop + (windowHeight - boxHeight) / 2;

       emailjs.send('service_6m6jzaw', 'template_fj1509b', formData, 'GGnAxenQa3RWq2g5C')
      .then((response) => {
        message.current.style.top = boxTop + 'px';
        setMessageState('SEND SUCCESS!')
        message.current.style.display = 'block'
        setTimeout(()=>{
          message.current.style.display = 'none'
        },2000)

        setMessage('');
        setSubject('');
        setEmail('');
        setName('');
        
      }, (err) => {
        message.current.style.top = boxTop + 'px';
        setMessageState('SEND FAILED...')
        message.current.style.display = 'block'
        setTimeout(()=>{
          message.current.style.display = 'none'
        },2000)
      });
  }
  return (
    <div className='ps-5 pt-5'>
    <div className='position-absolute w-25 bg-dark rounded-pill message' ref={message}><p className='text-center pt-3 pb-1'>{MessageState}</p></div>
        <div className='pb-4'>
            <h2>Contact</h2>
            <LineTitle/>
        </div>
        <div className='mb-5'>
          <div className='d-flex flex-column justigy=-content-center align-items-center'>
            <h2><b>Have You Any Question?</b></h2>
            <p className='text-yellow'>I'M AT YOUR SERVICE</p>
          </div>
          <div className='ps-5 pe-5 contactOption'>
              <ul className='d-flex justify-content-between align-items-center gap-5 ps-5 pe-5 mt-5 pb-5'>
                <Link className='text-center' to='https://wa.me/0795326548'>
                  <FaPhone className='fs-4 mb-2'/>
                  <div>
                    <h4>Call Me On</h4>
                    <p>0795326548</p>
                  </div>
                </Link>
                <Link className='text-center'>
                  <FaLocationDot className='fs-4 mb-2'/>
                  <div>
                    <h4>Location</h4>
                    <p>Jordan - Amman</p>
                  </div>
                </Link>
                <Link className='text-center' to='mailto:aloqdehnancy@gmail.com'>
                  <MdEmail className='fs-4 mb-2'/>
                  <div>
                    <h4>Email</h4>
                    <p>aloqdehnancy@gmail.com</p>
                  </div>
                </Link>
              </ul>
          </div>
          <div className='d-flex flex-column justigy=-content-center align-items-center mt-5'>
            <h2><b>SEND ME AN EMAIL</b></h2>
            <p className='text-yellow'>I'M VERY RESPONSIVE TO MESSAGES</p>
          </div>
          <form className='pe-5 mt-5' onSubmit={(e)=>sendDataToEmail(e)}>
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
              <div className='d-flex justify-content-between align-items-center  gap-5 w-100'>
                <input type='text' placeholder='Name' className='w-50' value={Name} onChange={(e)=>setName(e.target.value)}/>
                <input type='email' placeholder='Email' className='w-50' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <input type='text' placeholder='Subject' className='w-100' value={Subject} onChange={(e)=>setSubject(e.target.value)}/>
              <textarea placeholder='Message' className='w-100' value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <input type='submit' value='SEND' className='w-100'/>
          </form>
        </div>
    </div>
  )
}

export default Contact
