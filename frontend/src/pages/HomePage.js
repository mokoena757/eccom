import { useEffect, useReducer } from "react";
import axios from "axios";
import DesktopHeader from '../component/DesktopHeader';
import MobileHeader from '../component/MobileHeader';
import '../HomePage.css';
import MobileSupplierFeatured from '../component/MobileSupplierFeatured';
import SupplierFeatured from '../component/SupplierFeatured';
import MobileProduct from '../component/MobileProduct';
import Product from '../component/Product';
import { Helmet } from "react-helmet-async";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import User from "../component/User";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload.products, loading: false };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload.users, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomePage() {
  const [{ loading, error, products, users }, dispatch] = useReducer(reducer, {
    products: [],
    users: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const [productsResult, usersResult] = await Promise.all([
          axios.get("/api/products"),
          axios.get("/api/users")
        ]);
        console.log('Fetched Products:', productsResult.data);
        console.log('Fetched Users:', usersResult.data);
        if (Array.isArray(productsResult.data) && Array.isArray(usersResult.data)) {
          dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: { products: productsResult.data } });
          dispatch({ type: "FETCH_USERS_SUCCESS", payload: { users: usersResult.data } });
        } else {
          throw new Error('API response is not an array');
        }
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className='home_page'>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className='home_page_desktop'>
            <DesktopHeader />
            <div className='home_page_desktop_banner'>
              <img src='/banner.jpg' className='home_page_desktop_banner_img' alt='' />
            </div>
            <div className='home_page_desktop_featured_suppliers'>
              <span className='home_page_desktop_featured_suppliers_headeing'>Featured Suppliers</span>
              <div className='home_page_desktop_featured_suppliers_list'>
                {Array.isArray(users) && users.length > 0 ? (
                  users.map(user => <User key={user.id} user={user} />)
                ) : (
                  <p>No users available</p>
                )}
              </div>
            </div>
            <div className='home_page_desktop_product_list'>
              <span className='home_page_desktop_product_list_top_heading'>New Suppliers</span>
              <div className='home_page_desktop_product_list_bottom_con'>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map(product => <Product key={product.slug} product={product} />)
                ) : (
                  <p>No products available</p>
                )}
              </div>
            </div>
          </div>
          <div className='home_page_mobile'>
            <MobileHeader />
            <div className='home_page_mobile_banner'>
              <img src='/banner.jpg' className='home_page_mobile_banner_img' alt='' />
            </div>
            <div className='home_page_mobile_featured_suppliers'>
              <span className='home_page_mobile_featured_suppliers_headeing'>Featured Suppliers</span>
              <div className='home_page_mobile_featured_suppliers_list'>
                {Array.isArray(users) && users.length > 0 ? (
                  users.map(user => <User key={user.id} user={user} />)
                ) : (
                  <p>No users available</p>
                )}
              </div>
            </div>
            <div className='home_page_mobile_product_list'>
              <span className='home_page_mobile_product_list_top_heading'>New Suppliers</span>
              <div className='home_page_mobile_product_list_bottom'>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map(product => <MobileProduct key={product.slug} product={product} />)
                ) : (
                  <p>No products available</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
