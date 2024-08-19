import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import DesktopHeader from '../component/DesktopHeader'
import MobileHeader from '../component/MobileHeader'
import '../HomePage.css'
import MobileSupplierFeatured from '../component/MobileSupplierFeatured'
import SupplierFeatured from '../component/SupplierFeatured'
import MobileProduct from '../component/MobileProduct'

import Product from '../component/Product'
import { Helmet } from "react-helmet-async";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import User from "../component/User";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Users() {
  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    users: [],
    loading: true,
    error: "",
  });
  // const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/users");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setUsers(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className='home_page' >
          {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
       <div className='home_page_desktop' >
        <DesktopHeader />
        <div className='home_page_desktop_banner' >
          <img src='/banner.jpg' className='home_page_desktop_banner_img' alt='' />
        </div>
        <div className='home_page_desktop_featured_suppliers' >
          <span className='home_page_desktop_featured_suppliers_headeing' >Featured Suppliers</span>
          <div className='home_page_desktop_featured_suppliers_list' >
            <SupplierFeatured />
            <SupplierFeatured />
            <SupplierFeatured />
            <SupplierFeatured />
            <SupplierFeatured />
          </div>
        </div>
        <div className='home_page_desktop_product_list' >
          <span className='home_page_desktop_product_list_top_heading' >New Suppliers</span>
          <div className='home_page_desktop_product_list_bottom_con' >
            
            {users.map((user) => (
             
                <User key={user.slug} user={user}></User>
             
            ))}
          </div>
        </div>
       </div>
       <div className='home_page_mobile' >
        <MobileHeader />
        <div className='home_page_mobile_banner' >
          <img src='/banner.jpg' className='home_page_mobile_banner_img' alt='' />
        </div>
        <div className='home_page_mobile_featured_suppliers' >
          <span className='home_page_mobile_featured_suppliers_headeing' >Featured Suppliers</span>
          <div className='home_page_mobile_featured_suppliers_list' >
            <MobileSupplierFeatured />
            <MobileSupplierFeatured />
            <MobileSupplierFeatured />
            <MobileSupplierFeatured />
            <MobileSupplierFeatured />
          </div>
        </div>
        <div className='home_page_mobile_product_list' >
          <span className='home_page_mobile_product_list_top_heading' >New Suppliers</span>
          <div className='home_page_mobile_product_list_bottom' >
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
          </div>
        </div>
    </div>
    </> 
   )}
    </div>
  )
}

export default Users
