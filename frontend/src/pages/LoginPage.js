import React from 'react'
import '../LoginPage.css'


import { Link, useLocation, useNavigate } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='login' > 
    <div className='login_desktop' >
     
      <form  className='login_desktop_form' >
        <div className='login_desktop_form_top' >
        <Link to='/'>
          <img src='/logo.png' alt='' className='login_desktop_form_top_logo' />
          </Link>
        </div>
        <div className='login_desktop_form_center' >
          <div className='login_desktop_form_center_input_con' >
            <span className='login_desktop_form_center_input_label' >Email</span>
            <input   type='text' placeholder='Enter your Email' className='login_desktop_form_center_input' />
          </div>
          <div className='login_desktop_form_center_input_con' >
            <span className='login_desktop_form_center_input_label' >Password</span>
            <input  type='password' placeholder='Enter your Password' className='login_desktop_form_center_input' />
          </div>
          <div className='login_desktop_form_center_password_con' >
            <Link to='/'>
              <span className='login_desktop_form_center_password_link' >Forgot Password</span>
             </Link>
          </div>
          <div className='login_desktop_form_center_btn_con' >
            <button type='submit' className='login_desktop_form_center_btn' >Login</button>
          </div>
        </div>

        <div className='login_desktop_form_bottom' >
          <span className='login_desktop_form_bottom_link_text' >Don't have an account?</span>
          <Link to='/signup'style={{textDecoration:"none"}} >
            <span className='login_desktop_form_bottom_link_register' >Register</span>
          </Link>
        </div>

      </form>
    </div>
    <div className='login_mobile' >
     
      <form  className='login_mobile_form' >
      <div className='login_mobile_form_top' >
        <Link to='/'>
          <img src='/logo.png' alt='' className='login_mobile_form_top_logo' />
          </Link>
        </div>
        <div className='login_mobile_form_center' >
          <div className='login_mobile_form_center_input_con' >
            <span className='login_mobile_form_center_input_label' >Email</span>
            <input  type='text' placeholder='Enter your Email' className='login_mobile_form_center_input' />
          </div>
          <div className='login_mobile_form_center_input_con' >
            <span className='login_mobile_form_center_input_label' >Password</span>
            <input  type='password' placeholder='Enter your Password' className='login_mobile_form_center_input' />
          </div>
          <div className='login_mobile_form_center_password_con' >
            <Link to='/'>
              <span className='login_mobile_form_center_password_link' >Forgot Password</span>
            </Link>
          </div>
          <div className='login_mobile_form_center_btn_con' >
            <button type='submit' className='login_mobile_form_center_btn' >Login</button>
          </div>
        </div>

        <div className='login_mobile_form_bottom' >
          <span className='login_mobile_form_bottom_link_text' >Don't have an account?</span>
          <Link to='/signup'style={{textDecoration:"none"}} >
            <span className='login_mobile_form_bottom_link_register' >Register</span>
          </Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginPage
