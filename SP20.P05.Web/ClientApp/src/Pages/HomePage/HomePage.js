import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/SideNav';
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
                        </Card.Title>
                        <Card.Body className="home_cardbody">
                            <li>Field Trips</li>
                            <li>Family Get Togethers</li>
                            <li>Much More!</li>
                            
                        </Card.Body>
                    </Card>
                
                    <Card>
                        <Card.Title className="home_cardtitle">
                            News:
                        </Card.Title>
                        <Card.Body className="home_cardbody">
                            Lots of new stuff coming!
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Title className="home_cardtitle">
                            Another Column:
                        </Card.Title>
                        <Card.Body className="home_cardbody">
                            Blah Blah Blah...
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
            </body>
        )
    }
}

export default HomePage
