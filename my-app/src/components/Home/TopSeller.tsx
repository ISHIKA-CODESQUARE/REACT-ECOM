import {useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function TopSeller() {
  const [productData, setProductData] = useState([]);

    let API: string = "http://192.168.1.210:4000/api/allProducts";


    const fetchApiData = async (API: string) => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            setProductData(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[]);

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