import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ProductListPage from "./components/ProductListPage"
import ProductDetailPage from "./components/ProductDetailPage"
import Cart from "./components/Cart"
import Payment from "./components/Payment"
import Checkout from "./components/Checkout"
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="Home" element={ <Home/> } />
        <Route path="ProductListPage" element={ <ProductListPage/> } />
        <Route path="ProductDetailPage" element={ <ProductDetailPage/> } />
        <Route path="Checkout" element={ <Checkout/> } />
        <Route path="Cart" element={ <Cart/> } />
        <Route path="Payment" element={ <Payment/> } />
      </Routes>
    </div>
  );
}

export default App;
