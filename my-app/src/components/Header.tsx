import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Usercontext } from "../App";
import logo from './DSnew.jpg';
const base = process.env.REACT_APP_BASE_URL;
const Header: React.FC = () => {

  const [count, setCount] = useState(0);
  const [updateState, setUpdateState] = useState(false);
  const basket = localStorage.getItem("basket");
  var myBasket = JSON.parse(basket);
  useEffect(() => {
    setCount(myBasket?.length);
    // window.location.reload()
    setUpdateState(!updateState);

  },[myBasket])

  // console.log(auth.length,"auth")
  const history = useHistory();
  const logout = () => {
    dispatch({ type: "USER", payload: false });
    history.push("/login");

  };
  const { state, dispatch } = useContext(Usercontext);

  const style = {
    backgroundColor: 'red',
    marginLeft: "1rem",
    height: "1rem",
    borderRadius: "5rem",
    fontSize: "small",
    display: "block",
    width: "1rem",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: "-1.6rem",
  }

  return (
    <>
      <div className="wrapper_header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="col-6">
                <Link className="nav-link" to={"/"}>
                  <img style={{width:"132px"}} src={logo}/>
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
              </div>
              <div className="col-6">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav" style={{marginLeft: "11rem"}}>
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                    <NavDropdown title="Catalog" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/ProductListPage/mens">
                        Mens
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/ProductListPage/womens">
                        Womens
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/ProductListPage/kids">
                        Kids
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link className="nav-link" to={"/shop"}>
                      Shop
                    </Link>
                    {!state ? (
                      <div className="abc">
                        <Link className="nav-link" to={"/register"}>
                          Register
                        </Link>
                        <Link className="nav-link" to={"/login"}>
                          Login
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="submit"
                          className="buttons"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </div>
                    )}

                    <Link className="nav-link" to={"/cart"}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span style={{   backgroundColor: 'red',
                          marginLeft: "1.2rem",
                          height: "1.2rem",
                          borderRadius: "5rem",
                          fontSize: "small",
                          display: "block",
                          width: "1.2rem",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                          marginTop: "-1.6rem",}}>{count}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
