import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/HomeNav';
import Carousel_Home from '../../Components/Carousel/Carousel';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck'
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
                <CardColumns className="home_carddecks">
                   <Card>
                        <Card.Title className="home_cardtitle">
                            Upcoming Events:
                        
                        <Card.Body className="home_cardbody">
                            <li>3/25: Fruit Tasting</li>
                            <li>7/4: Fourth of July Extravaganza</li>
                            <li>Much More!</li>
                        </Card.Body>
                        </Card.Title>
                        </Card>
                        
                
                        <Card>
                        <Card.Title className="home_cardtitle">
                            News:
                        <Card.Body className="home_cardbody">
                            Lots of new stuff coming!
                        </Card.Body>
                        </Card.Title>
                        </Card>
                        

                        <Card>
                        <Card.Title className="home_cardtitle">
                            Seasonal Fruit Feature:
                        <Card.Body className="home_cardbody">
                            Strawberries!
                        </Card.Body>
                        </Card.Title>
                        </Card> 
                </CardColumns>
            </div>
            </body>
        )
    }
}

export default HomePage
