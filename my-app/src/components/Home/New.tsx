import React from 'react'
import fashion8 from '../Home/images/fashion8.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import {BsArrowRight} from 'react-icons/bs';
import Stack from 'react-bootstrap/esm/Stack';
import '../Home/CSS/new.css'



function New() {
    return (
        <div><h4 className='mb-2 mt-5 '>NEW COLLECTION</h4>
            <h1 className='mb-1 mt-1 text-dark'>Best Picks 2023</h1>
            <p className='mb-5 mt-2 '>Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.</p>
            {/* <div className="row banner1">
                <div className="col">
                    <img src="https://img.freepik.com/free-psd/horizontal-banner-template-online-shopping-with-sale_23-2148561372.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="col banner2">
                    <img src="https://img.freepik.com/free-psd/summer-collection-banner-template_23-2148520730.jpg" className="card-img-top " alt="..." />
                </div>

                <div className="col banner2">
                    <img src="https://img.freepik.com/free-psd/fashion-store-banner-template_23-2148675200.jpg" className="card-img-top " alt="..." />
                </div>
            </div>

            <div className="row big mt-5">
                <div className="col ">
                <img src="https://marketplace.canva.com/EAE6ZV99O0U/1/0/1600w/canva-brown-and-white-modern-new-arrival-ads-%28banner-%28landscape%29%29-xPOZhITeX20.jpg" className="card-img-top " alt="..." />

                </div>
                <div className="col mb-5">
                <img src="https://marketplace.canva.com/EAFI7yb3ayU/1/0/1600w/canva-brown-cream-minimalist-fashion-big-sale-banner-landscape-4KvqUQJqlOU.jpg" className="card-img-top " alt="..." />

                </div>
            </div> */}
            <Container >
                <Row className='border border-0 top text-black'>
                    <Col lg={4} className='banner1 border p-3 d-flex justify-content-center flex-column align-items-start'>
                        <h4>Bags Collection</h4>
                        <Stack direction='horizontal' className='d-flex justify-content-start' gap={2}>
                            <a href='/ProductListPage/womens' className='text-dark'> Shop Now </a>
                            <BsArrowRight/>
                        </Stack>
                    </Col>
                    <Col lg={7} className='banner2 d-flex align-items-end justify-content-center p-5 flex-column'>
                        <h4>Men's Shirts</h4>
                        <Stack direction='horizontal' className='d-flex justify-content-end ' gap={2}>
                            <a href='/ProductListPage/mens' className='text-dark'> Shop Now </a>
                            <BsArrowRight/>
                        </Stack>
                    </Col>
                </Row>
                <Row className=' border border-0 bottom '>
                    <Col lg={7} className='banner3  p-5 d-flex justify-content-center align-items-end  flex-column text-light'>
                        <h4>Women's Dress</h4>
                        <Stack direction='horizontal' className='d-flex justify-content-end' gap={2}>
                            <a href='/ProductListPage/womens' className='text-light'> Shop Now </a>
                            <BsArrowRight/>
                        </Stack>
                    </Col>
                    <Col lg={4} className='banner4 d-flex justify-content-start p-5 align-items-center flex-column text-light '>
                        <h4>Sweatshirts</h4>
                        <Stack direction='horizontal' className='d-flex justify-content-center text-light' gap={2}>
                            <a href='/ProductListPage/womens'> Shop Now </a>
                            <BsArrowRight/>
                        </Stack>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default New