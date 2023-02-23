import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductListPage from './components/PLP/tsx/ProductListPage';
import ProductDetailPage from "./components/ProductDetailPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
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
          <Route exact path="/productdetail" component={ProductDetailPage} />
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