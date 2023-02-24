
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
  console.log(id)



    interface Product {
      data: {
        Name: string;
        Description: string;
        Price:string;
      };
    }

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
        const {data} = await axios.get(`http://192.168.1.210:4000/api/productById/${id}`)
  
        setProduct(data)
      }
  
      fetchProduct()
    }, [id])
 return (
  <>
   <div className="container ">
    <div className="card card_pdp">
     <div className="container-fluid">
      <div className="wrapper row">
       <div className="preview col-md-6">
        <div className="preview-pic tab-content">
         <div className="tab-pane  active" id="pic-1">
          <img className="img_pdp"  src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="img" />
         </div>
         <div className="tab-pane" id="pic-2">
          <img className="img_pdp" src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="img" />
         </div>
         <div className="tab-pane">
          <img className="img_pdp" id="pic-3" src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="img" />
         </div>
         <div className="tab-pane">
          <img className="img_pdp" id="pic-4" src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="img" />
         </div>
         <div className="tab-pane">
          <img className="img_pdp" id="pic-5" src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="img" />
         </div>
        </div>
        <div className="preview-thumbnail nav nav-tabs">
         <div className="preview-thumbnail nav nav-tabs">
          <div className="active li">
           <a data-target="#pic-1" data-toggle="tab">
            <img src="https://freepngimg.com/save/26252-black-shoe-image/475x267" />
           </a>
          </div>
          <div className="li">
           <a data-target="#pic-2" data-toggle="tab">
            <img src="https://freepngimg.com/save/26252-black-shoe-image/475x267" />
           </a>
          </div>
          <div className="li">
           <a data-target="#pic-3" data-toggle="tab">
            <img src="https://freepngimg.com/save/26252-black-shoe-image/475x267" />
           </a>
          </div>
          <div className="li">
           <a data-target="#pic-4" data-toggle="tab">
            <img src="https://freepngimg.com/save/26252-black-shoe-image/475x267" />
           </a>
          </div>
          <div className="li">
           <a data-target="#pic-5" data-toggle="tab">
            <img src="https://freepngimg.com/save/26252-black-shoe-image/475x267" />
           </a>
          </div>
         </div>
        </div>
       </div>
       <div className="details col-md-6">
        <h3 className="product-title">{product.data.Name}</h3>

        <div className="product-description"> {product.data.Description}</div>
        <h4 className="price">
         Price: ${product.data.Price}<div className="d-inline"></div>
        </h4>


        <div className="action">
         <button className="add-to-cart btn btn-primary" type="button">
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
