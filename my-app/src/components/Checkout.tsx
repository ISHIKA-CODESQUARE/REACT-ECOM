import React,{ useEffect, useState } from 'react'

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

  const [cartProducts, setCartProducts]= useState(localStorage.getItem('basket') ||"null")

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
 
  let API: string = `https://ecommbackend-yvqe.onrender.com/api/getShippingMethod`;

  const fetchApiData = async (API: string) => {
          const res = await fetch(API);
          const data = await res.json();
          // console.log(data,"shipin data")
          setShippingData(data?.data)
  }
  useEffect(()=>{
      fetchApiData(API);
  },[]);

  const [shippingMethod, setShippingMethod] = useState<any>();

console.log(cartProducts,"cartProducts")
  const handleOrder = (e:any) => {
    console.log('order confirm')
  if(shippingMethod && cartProducts && formValues?.name  && formValues?.address && formValues?.cardNumber && formValues?.cvv && formValues?.expiryDate){

    console.log("init")
    var data = {
      orderItems : cartProducts,
      shippingAddress: {
        address: formValues?.address,
        postalCode: formValues?.pincode,
      },
      payment: {
        name:formValues?.name,
        cardNumber:formValues?.cardNumber,
        type:"credit card",
        cvv:formValues?.cvv,
        expiry:formValues?.expiryDate
      },
      shippingMethod:shippingMethod?.name,
      shippingPrice: shippingMethod?.price
    }

    console.log(data,"data  fetch method herer")
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

  return (
    <div className="maincontainer">
        <div className="container pt-4">
            <div className="row">
            <div className="col-6">
    <form className="card  form-control" onSubmit={handleSubmit}>
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
          type="text"
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
      <button type="submit" className="btn btn-primary" onClick={(e)=>handleOrder(e)}>Place Order</button>
    </form>
    </div>
    <div className="col-5 text-center">
      <h4>Select shipping methods</h4>
    <select onChange={(e)=>shippingMehtodHandler(e)}>
      <option>Choose shipping method</option>
      {shippingData?.map((item:any)=>(
      <option value={item?._id}>{item?.name} {`(₹ ${item?.price})`}</option>
      ))}
    </select> <div>
   
    </div></div>
    </div>
    </div>
    </div>
  );
};

export default CheckoutForm;