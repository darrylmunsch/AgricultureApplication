import React, { Component } from 'react'

// Components
import SideNav from '../SideNav/SideNav';
import Carousel_Home from '../Carousel/Carousel';

// CSS
import './HomePage.css';

export class HomePage extends Component {
    render() {
        return (
            <div>
            <SideNav />
                <div className="carousel_marginLeft" > 
                    <Carousel_Home/>
                </div> 
            </div>
        )
    }
}

export default HomePage
