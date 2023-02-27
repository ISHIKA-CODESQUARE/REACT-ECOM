import Stack from 'react-bootstrap/esm/Stack';
import { Container, Row, Col } from 'react-bootstrap';
import { BsTruck, BsLock, BsTag } from "react-icons/bs";
import {  TfiLoop} from "react-icons/tfi";

import './CSS/Categories.css'


function Categories() {
    return(
        <>
    <Row className='cat '>
<Col lg={4}>
<div className='women'>
   <h1> Women</h1>
   <a className='btn btn-light ' href='#'>Shop Now</a>
</div>
</Col>

<Col lg={4}>
<div className='men'>
   <h1> Men</h1>
   <a className='btn btn-light' href='#'>Shop Now</a>

</div>
</Col>

<Col lg={4}>
<div className='kids'>
   <h1> Kids</h1>
   <a className='btn btn-light' href='#'>Shop Now</a>


</div>
</Col>
    </Row>
    <Row className='mt-5 '>
        <Col lg={2}></Col>
        <Col lg={2}  className='info text-center'>
            <Stack direction='horizontal' gap={3}>
                <BsTruck />
                 <h6>FREE SHIPPING</h6>
            </Stack>
            <p>From all orders over $100</p>
        </Col>
        <Col lg={2} className='info text-center'>
            <Stack direction='horizontal' gap={3}>
                <TfiLoop />
                <h6>FREE RETURNS</h6>
            </Stack>
            <p>Return money within 30 days</p>
        </Col>
        <Col lg={2} className='info text-center'>
            <Stack direction='horizontal' gap={3}>
                < BsLock />
                <h6>SECURE SHOPPING</h6>
            </Stack>
            <p>You're in safe hands</p>
        </Col>
        <Col lg={2} className='info text-center'>
            <Stack direction='horizontal' gap={3}>
                <BsTag />
                <h6>OVER 10,000 STYLES</h6>
            </Stack>
            <p>We have everything you need</p>
        </Col>
        <Col lg={2} className='info'></Col>


    </Row>
    <div className='border border-black-50 mt-4'></div>
    </>
    );
};

export default Categories;