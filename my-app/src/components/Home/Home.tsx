import { useState, useEffect } from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import New from './New'
import {Route } from "react-router-dom"
import Categories from './Categories'


function Home() {
    const [productData, setProductData] = useState([]);

    let API: string = "https://ecommbackend-yvqe.onrender.com/api/allProducts";


    const fetchApiData = async (API: string) => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setProductData(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <div>
            <Categories />
            <New />
            <TopSeller productData={productData} />
            <DiscoverMore />
            <Shoppers productData={productData}/>

        </div>
    )
}

export default Home