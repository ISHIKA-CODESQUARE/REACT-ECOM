import {useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function TopSeller() {

  return (
    <div>
      <h1 className='mb-5 text-dark'>Top month Sellers</h1>

      <Row xs={2} md={4} className="g-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col mb-5 px-4 py-5>
            <Card className= "mt-4" >
              <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TopSeller



const productdata = props.productData?.data;
console.log(productdata);

return (
    <div className="tiles row card-group">
         <h1 className='mb-5'>Womens' Clothing</h1>

    {productdata?.map((product:any)=>{
        return (
        <div className="card col-md-6 p-3">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product?.Name}</h5>
        <p className="card-text">{product?.Description}</p>
        <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>
      </div>
    </div>
        )
    })}
  </div>

)