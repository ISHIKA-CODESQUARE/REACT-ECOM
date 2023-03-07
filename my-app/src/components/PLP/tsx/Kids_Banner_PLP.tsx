import React from 'react'
import kids1 from '../images/kids1.jpg'
import kids2 from '../images/kids2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import kids3 from '../images/kids3.jpg'
import '../CSS/Banner.css'

function Kids_Banner() {
    return (
        <>
            <div className='banner mt-5'>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={kids1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={kids2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={kids3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Kids_Banner;