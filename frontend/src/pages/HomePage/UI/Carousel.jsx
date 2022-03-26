import React from "react";
import { Carousel } from 'react-bootstrap';
import pic1 from './static/pic1.jpg'
import pic2 from './static/pic2.jpg'
import pic3 from './static/pic3.jpg'
import styles from './Car.module.css';
export const Carousel1 = () => {
    return (
        <div classname={`h-full ${styles.body} mx-2`}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                        classname="h-full"
                    />
                    <Carousel.Caption>
                        <h3 className="px-10">First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                        classname="h-full"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                        classname={styles.img}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}