import {useState,useEffect} from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import New from './New'
import { Routes, Route } from "react-router-dom"
import Categories from './Categories'


function Home() {
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
        <Categories/>
        <New/>
        <TopSeller productData={productData}/>
        <DiscoverMore/>
        <Shoppers/>

     </div>
    )
}

export default Home