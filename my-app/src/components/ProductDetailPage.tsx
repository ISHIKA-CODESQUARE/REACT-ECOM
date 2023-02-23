import React,{ useEffect, useState } from 'react'
import { productDetailData } from "./ProductDetailData";
import axios from 'axios';
 console.log(productDetailData);
function ProductDetailPage() {

    // const [productData, setProductData] = useState([]);

    // let API: string = "http://192.168.1.210:4000/api/product/63f5a84fa54163c00ae535e1";

    const [product, setProduct] = useState()
    // console.log(product:any.Name);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const {data} = await axios.get('http://192.168.1.210:4000/api/productById/63f5a84fa54163c00ae535e1')
  
        setProduct(data)
      }
  
      fetchProduct()
    }, [])
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
        <h3 className="product-title">Foot wear</h3>
        <div className="rating">
         <div className="d-inline stars">
          <i className="fa fa-star checked"></i>
          <i className="fa fa-heart"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="bi bi-star"></i>
         </div>
         <div className="review-no">41 reviews</div>
        </div>
        <div className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos rerum fuga. Quia, qui blanditiis.</div>
        <h4 className="price">
         current price: <div className="d-inline">$180</div>
        </h4>
        <div className="vote">
         <div>91%</div> of buyers enjoyed this product! <div>(87 votes)</div>
        </div>
        <h5 className="d-inline sizes">
         sizes:
         <div className="d-inline size" data-toggle="tooltip" title="small">
          s
         </div>
         <div className="d-inline size" data-toggle="tooltip" title="medium">
          m
         </div>
         <div className="d-inline size" data-toggle="tooltip" title="large">
          l
         </div>
         <div className="d-inline size" data-toggle="tooltip" title="xtra large">
          xl
         </div>
        </h5>
        <h5 className="colors">
         colors:
         <div className="color orange not-available" data-toggle="tooltip" title="Not In store"></div>
         <div className="color green"></div>
         <div className="color blue"></div>
        </h5>
        <div className="action">
         <button className="add-to-cart btn btn-default" type="button">
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
