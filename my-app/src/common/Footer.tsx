import { Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/esm/Stack';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaYoutube , FaTwitter, FaInstagram, FaPinterest} from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
<div className='border border-dark bg-dark'>
        <Stack gap={3}>
            <h3  className="text-center text-light mt-5">Want Style Ideas and Treats?</h3>
            <Container>
                <Row className='text-light'>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <p className="text-uppercase mb-4"><h4>Shopper</h4></p>
            <Stack direction="horizontal" gap={3}>
                < FaFacebookF />
                <FaYoutube/>
                <FaTwitter/> 
                <FaInstagram/>
                <FaPinterest/>
             </Stack>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <p className="text-uppercase mb-4">Support</p>
            <ul className="list-unstyled mb-0 ">
              <li><a href="#!">Contact Us</a></li>
              <li><a href="#!">FAQs</a></li>
              <li><a href="#!">Size Guide</a></li>
              <li><a href="#!">Shipping and Returns</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <p className="text-uppercase mb-4">Shop</p>
            <ul className="list-unstyled mb-0 ">
              <li><a href="#!">Men's shopping</a></li>
              <li><a href="#!">Women's shopping</a></li>
              <li><a href="#!">Kid's shopping</a></li>
              <li><a href="#!">Discounts</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
          <p className="text-uppercase mb-4">Company</p>
            <ul className="list-unstyled mb-0 ">
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Our Story</a></li>
              <li><a href="#!">Terms and Conditions</a></li>
              <li><a href="#!">Privacy Policy</a></li>

              </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <p className="text-uppercase mb-4">Contact</p>
            <ul className="list-inline mb-0">
            <li>1-202-555-0105</li>
              <li>1-202-555-0106</li>
              <li>help@shopper.com</li>
            </ul>
          </Col>
                </Row>
            </Container>
            <div className='border border-secondary'></div>
            <div className="bg-dark pb-3 pt-1">
        <Container>
          <Row>
            <Col lg={12} className="text-center text-lg-start">
              <p className="text-muted mb-0">&copy; 2023 Your Company. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
            </div>
        </Stack>
</div>
    )
}

export default Footer
