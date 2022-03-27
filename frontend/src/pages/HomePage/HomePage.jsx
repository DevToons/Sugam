import React, { Fragment } from "react";
import './HomePage.css';
import { About } from "./UI/About";
import { Carousel1 } from "./UI/Carousel";

const HomePage = () => {
    return (
        <div className="headbody">
            {/* <h1>Home</h1> */}
            <Carousel1 />
            <About />
        </div>
    );
}

export default HomePage;
