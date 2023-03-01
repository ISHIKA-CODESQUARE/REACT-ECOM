import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  const base = process.env.REACT_APP_BASE_URL;
const Header: React.FC = () => {

  const [count, setCount] = useState(0);
  const basket = localStorage.getItem("basket");
  var myBasket = JSON.parse(basket);
  useEffect(() => {
    setCount(myBasket?.length);
    // window.location.reload()
  }, [count]);


  
  // console.log(auth.length,"auth")
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth");
   
    history.push("/login");

  };
  
  
  const auth = localStorage.getItem("auth");
  console.log(auth,"auth")
  return (
    <>
      <div className="wrapper_header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="col-6">
                <Link className="nav-link" to={"/"}>
                  <img alt="" src="/logo1.jpg" />
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
                  <div className="navbar-nav">
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
                    

                    {!auth ? (
                      <div className= "abc"><Link className="nav-link" to={"/register"}>
                      Register
                    </Link>
                      <Link className="nav-link" to={"/login"}>
                        Login
                      </Link></div>
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
                      <sup>{count}</sup>
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
