import React,{ useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";

interface FormValues {
  name: string;
  pincode:number,
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    pincode:0,
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [success,setSuccess] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState(0)
  const [cartProducts, setCartProducts]= useState(localStorage.getItem('basket') ||"null")
console.log(cartProducts,"show")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formValues);
    // Perform form submission logic here
  };
  

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // console.log(formValues,"formValues")
  

  //shiping method api call
  const [shippingData, setShippingData] = useState([]);
  const [responseData1, setResponseData1] =  useState([] as any);
 
  let API: string = `https://ecommbackend-yvqe.onrender.com/api/getShippingMethod`;

  const fetchApiData = async (API: string) => {
          const res = await fetch(API);
          const data = await res.json();
          // console.log(data,"shipin data")
          setShippingData(data?.data)
  }

  const getCalculatedData = async() => {
    const token = localStorage.getItem('auth');
    const cart = JSON.parse(localStorage.getItem('basket'));
    const data = cart?.map((item:any)=>{
      return {pid:item?.pid,price:item?.price, qty:item?.qty }
    })
    const formResponse1 = await fetch('https://ecommbackend-yvqe.onrender.com/api/checkoutPriceDetails', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
     
    })
    const data2 = await formResponse1.json()
     setResponseData1(data2?.data)

  
  }
  useEffect(()=>{

     getCalculatedData();
      fetchApiData(API);
  },[]);

  const [shippingMethod, setShippingMethod] = useState<any>();

console.log(cartProducts,"cartProducts")
  const handleOrder = (e:any) => {
    console.log('order confirm')
  if(shippingMethod && cartProducts && formValues?.name  && formValues?.address && formValues?.cardNumber && formValues?.cvv && formValues?.expiryDate){

    const datacart = JSON.parse(cartProducts)?.map((item:any)=>{
      return {pid:item?.pid,price:item?.price, qty:item?.qty }
    })
    console.log("init")
    var data = {
      orderItems : datacart,
      shippingAddress: {
        address: formValues?.address,
        postalCode: formValues?.pincode,
      },
      payment: {
        name:formValues?.name,
        cardNumber:Number(formValues?.cardNumber),
        type:"credit card",
        cvv:Number(formValues?.cvv),
        expiry:formValues?.expiryDate
      },
      shippingMethod:shippingMethod?.name,
      shippingPrice: shippingMethod?.price
    }

    console.log(data,"data  fetch method herer")
    const token = localStorage.getItem('auth');
  const formResponse = fetch('https://ecommbackend-yvqe.onrender.com/api/orderConfirm', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  });
  localStorage.removeItem('basket');
  setSuccess(true);
  
  }else {
    alert("Somthing is missing check all the required fileds")
  }
  
  }

  const shippingMehtodHandler = (e: any) => {
    // console.log(e.target.value);
   shippingData.map((element:any)=>{
      if(element._id == e.target.value){
        setShippingMethod(element)
      }
    })
  }


  console.log(responseData1,"responseData1")
  return (
    <div className="maincontainer">
      <div className="jumbo mb-3 text-center"> <h1>Checkout Page</h1></div>
        <div className="container pt-4">
        
            <div className="row">
            <div className="col-6">
            <div>
      
    </div>
              {/* {ItemsPrice} */}
    <form className="card  form-control" >
    <div className="jumbo mb-3 text-center"> <h4>Shipping Address and Payment Details</h4></div>
      <div className="input-group-prepend p-3">
        <label htmlFor="name">Name:</label>
        <input
        className="form-control"
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div  className="input-group-prepend p-3" >
        <label htmlFor="address">Address:</label>
        <textarea
        className="form-control"
          id="address"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
      </div>
      <div className="input-group-prepend p-3">
        <label htmlFor="pincode">PinCode:</label>
        <input
         className="form-control"
          type="number"
          id="pincode"
          name="pincode"
          maxLength={5}
          value={formValues.pincode}
          onChange={handleChange}
        />
      </div>
      <div  className="input-group-prepend p-3">
        <label htmlFor="cardNumber">Card Number:  </label>
        <input
        className="form-control"
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formValues.cardNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-group-prepend  p-3">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          className="form-control"
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={formValues.expiryDate}
          onChange={handleChange}
        />
      </div>
      <div className="input-group-prepend p-3">
        <label htmlFor="cvv">CVV:</label>
        <input
          className="form-control"
          type="text"
          id="cvv"
          name="cvv"
          value={formValues.cvv}
          onChange={handleChange}
        />
      </div>
      {/* <button type="button" className="btn btn-primary" onClick={(e)=>handleOrder(e)}>Place Order</button> */}
    </form>
    </div>
    <div className="col-5">
        <h3 className="text-center">Order Summary</h3>
            <div className="row border">
              <div className="col-6 arrangeRight">
              Total price of Items
              </div>
              <div className="col-6 arrangeLeft">
                {/* <FontAwesomeIcon icon={faInr} />{totalPrice} 
                 */}
                 {responseData1?.ItemsPrice}
              </div>
            </div>
            <div className="row border ">
              <div className="col-6 arrangeRight">
                Tax 
              </div>
              <div className="col-6 arrangeLeft">
              {/* <FontAwesomeIcon icon={faInr} />0  */}
              {responseData1?.tax}
              </div>
            </div>
            {shippingMethod ?
            <div className="row border ">
              <div className="col-6 arrangeRight">
                Shipping Price
              </div>
              <div className="col-6 arrangeLeft">
              {/* <FontAwesomeIcon icon={faInr} />0  */}
              {shippingMethod?.price}
              </div>
            </div>:<></>}
            <div className="row border">
              <div className="col-6 arrangeRight">
                Total
              </div>
              <div className="col-6 arrangeLeft">
              {/* <FontAwesomeIcon icon={faInr} />{totalPrice} */}
              {shippingMethod ?
              responseData1.totalprice+shippingMethod?.price : responseData1.totalprice}
              </div>
            </div>

      <h4 className="text-center mt-5 ">Select shipping methods</h4>
    <select onChange={(e)=>shippingMehtodHandler(e)} className="form-control text-center mt-2">
      <option>--- Choose shipping method ---</option>
      {shippingData?.map((item:any)=>(
      <option value={item?._id}>{item?.name} {`(₹ ${item?.price})`}</option>
      ))}
    </select> 
    <button type="button" className="btn btn-primary form-control mt-4" onClick={(e)=>handleOrder(e)}>
      {success ?(<Link to={"/thankyou"}>
                  Order Confirm
                </Link>): "Order Confirm"}
                  
                </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CheckoutForm;