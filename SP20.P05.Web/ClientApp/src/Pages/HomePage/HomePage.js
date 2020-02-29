import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/SideNav';
import CarouselHome from '../../Components/Carousel/Carousel';

// CSS
import './HomePage.css';

export class HomePage extends Component {
    render() {
        return (
            <div>
            <SideNav />
                <div className="carousel_marginLeft" > 
                    <CarouselHome/>
                </div> 
            </div>
        )
    }
}

export default HomePage
