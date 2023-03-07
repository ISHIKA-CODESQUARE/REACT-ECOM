import "../css/cartProduct.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { faInr, faPlus, faMinus, faTrash, faUsd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartProduct = ({productData}) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("basket")) || []);

  function removeItem(pid){
    let myArray = [...cartItems];
    let indexToDelete = myArray.findIndex(obj => obj.pid === pid);
    if (indexToDelete !== -1) {
      myArray.splice(indexToDelete, 1);
      localStorage.setItem("basket", JSON.stringify(myArray));
      setCartItems(myArray);
      window.location.reload()
    }
    
  }

  return (
    <>
      <section>
        {cartItems.map((prodData) => {
          const { pid, price, qty, image, name } = prodData;
          return (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-12 border-top border-bottom">
                    <div className="row mt-4 mb-4">
                      <div className="col-4 mt-2 mb-2">
                        {/* image */}
                        <img
                          className="imageData" 
                          src={`https://ecommbackend-yvqe.onrender.com/${image}`} 
                          alt="Not found"
                        />
                      </div>
                      <div className="col-8">
                        <div className="row mt-2 d-flex">
                          <div className="col-6 text-align-productName">
                            <Link to="ProductDetailPage/:id" className="productName-font--weight">{name}</Link>
                          </div>
                          <div className="col-6 productName-font--weight---price ">
                            <FontAwesomeIcon icon={faUsd} />{price}
                          </div>
                        </div>
                        <div className="row button-alignment">
                          <div className="col-6 ">
                            <div>
                              Quantity:
                            <span className="quantity-of-product">{qty}</span>
                            </div>
                          </div>
                          <div className="col-6 removeItemButton">
                            <button className="btn btn-danger" onClick={()=>removeItem(pid)}>
                            <FontAwesomeIcon icon={faTrash} /> Remove Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>

    </>
  );
};

export default CartProduct;
