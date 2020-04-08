import React, { Component } from "react";
import { Button, Col, Form, Jumbotron } from "react-bootstrap";
import Stripe from "./Stripe";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// CSS
import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_Rtv1biV3asCHTEeJ0UxXpD6x00P2Q6h9LA");

class BuyTicketForm extends Component {
  constructor(props) {
    super(props);
  }

  ticketUrl = "api/tickets";
  farmFieldActiveUrl = "api/farm-fields/active";

  handleProcessTicket = async data => {
    let ticket = {
      id: 0,
      ticketTimeSlot: "9999-03-23T22:24:13.306Z",
      farmFieldId: this.getFarmFieldId
    };

    await axios
      .post(this.ticketUrl, ticket, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron className={"jumbo_clr"}>
          <h1>Purchase Tickets</h1>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
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
