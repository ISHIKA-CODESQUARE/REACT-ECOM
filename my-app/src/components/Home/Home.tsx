import React from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import New from './New'
import { Routes, Route } from "react-router-dom"


function Home() {
    return (
        <div>
        <TopSeller/>
        <DiscoverMore/>
        <Shoppers/>
        <New/>
     </div>
    )
}

export default Home