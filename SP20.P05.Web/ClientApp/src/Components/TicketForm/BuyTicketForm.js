import React, { Component } from "react";
import { Button, Col, Form, Jumbotron } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


//// CSS
import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PayPal from "../Paypal/PayPal";



class BuyTicketForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron className={"jumbo_clr"}>
          <h1>Purchase Tickets</h1>
            <PayPal price={sessionStorage.getItem("ticketTotal")} description={'Ticket Purchase from website'} />
          <div className={"divider div-transparent"} />
          <div>
            <Button onClick={this.props.changeForm}>Back to Tickets</Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default BuyTicketForm;
