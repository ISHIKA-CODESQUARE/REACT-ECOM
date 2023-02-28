import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Topseller.css';


function TopSeller(props: any) {

  const productdata = props.productData?.data;

  console.log("ss", productdata);

  return (

    <div className="tiles row card-group mt-5">
      <h1 className='mb-5 text-center text-dark'>Top month Sellers</h1>

      <Row>

        {
          productdata?.map((product: any, index: number) => {
         

            return (
              index > 8  && index < 17 ?
              <Col lg={3}>
                <div>
                  <Link className="nav-link" to={`/productdetail/${product?._id}`}>

                    <img src={`https://ecommbackend-yvqe.onrender.com/${product?.Image}`} className="h-75 w-75" alt="..." /> </Link>
                </div>
                <h5 className="card-title">{product?.Name}</h5>
                <p className="card-text">{product?.Description}</p>
                <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>

              </Col>:""

            )
          }) }

      </Row>

    </div>

  );

}

export default TopSeller

