// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/login';
import Product from '../Product/product';
import Sho from '../Product/sho';
import Buy from '../BuyNow/Buy';
import Cart from '../Cart/Cart';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sho/:id" element={<Sho />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
