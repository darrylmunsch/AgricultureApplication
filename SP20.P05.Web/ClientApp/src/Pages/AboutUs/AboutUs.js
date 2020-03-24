import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

// Style sheets
import "bootstrap/dist/css/bootstrap.min.css";

import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="background-img" />
        <div className="d-flex flex-row justify-content-end mt-4">
          <Card>
            <Card.Body>
              <Card.Title>From our home to yours..</Card.Title>
              <img
                src={require("../../Resources/farmer.jpg")}
                className="img-fluid"
                alt=""
              />
              <Card.Text>
                Here at Envoc Agriculture Co. We take pride in our product!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Jumbotron>
                <div className="jumbotron">
                  <h1 className="display-4">
                    Envoc Agri. CO. From our home to yours!
                  </h1>
                  <p className="lead">
                    Find any fresh fruit your heart desires, and know it comes
                    from a place of care!
                  </p>
                  <hr className="my-4" />
                  <p>
                    Interested in hearing more? Take a look at some of our
                    testimonials...
                  </p>
                </div>
              </Jumbotron>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default AboutUs;
