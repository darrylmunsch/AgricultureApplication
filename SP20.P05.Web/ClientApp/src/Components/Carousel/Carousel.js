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
                    src={require("../../Resources/farmer.jpg")}
                    alt={""}
                />
                <img
                    src={require("../../Resources/strawberry.jpg")}
                    alt={""}
                />
                <img
                    src={require("../../Resources/tangerines.jpg")}
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