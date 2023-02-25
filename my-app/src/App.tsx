import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import ProductListPage from "./Components/ProductListPage"
import ProductDetailPage from "./Components/ProductDetailPage"
import Cart from "./Components/Cart"
import Payment from "./Components/Payment"
import Checkout from "./Components/Checkout"
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
