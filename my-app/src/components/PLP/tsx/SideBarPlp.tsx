import React, {useState} from 'react'
import '../CSS/SiteBarStyle.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";



function SiteBar(props :any) {


function bySizes(size : String) {
  
    const tempArr = props?.productDataPermanent?.filter(value => value?.Size == size);
    console.log(tempArr,"temp arr")
    props?.setProductData(tempArr)
  }

  function byPrice1000() {

    const tempPriceArr = props?.productDataPermanent?.filter(value => value?.Price <= 1000);
    props?.setProductData(tempPriceArr)

  }

  function byPriceGreaterThan1000() {

    const tempPriceArr2000 = props?.productDataPermanent?.filter(value => value?.Price >= 1000);
    props?.setProductData(tempPriceArr2000)
  }

    return (
        <div className='sidebar'>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <form className='mb-10 mb-md-0'>
                        <ul className='list-group nav nav-vertical'>

                            <li className='list-group-item nav-item'>
                                {/* <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Categories</a> */}
                                <NavDropdown title="Catalog" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/ProductListPage/mens">
                                        Mens
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ProductListPage/womens">
                                        Womens
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ProductListPage/kids">
                                        Kids
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>

                            <li className='list-group-item nav-item'>
                                {/* <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Size</a> */}
                                <NavDropdown title="Size" id="basic-nav-dropdown">
                                    {props?.sizeArr?.map((item)=>{
                                        return (
                                            <NavDropdown.Item >
                                            <button className='btn' onClick={(e)=>bySizes(item)}>{item}</button>
                                          </NavDropdown.Item>
                                        )
                                    })}
                                </NavDropdown>
                            </li>

                            <li className='list-group-item nav-item'>
                            <NavDropdown title="Price" id="basic-nav-dropdown">

                                    <NavDropdown.Item>
                                    <button className='btn' onClick={(e)=>byPrice1000()}>Less than 1000</button>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <button className='btn' onClick={(e)=>byPriceGreaterThan1000()}>Greater than 1000</button>

                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>

                            <li className='list-group-item nav-item'>
                                <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Color</a>
                            </li>

                            <li className='list-group-item nav-item'>
                                <a className='nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed' href='<Home/>'>Brand</a>
                            </li>

                        </ul>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default SiteBar