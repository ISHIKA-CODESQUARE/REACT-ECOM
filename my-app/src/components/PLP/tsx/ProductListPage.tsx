import React,{ useEffect, useState } from 'react'
import {useParams } from "react-router-dom";
import ProductTiles from './ProductTilesPlp'
import SideBar from './SideBarPlp'
import Discount from './DiscountPlp'
import Banner from './Banner_PLP'

function ProductListPage() {

  interface RouteParams {
    catid: string;
  }


  const params = useParams<RouteParams>();
 
const catid = params.catid;
console.log(catid, "aamir")

    const [productData, setProductData] = useState([]);
    // https://1e18-2401-4900-1c18-7e2a-1d35-f1dc-7d75-32d4.in.ngrok.io/api/productByCgid/mans
    
    let API: string = `https://ecommbackend-yvqe.onrender.com/api/productByCgid/${catid}`;
console.log(productData,"jjjjj")

    const fetchApiData = async (API: string) => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            console.log(data)
            setProductData(data);

        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[catid]);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4"><Discount/><SideBar /></div>
          <div className="col-sm-8"><Banner/></div>
        </div>
        <div className="row">
        <ProductTiles productData={productData}/>
        </div>
      </div>
    )
}

export default ProductListPage