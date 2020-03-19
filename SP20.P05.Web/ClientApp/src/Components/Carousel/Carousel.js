import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import corn from "../../Resources/cornpickin.jpg";
import strawberry from "../../Resources/strawberry3.jpg";
import potatoes from "../../Resources/taters.jpg";

import "./Carousel.css";

class Carousel_Home extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={corn} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={strawberry} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={potatoes} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousel_Home;
