import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';





function Shoppers(props: any) {

  const productdata = props.productData?.data;
  // console.log(productdata);

  return (
<>
    <div className="tiles row card-group text-center mt-2">
      <h1 className='mb-5 text-dark'>Shoppers</h1>
    </div>
    <Container>
      <Row>
        {productdata?.map((product: any, index: number) => {
          return (

            index > 4 && index < 9 ?


              <Col lg={3}>
                <div>
                  <Link className="nav-link" to={`/productdetail/${product?._id}`}>

                    <img src={`https://ecommbackend-yvqe.onrender.com/${product?.Image}`} className="h-75 w-75 imageSet"  alt="..." /> </Link>
                </div>
                <h5 className="card-title description">{product?.Name}</h5>
                <p className="card-text description">{product?.Description}</p>
                {/* <p className="card-text description"><small className="text-muted">${product?.Price}</small></p> */}

              </Col> : ""
          )
        })}
      </Row >
      </Container>
  </>

  );

}

export default Shoppers

