import React from 'react'
import { Link } from 'react-router-dom';
import '../Product.css'

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from './Rating';

import PlaceIcon from '@mui/icons-material/Place';

function Product(props) {
    const { product } = props;
 
    return (
        
            <div className='product_card' >
                <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none' }} >
                <img src={product.image} alt='' className='product_card_img' />
                </Link>
                <div className='product_card_details' >
                    <div className='product_card_details_top' >
                        <span className='product_card_details_top_name' >{product.name}</span>
                    </div>
                    <div className='product_card_details_bottom' >
                        <div className='product_card_details_bottom_left' >
                            <span className='product_card_details_bottom_left_rating' >
                                <Rating />
                            </span>
                        </div>
                        <div className='product_card_details_bottom_right' >
                            <span className='product_card_details_bottom_right_price' >{product.price}</span>
                        </div>
                    </div>
                    <div className='product_card_details_location' >
                        <span className='product_card_details_location_icon' ><PlaceIcon /></span>
                        <span className='product_card_details_location_province' >Limpopo</span>,
                        <span className='product_card_details_location_city' >Polokwane</span>
                    </div>
                </div>
                <button className='product_card_btn' >
                    <span className='product_card_btn_left' >
                       
                    </span>
                    <span className='product_card_btn_right' >
                      Available
                    </span>
                </button>
            </div>

    )
}

export default Product
