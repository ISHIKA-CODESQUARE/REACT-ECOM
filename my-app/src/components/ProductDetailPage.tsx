
import React,{ useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { productDetailData } from "./ProductDetailData";
import axios from 'axios';
 console.log(productDetailData);
function ProductDetailPage() {

    // const [productData, setProductData] = useState([]);

    // let API: string = "http://192.168.1.210:4000/api/product/63f5a84fa54163c00ae535e1";

    interface RouteParams {
      productid: string;
    }
    const params = useParams<RouteParams>();
    const id = params.productid;



    interface Product {
      data: {
        Name: string;
        Description: string;
        Price:string;
      };
    }

    const [productDetail, setProductDetail] = useState<any>();
    const [basket, setBasket] = useState<[Object]>([{}]);
    const [products,setProducts] = useState();
    const [selectedOption, setSelectedOption] = useState<any>(1);

    const handleOptionChange = (event:any) => {
      setSelectedOption(event.target.value);
    };

    const [product, setProduct] = useState<Product>({
      data: {
        Name: '',
        Description:'',
        Price: ''
      },
    })
   // console.log(product.data.Name);
  
    useEffect(() => {
      const fetchProduct = async () => {
        // const {data} = await axios.get(`http://192.168.1.210:4000/api/productById/${id}`)
        // setProduct(data)
        
        let url = `https://ecommbackend-yvqe.onrender.com/api/productById/${id}`
        let res = await fetch(url);
        let data1 = await res.json();
        const {message , data} = data1;

        setProductDetail(data);
        
        console.log(message);
        console.log(data)
      }
  
      fetchProduct()
    }, [id])

    const addToCart = () => {
      var myBasket:any = JSON.parse(localStorage.getItem('basket')as any)? JSON.parse(localStorage.getItem('basket')as any):[];
      // console.log(myBasket,"mybasket")
      if(myBasket[0] != null){
        // for(var i = 0 ; i< myBasket.length; i ++ ){
        //   if(myBasket.find(myBasketid => myBasketid.pid === productDetail._id)){
        //     // console.log(myBasket[i].qty, 'old quantity')
        //     if(myBasket[i].pid === productDetail._id){
        //       myBasket[i].qty = myBasket[i].qty + parseFloat(selectedOption);
        //     }
        //       // console.log(myBasket[i].qty,"updated quantity")
        //       localStorage.setItem('basket', JSON.stringify(myBasket) as any);
        //   }
          // else{
          //   myBasket?.push({pid:productDetail._id, price:productDetail.Price, qty:parseFloat(selectedOption),image:productDetail.Image,name:productDetail.Name})
          //   localStorage.setItem('basket',JSON.stringify(myBasket) as any);
            
          // }
        // }
        if(myBasket.find(myBasketid => myBasketid.pid === productDetail._id)){
        var index = myBasket.findIndex(myBasketid => myBasketid.pid === productDetail._id);
        if(index !== -1){
          // console.log(myBasket[index].qty, 'old quantity')
          if(myBasket[index].pid === productDetail._id){
            myBasket[index].qty = myBasket[index].qty + parseFloat(selectedOption);
          }
          // console.log(myBasket[index].qty,"updated quantity")
          localStorage.setItem('basket', JSON.stringify(myBasket) as any);
        }
        
        // localStorage.setItem('basket',JSON.stringify(basket) as any)
      }
      else{
        myBasket?.push({pid:productDetail._id, price:productDetail.Price, qty:parseFloat(selectedOption),image:productDetail.Image,name:productDetail.Name})
        localStorage.setItem('basket',JSON.stringify(myBasket) as any);
        
      }
    }
      else{
        myBasket?.push({pid:productDetail._id, price:productDetail.Price, qty:parseFloat(selectedOption), image:productDetail.Image,name:productDetail.Name})
        localStorage.setItem('basket',JSON.stringify(myBasket) as any);
      }
      window.location.reload()
    }
    console.log(productDetail)
    
    
 return (
  <>
   <div className="container ">
    <div className="card card_pdp">
     <div className="container-fluid">
      <div className="wrapper row">
       <div className="preview col-md-6">
        <div className="preview-pic tab-content">
         <div className="tab-pane  active" id="pic-1">
         
          <img className="img_pdp"  src={`https://ecommbackend-yvqe.onrender.com/${productDetail?.Image}`} alt="img" />
         </div>
        </div>
        
       </div>
       <div className="details col-md-6">
        <h3 className="product-title">{productDetail?.Name}</h3>

        <div className="product-description"> {productDetail?.Description}</div>
        <h4 className="price">
         Price: ${productDetail?.Price}<div className="d-inline"></div>
        </h4>

        <div>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </div>
      <br />
        <div className="action">
        <button className="add-to-cart btn btn-primary" type="button" onClick={()=>addToCart()}>
          add to cart
         </button>
         <button className="like btn btn-default" type="button">
          <div className="fa fa-heart"></div>
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default ProductDetailPage;
