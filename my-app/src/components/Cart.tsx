
import React, { useEffect, useState } from 'react'

import { faInr } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartProducts from './CartProduct';
import { Link , useHistory } from "react-router-dom";

import "../css/cart.css";
const Cart = () => {
  
  const [updateState, setUpdateState] = useState(false);
  const storedData = localStorage.getItem('basket');
  const [success, setSuccess] = useState(false)
  const [totalPrice, setTotalPrice] = useState(null);
  const [productData, setProductData] = useState(JSON.parse(storedData));

  // useEffect(() => {

  //   if (storedData) {
  //     setProductData(JSON.parse(storedData));
  //   }
  // }, []);

  // console.log(productData,'newData')


  useEffect(() => {
    if (storedData != null) {
      setSuccess(true)
    }
    if(storedData == "[]"){
      setSuccess(false)
    }

    if (productData) {
      var total_price: any = 0;
      console.log(productData);
      productData.forEach((items) => {
        total_price = total_price + (items.price * items.qty);
        setTotalPrice(total_price);
        setUpdateState(!updateState);
      })
    }

  },[success])

  if (totalPrice) {
    console.log(totalPrice)
  }

  const history = useHistory()
  
  function checkout() {

    fetch('https://ecommbackend-yvqe.onrender.com/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: storedData })
    })
    history.push('/checkout');

  }


  // if (productData) {
  //    var total_price = 0
  //     for(var i=0;i<productData.length;i++){
  //       total_price = productData[i].qty * productData[i].price
  //       setTotalPrice(totalPrice)
  //       console.log(total_price)
  //     }
  // }
  // if(totalPrice){
  //   console.log(totalPrice)
  // }


  return (
    <>
      {success ? <div className="container">
        {/* Heading */}
        <h2 className='font-weight-bold pb-4 pt-4'>Shopping Cart</h2>
        <div className="row">
          <div className="col-8">
            {/* Cart Products */}
            <CartProducts productData={productData as any} />

            {/* Coupon code */}
            <div className="Coupon mt-3">
              <p >Coupon Code : </p>
              <div className="row">
                <div className="col-4">
                  <input className="form-control" type="text" placeholder="Enter CouponCode " />
                </div>
                <div className="col-4">
                  <button className='btn btn-secondary'> Apply </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            {/* <div className="row border">
              <div className="col-6 arrangeRight">
                Subtotal
              </div>
              <div className="col-6 arrangeLeft">
                <FontAwesomeIcon icon={faInr} />{totalPrice}
              </div>
            </div> */}
            {/* <div className="row border">
              <div className="col-6 arrangeRight">
                Tax
              </div>
              <div className="col-6 arrangeLeft">
                <FontAwesomeIcon icon={faInr} />0
              </div>
            </div> */}
            <div className="row border">
              <div className="col-6 arrangeRight">
                Total Amount
              </div>
              <div className="col-6 arrangeLeft">
                <FontAwesomeIcon icon={faInr} />{totalPrice}
              </div>
            </div>
            <br />
            <div className="row">
              <button className="btn btn-primary buttonWidth" onClick={() => checkout()}> Checkout </button>
            </div>
          </div>
        </div>







      </div> :
        <div className="container">
          <h1>Hi! Your Cart is Empty.</h1>
          <h3>Please buy something and come back again</h3>
        </div>
      }

    </>
  )
}

export default Cart
