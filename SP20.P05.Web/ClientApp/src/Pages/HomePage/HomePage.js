import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/SideNav';
import Carousel_Home from '../../Components/Carousel/Carousel';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
// CSS
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class HomePage extends Component {
    render() {
        return (
            <body>
            <div>
            <SideNav />
            <Carousel_Home/>

            </div>
            </body>
        )
    }
}

export default HomePage
