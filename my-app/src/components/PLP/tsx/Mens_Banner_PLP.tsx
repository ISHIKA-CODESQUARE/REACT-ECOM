import React from 'react'
import mens1 from '../images/mens1.jpg'
import mens2 from '../images/mens2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import mens3 from '../images/mens3.jpg'
import '../CSS/Banner.css'

function Mens_Banner() {
    return (
        <>
            <div className='banner mt-5'>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={mens1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={mens2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src={mens3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Mens_Banner;