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
            <Carousel autoplay placement ="bottom" className= 'Carousel'>
                
                <img 
                    src={require("../../Resources/farmer.jpg")}
                />
                <img
                    src={require("../../Resources/strawberry.jpg")}
                />
                <img
                    src={require("../../Resources/tangerines.jpg")}
                />
                 <img 
                    src={require("../../Resources/orchard.jpg")}
                />
               
            </Carousel>
        )
    }
}

export default Carousel_Home;