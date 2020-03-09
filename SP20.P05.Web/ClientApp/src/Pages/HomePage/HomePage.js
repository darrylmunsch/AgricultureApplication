import React, {useContext, useState} from 'react';
import {UserContext} from "../../Components/Hooks/Context/UserContext";

// Components
import SideNav from '../../Components/SideNav/HomeNav';
import ToastFunc from "../../Components/Toast/ToastFunc";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Carousel_Home from "../../Components/Carousel/Carousel";

// CSS
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function HomePage() {
    const {_user} = useContext(UserContext);

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
                            <li>3/25: Fruit Tasting</li>
                            <li>7/4: Fourth of July Extravaganza</li>
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
                {_user ? (<ToastFunc className={"toast"}/>) : null}
            </div>
            </body>
        )
}

