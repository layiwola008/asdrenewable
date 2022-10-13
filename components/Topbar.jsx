import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
import {GiTimeBomb} from 'react-icons/gi';

const Topbar = () => {
  return (
    <div className='topbar__container'>
      <div className='topbar__left'>
        <div className='topbar__item'>
          <span className='tobbar__icon'><IoMdMail /></span>
          <span>Email: contact@asdrenewables.com</span>          
        </div>        
        <div className='topbar__item'>
          <span className='tobbar__icon'><GiTimeBomb /></span>
          <span>Hours: Mon-Fri: 8am – 7pm</span>
          
        </div>
      </div>

      <div className='topbar__right'>
        <span className='social__icon'><FaFacebook /></span>
        <span className='social__icon'><FaTwitterSquare /></span>
        <span className='social__icon'><FaLinkedin /></span>
        
      </div>
    </div>
  )
}

export default Topbar
