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





function Shoppers(props: any) {

  const productdata = props.productData?.data;
  console.log(productdata);

  return (

    <div className="tiles row card-group">
      <h1 className='mb-5 text-dark'>@Shoppers</h1>

<Row  >
      {productdata.slice(0,4)?.map((product: any) => {
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

export default Shoppers

