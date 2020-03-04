import React, { Component } from 'react';
import { Carousel } from 'rsuite';

import './Carousel.css';

class Carousel_Home extends Component{
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return(
            <Carousel autoplay placement ="bottom" className= 'Carousel' >
                
                <img 
                    src={require("../../Resources/blackberrydeath.jpg")}
                    alt={""}
                />
                <img
                    src={require("../../Resources/taters.jpg")}
                    alt={""}
                />
                <img
                    src={require("../../Resources/tomatoes.jpeg")}
                    alt={""}
                />
                 <img 
                    src={require("../../Resources/orchard.jpg")}
                    alt={""}
                />
            </Carousel>
        )
    }
}

export default Carousel_Home;