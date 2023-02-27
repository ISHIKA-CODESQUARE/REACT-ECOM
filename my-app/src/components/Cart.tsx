
import React, { useEffect, useState } from 'react'

import { faInr } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartProducts from './CartProduct';
import { Link } from "react-router-dom";

import "../css/cart.css";
const Cart = () => {
  const storedData = localStorage.getItem('basket');
  const [totalPrice,setTotalPrice] = useState(null);
  const [productData, setProductData] = useState(JSON.parse(storedData));
 
  // useEffect(() => {
    
  //   if (storedData) {
  //     setProductData(JSON.parse(storedData));
  //   }
  // }, []);

  // console.log(productData,'newData')
useEffect(()=>{
  if(productData){
    var total_price : Number = 0;
    console.log(productData);
    productData.forEach((items)=>{
      total_price = total_price + items.price;
      setTotalPrice(total_price);
    })
  }
},[])
 
  if(totalPrice){
    console.log(totalPrice)
  }

  function checkout(){
  
    fetch('https://ecommbackend-yvqe.onrender.com/api/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: storedData })
  })
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
      <div className="container">
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
            <div className="row border backgroundSet ">
              <div className="col-6 arrangeRight">
                Subtotal
              </div>
              <div className="col-6 arrangeLeft">
                <FontAwesomeIcon icon={faInr} />{totalPrice} 
              </div>
            </div>
            <div className="row border backgroundSet">
              <div className="col-6 arrangeRight">
                Tax 
              </div>
              <div className="col-6 arrangeLeft">
              <FontAwesomeIcon icon={faInr} />0 
              </div>
            </div>
            <div className="row border backgroundSet">
              <div className="col-6 arrangeRight">
                Total
              </div>
              <div className="col-6 arrangeLeft">
              <FontAwesomeIcon icon={faInr} />{totalPrice}
              </div>
            </div>

            <div className="row">
              <button className="btn btn-primary buttonWidth" onClick={()=>checkout()}> <Link to={"/checkout"}>
                Checkout
                </Link></button>
            </div>
          </div>
          
        </div>







      </div>
    </>
  )
}

export default Cart
