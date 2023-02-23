import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className="wrapper_header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="nav-link" to={"/"}>
              Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
                <Link className="nav-link" to={"/ProductListPage"}>
                  Catalog
                </Link>
                <Link className="nav-link" to={"/shop"}>
                  Shop
                </Link>
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
