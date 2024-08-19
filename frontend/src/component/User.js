import React from 'react'
import '../SupplierFeatured.css'
import {Link} from 'react-router-dom'
//icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedIcon from '@mui/icons-material/Verified';
import Rating from './Rating';

 
function User(props) {
  const { user } = props;
  return (
    <div className='supplier_featured_card' >
    <img src={user.businessbanner} alt='' className='mobile_supplier_featured_card_img' />
    <div className='mobile_supplier_featured_card_details' >
<Link to={`/seller/${user.slug}`}  style={{textDecoration: 'none',color: 'black'}} >
     <div className='mobile_supplier_featured_card_details_top' >
       <div className='mobile_supplier_featured_card_details_left' >
       <img src={user.businesslogo} alt='' className='mobile_supplier_featured_card_details_left_logo' />
       </div>
       <div className='mobile_supplier_featured_card_details_right' >
         <span className='mobile_supplier_featured_card_details_right_name' >{user.name}</span>
         <span className='mobile_supplier_featured_card_details_right_verification' ><VerifiedIcon /></span>
       </div>
     </div>
     </Link>
     <div className='mobile_supplier_featured_card_details_bottom' >
       <div className='mobile_supplier_featured_card_details_location' >
         <span className='mobile_supplier_featured_card_details_location_icon' ><PlaceIcon /></span>
         <span className='mobile_supplier_featured_card_details_location_province' >{user.businessprovince}</span>,
         <span className='mobile_supplier_featured_card_details_location_city' >{user.businesscity}</span>
       </div>
       <div className='mobile_supplier_featured_card_details_bottom_rating' >
       <Rating />
       </div>
   
     </div>
    
    </div>
 </div>
  )
}

export default User
