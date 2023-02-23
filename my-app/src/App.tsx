import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ProductListPage from './Components/PLP/tsx/ProductListPage';
import ProductDetailPage from "./Components/ProductDetailPage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ProductListPage" component={ProductListPage} />
          <Route exact path="/productdetail/:productid" component={ProductDetailPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;