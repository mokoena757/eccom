import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';
import EditStore from './pages/EditStore';
import Banner from './pages/Banner';
import CreateStore from './pages/CreateStore';
import Logo from './pages/Logo';
import MyStore from './pages/MyStore';
import StoreSearchPage from './pages/StoreSearchPage';
import Consult from './pages/Consult';
import Users from './pages/Users';
import SellerPage from './pages/SellerPage';
import SearchPageUser from './pages/SearchPageUsers';


function App() {
  return (
    <div>
      <BrowserRouter >

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/business" element={<SearchPageUser />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />

   
          <Route path="/seller/:slug" element={<SellerPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/consult" element={<Consult />} />

          <Route path="/banner" element={<Banner />} />
          <Route path="/createstore" element={<CreateStore />} />
          <Route path="/editstore" element={<EditStore />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/mystore" element={<MyStore />} />
          <Route path="/storesearch" element={<StoreSearchPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />


        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
