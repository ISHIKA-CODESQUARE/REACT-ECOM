import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Topseller.css';
import { Container } from "react-bootstrap";


function TopSeller(props: any) {

  const productdata = props.productData?.data;


  return (

    <>
    <div className="tiles row card-group mt-5">
      <h1 className='mb-2 text-dark text-center'>New Arrivals</h1>
    </div>
      <Container className='ml-5'>
      <Row >
        {
          productdata?.map((product: any, index: number) => {
            return (
              index > 8  && index < 17 ?
              <Col className = "topSeller" lg={3}>
                <div className='mt-5 mb-5 w-75'>
                <div>
                  <Link className="nav-link" to={`/productdetail/${product?._id}`}>

                    <img width={200} src={`https://ecommbackend-yvqe.onrender.com/${product?.Image}`} className="topImage" alt="..." /> </Link>
                </div>
                <h5 className="card-title description">{product?.Name}</h5>
                <p className="card-text description">{product?.Description}</p>
                {/* <p className="card-text text-dark fw-bolder description">{product?.Price}</p> */}
                </div>
              </Col>:""
            )
          }) }
      </Row>
      </Container>
      </>

  );

}

export default TopSeller

