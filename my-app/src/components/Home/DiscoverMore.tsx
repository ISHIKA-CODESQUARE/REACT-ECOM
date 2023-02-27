import React from 'react'
import fashion8 from '../Home/images/fashion8.jpg'
import '../Home/CSS/discoverMore.css'


function DiscoverMore() {
    return (
        <div className='mt-5'>
            <h4 className='mt-5'>Discover more </h4>
            <img src={fashion8} className="discoverMoreBanner mt-5 mb-5" alt="..." />
       </div>
    )
}

export default DiscoverMore