import React from 'react'
import { Link } from 'react-router-dom';
import '../Service.css'

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from './Rating';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

function Service(props) {
    const { service } = props;

    return (
        <Link to='/' style={{ textDecoration: 'none' }} >
            <div className='service_card' >
                <img src='/product.webp' alt='' className='service_card_img' />
                <div className='service_card_details' >
                    <div className='service_card_details_top' >
                        <span className='service_card_details_top_name' >Soil Testing</span>
                    </div>
                    <div className='service_card_details_top' >
                        <span className='service_card_details_top_price' >R200</span>
                    </div>
                    
                    
                </div>
                <button className='service_card_btn' >
                    <span className='service_card_btn_left' >
                       <CallIcon />
                    </span>
                    <span className='service_card_btn_right' >
                      Book Appointment
                    </span>
                </button>
            </div>
        </Link>
    )
}

export default Service
