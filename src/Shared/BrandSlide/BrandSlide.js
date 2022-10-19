import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandSlide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/n3MMfLQ/magnet-people-ujet-850.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mGwpZG6/Top-25-CX-software-cover.webp"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandSlide;