import React from "react";

// Components
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Carousel from "../../Components/Carousel/Carousel";

// CSS
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  return (
    <div>
      <div className={'carousel'}>
        <Carousel />
      </div>
      <body className={"div-background"}>
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
              <Card.Body className="home_cardbody">Strawberries!</Card.Body>
            </Card.Title>
          </Card>
        </CardColumns>
      </body>
    </div>
  );
}
