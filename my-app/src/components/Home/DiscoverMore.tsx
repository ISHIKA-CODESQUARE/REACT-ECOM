import React from 'react'
import fashion8 from '../Home/images/fashion8.jpg'
import '../Home/CSS/discoverMore.css'


function DiscoverMore() {
    return (
        <div className='mt-5 changePosition'>
            <h2 className='mt-5 text-center fw-bold' style={{marginRight:"7.9rem"}}>Discover more </h2>
            <a href='/ProductListPage/womens'><img src={fashion8} className="discoverMoreBanner mt-5 mb-5" alt="..." /></a>
       </div>
    )
}

export default DiscoverMore