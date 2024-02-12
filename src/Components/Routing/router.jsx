import React from 'react';
import Product from '../Product/product';
import Sho from '../Product/sho';
import Buy from '../BuyNow/Buy';
import Cart from '../Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/sho/:id" element={<Sho />} />
          <Route path="/Buy" element={<Buy/>}/>
          <Route path="/Cart" element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;