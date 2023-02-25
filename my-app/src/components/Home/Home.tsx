import React from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import { Routes, Route } from "react-router-dom"
import Categories from './Categories'


function Home() {
    return (
        <div>
        <Categories/>
        <TopSeller/> 
        <DiscoverMore/> 
        <Shoppers/> 
     </div>
    )
}

export default Home