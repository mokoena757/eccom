import { useEffect, useReducer } from "react";
import axios from "axios";
import DesktopHeader from '../component/DesktopHeader';
import MobileHeader from '../component/MobileHeader';
import MobileSupplierFeatured from '../component/MobileSupplierFeatured';
import SupplierFeatured from '../component/SupplierFeatured';
import MobileProduct from '../component/MobileProduct';
import Product from '../component/Product';
import User from '../component/User';
import { Helmet } from "react-helmet-async";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import '../HomePage.css'; // Ensure this CSS is relevant to your component

// Reducer function to manage state transitions for both users and products
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
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: { products: productsResult.data } });
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: { users: usersResult.data } });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Home Page - My Store</title>
        <meta name="description" content="Browse our wide selection of products and users." />
      </Helmet>
      
      <DesktopHeader />
      <MobileHeader />

      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <SupplierFeatured />
          <MobileSupplierFeatured />
          <div className="products-list">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="users-list">
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </>
      )}

      {/* Optional: add additional components like MobileProduct if necessary */}
    </div>
  );
}

export default HomePage;
