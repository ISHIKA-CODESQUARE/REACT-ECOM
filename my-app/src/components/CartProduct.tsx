
import "../css/cartProduct.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { faInr, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartProduct = ({ productData }) => {

  // const [newData, setNewData] = useState();
  // const addToCart = () => {
  //   var myBasket:any = JSON.parse(localStorage.getItem('basket')as any)? JSON.parse(localStorage.getItem('basket')as any):[];
  //   // console.log(myBasket,"mybasket")
  //   if(myBasket[0] != null){
  //     for(var i = 0 ; i< myBasket.length; i ++ ){
  //       if(myBasket.find(myBasketid => myBasketid.pid === productData.pid)){
  //         // console.log(myBasket[i].qty, 'old quantity')
  //         if(myBasket[i].pid === productData.pid){
  //           myBasket[i].qty = myBasket[i].qty + 1;
  //           setNewData(myBasket[i].qty);
  //       }
  //         // console.log(myBasket[i].qty,"updated quantity")
  //         localStorage.setItem('basket', JSON.stringify(myBasket) as any);
  //       }
  //     }
      
  //     // localStorage.setItem('basket',JSON.stringify(basket) as any)
  //   }
  // }


  return (
    <>
      <section>
        {productData.map((prodData) => {
          const { pid, price, qty, image } = prodData;
          return (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-8 border-top border-bottom">
                    <div className="row mt-4 mb-4">
                      <div className="col-4 mt-2 mb-2">
                        {/* image */}
                        <img
                          className="imageData" 
                          src={`http://192.168.1.210:4000/${image}`} 
                          alt="Not found"
                        />
                      </div>
                      <div className="col-8">
                        <div className="row mt-2 d-flex">
                          <div className="col-6 text-align-productName">
                            <Link to="ProductDetailPage/:id" className="productName-font--weight">T-Shirt</Link>
                          </div>
                          <div className="col-6 productName-font--weight---price ">
                            <FontAwesomeIcon icon={faInr} />{price}
                          </div>
                        </div>
                        {/* <div className="row mt-3">
                  <div className="col-12 text-align-attributes">
                   <span>Size</span>
                   <br />
                   <span>Color</span>
                  </div>
                </div> */}
                        <div className="row button-alignment">
                          <div className="col-6 ">
                            <div>
                              Quantity:
                            <span className="quantity-of-product">{qty}</span>
                            </div>
                          </div>
                          <div className="col-6 removeItemButton">
                            <FontAwesomeIcon icon={faTrash} /> Remove Item
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
