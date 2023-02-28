import React,{ useEffect, useState } from 'react'

interface FormValues {
  name: string;
  email: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    // Perform form submission logic here
  };
  

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  console.log(formValues,"formValues")

  //shiping method api call
  const [productData, setProductData] = useState([]);
 
  let API: string = `http://192.168.1.210:4000/api/getShippingMethod`;
console.log(productData,"shiping")

  const fetchApiData = async (API: string) => {
      try{
          const res = await fetch(API);
          const data = await res.json();
          console.log(data,"shipin data")
          setProductData(data);

      }
      catch(error){
          console.log(error);
      }
  }
  useEffect(()=>{
      fetchApiData(API);
  },[]);
  interface ShippingMethod {
  id: string;
  name: string;
  price: number;
}
  interface ShippingMethodSelectProps {
    shippingMethods: ShippingMethod[];
    selectedShippingMethodId: string | null;
    onShippingMethodSelect: (id: string | null) => void;
  }
  const renderShippingMethodOptions = (shippingMethods: ShippingMethod[]) =>
  shippingMethods.map((method: ShippingMethod) => (
    <option key={method.id} value={method.id}>
      {method.name} (${method.price})
    </option>
  ));

  const ShippingMethodSelect = (props: ShippingMethodSelectProps) => (
    <select
      value={props.selectedShippingMethodId || ""}
      onChange={(event) => {props.onShippingMethodSelect(event.target.value || null); console.log(event.target.value)}}
    >
      <option value="">-- Select a Shipping Method --</option>
      {renderShippingMethodOptions(props.shippingMethods)}
    </select>
  );
  const shippingMethods: ShippingMethod[] = [
    {id: '63f72bb9aa6fc401ddde4f59', name: 'Free', price: 0},
    {id: '63f72bcfaa6fc401ddde4f5b', name: 'express- in 2 day', price: 99},
    {id: '63f87d39c289cc0b0b35ad31', name: '7 day delivery', price: 19}
  ];
  const [selectedShippingMethodId, setSelectedShippingMethodId] = useState<string | null>(null);


  const handleOrder = (e:any) => {
    var data = {
      orderItems : localStorage.getItem(''),
      shippingAddress: {
        address: "sdfsdfsd",
        postalCode: 1234,
      },
      payment: {
        name:"sbi",
        cardNumber:111111111,
        type:"credit card",
        cvv:123,
        expiry:"1980-01-01"
      },
      shippingMethod:"Free",
      shippingPrice: 23
    }

  }

  {console.log(selectedShippingMethodId)}

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
      <div className="input-group-prepend p-3">
        <label htmlFor="email">Email:</label>
        <input
         className="form-control"
          type="email"
          id="email"
          name="email"
          value={formValues.email}
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
    <div className="col-5"> <div>
      <ShippingMethodSelect
        shippingMethods={shippingMethods}
        selectedShippingMethodId={selectedShippingMethodId}
        onShippingMethodSelect={setSelectedShippingMethodId}
      />
    </div></div>
    </div>
    </div>
    </div>
  );
};

export default CheckoutForm;