import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'


function TopSeller(props: any) {

  const productdata = props.productData?.data;
  console.log(productdata);

  return (

    <div className="tiles row card-group">
      <h1 className='mb-5 text-dark'>Top month Sellers</h1>

<Row  > 

      {productdata.slice(4,12)?.map((product: any) => {
        return (
          <Col lg={3}>
          <img src={`http://192.168.1.210:4000/${product?.Image}`} className="h-75 w-75" alt="..."/>
          <h5 className="card-title">{product?.Name}</h5>
          <p className="card-text">{product?.Description}</p>
          <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>

          </Col>

        )
      })}

      </Row>

    </div>

  );

}

export default TopSeller

