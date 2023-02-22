import React,{ useEffect } from 'react'
import ProductTiles from './ProductTilesPlp'
import SideBar from './SideBarPlp'
import Discount from './DiscountPlp'


function ProductListPage() {

    let API: string = "https://1e18-2401-4900-1c18-7e2a-1d35-f1dc-7d75-32d4.in.ngrok.io/api/allProducts";


    const fetchApiData = async (API: string) => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[]);
    return (
    
      <div className="container">
        <div className="row">
          <div className="col-sm-4"><SideBar /></div>
          <div className="col-sm-8">  <ProductTiles /></div>
        </div>
      </div>
    );
}

export default ProductListPage