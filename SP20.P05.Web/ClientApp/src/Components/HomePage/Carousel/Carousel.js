import React, { Component } from 'react';
import { Carousel } from 'rsuite';



class Carousel_Home extends Component{
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <Carousel placement ="bottom" >
                <img 
                    src={require("../../../Resources/farmer.jpg")}
                />
                <img
                    src={require("../../../Resources/strawberry.jpg")}
                />
            </Carousel>
        )
    }
}

export default Carousel_Home;