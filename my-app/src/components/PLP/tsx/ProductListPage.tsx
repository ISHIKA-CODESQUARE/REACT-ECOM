import React,{ useEffect, useState } from 'react'
import ProductTiles from './ProductTilesPlp'
import SideBar from './SideBarPlp'
import Discount from './DiscountPlp'
import Banner from './Banner_PLP'

function ProductListPage() {

    const [productData, setProductData] = useState([]);

    let API: string = "http://192.168.1.210:4000/api/allProducts";


    const fetchApiData = async (API: string) => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            setProductData(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[]);
    return (
        <div>
            <Discount/>
            <SideBar/>
            <Banner/>
            <ProductTiles productData={productData}/>
        </div>
    )
}

export default ProductListPage