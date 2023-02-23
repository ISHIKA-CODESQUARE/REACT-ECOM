import React from 'react'
import '../CSS/SiteBarStyle.css';


function SiteBar() {
    return (
            <div className='sidebar'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-3'>
                        <form className='mb-10 mb-md-0'>
                            <ul className='list-group nav nav-vertical'>
                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Categories</a>
                                </li>

                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Season</a>
                                </li>

                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Size</a>
                                </li>

                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Color</a>
                                </li>

                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Brand</a>
                                </li>

                                <li className='list-group-item nav-item'>
                                    <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Price</a>
                                </li>

                            </ul>

                        </form>

                    </div>

                </div>

            </div>
    )
}

export default SiteBar