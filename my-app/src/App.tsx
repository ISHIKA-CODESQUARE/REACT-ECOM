import React, { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmptyCart from "./components/EmptyCart";
import ProductListPage from "./components/PLP/tsx/ProductListPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThankYouPage from "./components/Thankyou";
import ScrolltoTop from "./components/ScrolltoTop";
import { initialState, reducer } from "./reducer/usereducer";

export const Usercontext = createContext<any>(false);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <BrowserRouter>
        <Usercontext.Provider value={{ state, dispatch }}>
          <Header />
          <ScrolltoTop />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/ProductListPage/:catid"
            component={ProductListPage}
          />
          <Route
            exact
            path="/productdetail/:productid"
            component={ProductDetailPage}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={state ? Home : Login} />
          <Route exact path="/register" component={state ? Home : SignUp} />
          <Route exact path="/thankyou" component={ThankYouPage} />
          {/* <Route exact path="/emptyCart" component={EmptyCart} /> */}
          <Footer />
        </Usercontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
