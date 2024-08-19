import React from 'react'
import { Link } from 'react-router-dom';
import '../MobileProduct.css'
import Rating from './Rating';

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';

function MobileProduct(props) {
    const { product } = props;

    return (
        <Link to='/' style={{ textDecoration: 'none' }} >
        <div className='mobile_product_card' >
            <img src='/product.webp' alt='' className='mobile_product_card_img' />
            <div className='mobile_product_card_details' >
                <div className='mobile_product_card_details_top' >
                    <span className='mobile_product_card_details_top_name' >Orange</span>
                </div>
                <div className='mobile_product_card_details_bottom' >
                    <div className='mobile_product_card_details_bottom_left' >
                        <span className='mobile_product_card_details_bottom_left_rating' >
                            <Rating />
                        </span>
                    </div>
                    <div className='mobile_product_card_details_bottom_right' >
                        <span className='mobile_product_card_details_bottom_right_price' >R200</span>
                    </div>
                </div>
                <div className='mobile_product_card_details_location' >
                    <span className='mobile_product_card_details_location_icon' ><PlaceIcon /></span>
                    <span className='mobile_product_card_details_location_province' >Limpopo</span>,
                    <span className='mobile_product_card_details_location_city' >Polokwane</span>
                </div>
            </div>
            <button className='mobile_product_card_btn' >
                <span className='mobile_product_card_btn_left' >
                    
                </span>
                <span className='mobile_product_card_btn_right' >
                   Available
                </span>
            </button>
        </div>
    </Link>
    )
}

export default MobileProduct
