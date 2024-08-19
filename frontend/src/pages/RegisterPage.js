import React from 'react'
import '../RegisterPage.css'

import { Link, useLocation, useNavigate } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className='register' >
    <div className='register_desktop' >
  
      <form  className='register_desktop_form' >
        <div className='register_desktop_form_top' >
        <Link to='/'>
          <img src='/logo.png' alt='' className='register_desktop_form_top_logo' />
          </Link>
        </div>
        <div className='register_desktop_form_center' >
        <div className='register_desktop_form_center_input_con' >
            <span className='register_desktop_form_center_input_label' >Business Name</span>
            <input   type='text' placeholder='Enter your Name' className='register_desktop_form_center_input' />
          </div>
          <div className='register_desktop_form_center_input_con' >
            <span className='register_desktop_form_center_input_label' >Business Username</span>
            <input    type='text' placeholder='Enter your @username' className='register_desktop_form_center_input' />
          </div>
          <div className='register_desktop_form_center_input_con' >
            <span className='register_desktop_form_center_input_label' >Business Email</span>
            <input    type='text' placeholder='Enter your Email' className='register_desktop_form_center_input' />
          </div>
          <div className='register_desktop_form_center_input_con' >
            <span className='register_desktop_form_center_input_label' >Business Password</span>
            <input    type='password' placeholder='Enter your Password' className='register_desktop_form_center_input' />
          </div>
          <div className='register_desktop_form_center_input_con' >
            <span className='register_desktop_form_center_input_label' >Business Confirm Password</span>
            <input   type='password' placeholder='Confirm Password' className='register_desktop_form_center_input' />
          </div>
         
          <div className='register_desktop_form_center_btn_con' >
            <button type='submit' className='register_desktop_form_center_btn' >Register</button>
          </div>
        </div>

        <div className='register_desktop_form_bottom' >
          <span className='register_desktop_form_bottom_link_text' >Already have an account?</span>
          <Link to='/signin' style={{textDecoration:"none"}} >
            <span className='register_desktop_form_bottom_link_register' >Login</span>
          </Link>
        </div>

      </form>
    </div>
    <div className='register_mobile' >
    
      <form  className='register_mobile_form' >
      <div className='register_mobile_form_top' >
      <Link to='/'>
          <img src='/logo.png' alt='' className='register_mobile_form_top_logo' />
          </Link>
        </div>
        <div className='register_mobile_form_center' >
        <div className='register_mobile_form_center_input_con' >
            <span className='register_mobile_form_center_input_label' >Business Name</span>
            <input   type='text' placeholder='Enter your Email' className='register_mobile_form_center_input' />
          </div>
          <div className='register_mobile_form_center_input_con' >
            <span className='register_mobile_form_center_input_label' >Business username</span>
            <input    type='text' placeholder='Enter your @username' className='register_mobile_form_center_input' />
          </div>
          <div className='register_mobile_form_center_input_con' >
            <span className='register_mobile_form_center_input_label' >Business Email</span>
            <input    type='text' placeholder='Enter your Email' className='register_mobile_form_center_input' />
          </div>
          <div className='register_mobile_form_center_input_con' >
            <span className='register_mobile_form_center_input_label' >Business Password</span>
            <input    type='password' placeholder='Enter your Password' className='register_mobile_form_center_input' />
          </div>
          <div className='register_mobile_form_center_input_con' >
            <span className='register_mobile_form_center_input_label' >Business Confirm Password</span>
            <input   type='password' placeholder='Confirm Password' className='register_mobile_form_center_input' />
          </div>
         
          <div className='register_mobile_form_center_btn_con' >
            <button type='submit' className='register_mobile_form_center_btn' >Login</button>
          </div>
        </div>

        <div className='register_mobile_form_bottom' >
          <span className='register_mobile_form_bottom_link_text' >Already have an account?</span>
          <Link to='/signin' style={{textDecoration:"none"}} >
            <span className='register_mobile_form_bottom_link_register' >Login</span>
          </Link>
        </div>

      </form>
    </div>
  </div>
  )
}

export default RegisterPage
