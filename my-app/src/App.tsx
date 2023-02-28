import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer"
import ProductListPage from './components/PLP/tsx/ProductListPage';
import ProductDetailPage from "./components/ProductDetailPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";
<<<<<<< HEAD
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import ThankYouPage from "./components/Thankyou";
=======
import {BrowserRouter } from 'react-router-dom';
import { Route } from "react-router";
import  ScrolltoTop  from "./components/ScrolltoTop";
// import { ClipLoader } from "react-spinners";

>>>>>>> c3ecf86be47ecffe90a16a33b5ad46e5955facb8
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrolltoTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/ProductListPage/:catid" component={ProductListPage} />
          <Route exact path="/productdetail/:productid" component={ProductDetailPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
<<<<<<< HEAD
          <Route exact path="/thankyou" component={ThankYouPage} />
          
        </Switch>
=======

>>>>>>> c3ecf86be47ecffe90a16a33b5ad46e5955facb8
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;