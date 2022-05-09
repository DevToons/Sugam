import React from "react";
import { Carousel } from 'react-bootstrap';
import pic1 from './static/pic1.jpg'
import pic2 from './static/pic2.jpg'
import pic3 from './static/pic3.jpg'
import styles from './Car.module.css';
export const Carousel1 = () => {
    return (
        <div classname={`h-full ${styles.body} mx-2`}>
            <Carousel  controls={false} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                        classname="h-full"
                    />
                    <Carousel.Caption>
                        <h3 className={`px-10 ${styles.header}`}>Sugam</h3>
                        <p className={styles.sub_heading}>Collect Ration With Ease</p>
                        <p className={styles.sub_heading2}>The dates on which the ration packages are available will be visible on the portal itself. According to those dates, the ration cardholders of your family can book a slot so that you can collect their ration packages and face no difficulty in doing so. </p>
                        <button className={styles.btn}>
                            Get Started
                        </button>
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
                        <h3 className={`px-10 ${styles.header}`}>Sugam</h3>
                        <p className={styles.sub_heading}>Collect Ration With Ease</p>
                        <p className={styles.sub_heading2}>The dates on which the ration packages are available will be visible on the portal itself. According to those dates, the ration cardholders of your family can book a slot so that you can collect their ration packages and face no difficulty in doing so. </p>
                        <button className={styles.btn}>
                            Get Started
                        </button>
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
                        <h3 className={`px-10 ${styles.header}`}>Sugam</h3>
                        <p className={styles.sub_heading}>Collect Ration With Ease</p>
                        <p className={styles.sub_heading2}>The dates on which the ration packages are available will be visible on the portal itself. According to those dates, the ration cardholders of your family can book a slot so that you can collect their ration packages and face no difficulty in doing so. </p>
                        <Link to='/userSignup'> <button className={styles.btn}>
                            Get Started
                        </button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}