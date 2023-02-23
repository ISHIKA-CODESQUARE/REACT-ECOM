import React from 'react'
import CartProducts from './CartProduct'

import "../css/cart.css";
const Cart = () => {
  return (
    <>
    <div className="container">
      {/* Heading */}
      <h2 className='font-weight-bold pb-4 pt-4'>Shopping Cart</h2>

      {/* Cart Products */}
      <CartProducts />

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
          <div className="col-4">

          </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default Cart
