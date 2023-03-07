// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Shoppers() {
//   return (
//     <div><h1 className='mb-5 mt-b '>@Shoppers</h1>

//       <Row xs={1} md={6} className="g-2">
//         {Array.from({ length: 6 }).map((_, idx) => (
//           <Col mb-5 px-4 py-5>
//             <Card>
//               <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Shoppers

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
      <h1 className='mb-5 text-dark'>@Shoppers</h1>
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

