import React from 'react'
import '../SupplierFeatured.css'
import {Link} from 'react-router-dom'
//icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedIcon from '@mui/icons-material/Verified';
import Rating from './Rating';


function SupplierFeatured() {
  return (
    <div className='supplier_featured_card' >
    <img src='/product.webp' alt='' className='mobile_supplier_featured_card_img' />
    <div className='mobile_supplier_featured_card_details' >
<Link style={{textDecoration: 'none',color: 'black'}} to='/user'>
     <div className='mobile_supplier_featured_card_details_top' >
       <div className='mobile_supplier_featured_card_details_left' >
       <img src='/logo.png' alt='' className='mobile_supplier_featured_card_details_left_logo' />
       </div>
       <div className='mobile_supplier_featured_card_details_right' >
         <span className='mobile_supplier_featured_card_details_right_name' >Leratos Fruits</span>
         <span className='mobile_supplier_featured_card_details_right_verification' ><VerifiedIcon /></span>
       </div>
     </div>
     </Link>
     <div className='mobile_supplier_featured_card_details_bottom' >
       <div className='mobile_supplier_featured_card_details_location' >
         <span className='mobile_supplier_featured_card_details_location_icon' ><PlaceIcon /></span>
         <span className='mobile_supplier_featured_card_details_location_province' >Limpopo</span>
         <span className='mobile_supplier_featured_card_details_location_city' >Polokwane</span>
       </div>
       <div className='mobile_supplier_featured_card_details_bottom_rating' >
       <Rating />
       </div>
   
     </div>
    
    </div>
 </div>
  )
}

export default SupplierFeatured
