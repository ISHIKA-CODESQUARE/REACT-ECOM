import React from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import New from './New'
import { Routes, Route } from "react-router-dom"
import Categories from './Categories'


function Home() {
    return (
        <div>
        <Categories/>
        <New/>
        <TopSeller/> 
        <DiscoverMore/> 
        <Shoppers/> 
        
     </div>
    )
}

export default Home