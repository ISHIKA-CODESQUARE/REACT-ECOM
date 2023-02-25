import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Shoppers() {
  return (
    <div><h1 className='mb-5 mt-b text-dark'>@Shoppers</h1>

      <Row xs={1} md={5} className="g-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col mb-5 px-4 py-5>
            <Card>
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

export default Shoppers