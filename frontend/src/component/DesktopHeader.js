import React from 'react'
import '../DesktopHeader.css'

//icon
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import SearchForm from './SearchForm';

import LogoutIcon from '@mui/icons-material/Logout';
 
function DesktopHeader() {
  return ( 
    <div className='desktop_header' >
      <div className='desktop_header_top' >
      <div className='desktop_header_top_left' >
      <div className='desktop_header_top_left_menu' >
        <button className='desktop_header_top_left_menu_icon' >
          <MenuIcon fontSize="large" />
        </button>
        </div>
        <div className='desktop_header_top_left_logo' >
          <img src='/logo.png' alt='' className='desktop_header_top_left_logo_img' />
        </div>
      </div>
      <div className='desktop_header_top_center' >
      <SearchForm />
      </div>
      <div className='desktop_header_top_right' >
        <div className='desktop_header_top_right_signin' >
          <span className='desktop_header_top_right_signin_left' ><PersonIcon /></span>
          <div className='desktop_header_top_right_signin_right' >
            <Link style={{textDecoration: 'none'}} to='/signin'>
            <span className='desktop_header_top_right_signin_right_signin' >signin</span>/
            </Link>
            <Link style={{textDecoration: 'none'}} to='/signup'>
            <span className='desktop_header_top_right_signin_right_signup' >Signin</span>
            </Link>
          </div>
          
         
        </div>
      </div>
      </div>
      <div className='desktop_header_bottom' >
      
      </div>
    </div>
  )
}

export default DesktopHeader
