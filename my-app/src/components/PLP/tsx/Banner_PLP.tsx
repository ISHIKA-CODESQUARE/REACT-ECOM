import React from 'react'
import discount60 from '../images/discount60.jpg'
import discount30 from '../images/discount30.jpg'
import Carousel from 'react-bootstrap/Carousel'
import discount50 from '../images/discount50.jpg'
import '../CSS/Banner.css'

function Banner() {
    return (
        <>
            <div className='banner mt-5'>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={discount30}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={discount50}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={discount60}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Banner