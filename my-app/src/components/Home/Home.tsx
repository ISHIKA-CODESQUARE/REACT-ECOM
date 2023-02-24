import React from 'react'
import TopSeller from './TopSeller'
import DiscoverMore from './DiscoverMore'
import Shoppers from './Shoppers'
import { Routes, Route } from "react-router-dom"


function Home() {
    return (
        <div>
        <Routes>
         <Route path="TopSeller" element={ <TopSeller/> } />
         <Route path="DiscoverMore" element={ <DiscoverMore/> } />
         <Route path="Shoppers" element={ <Shoppers/> } />

       </Routes>
     </div>
    )
}

export default Home