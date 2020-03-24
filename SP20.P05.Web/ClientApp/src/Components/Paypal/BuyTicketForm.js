import React, { Component } from "react";
import { Button, Col, Form, Jumbotron } from "react-bootstrap";
import PayPal from "./PayPal";

// CSS
import "../TicketForm/TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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
          <PayPal price={this.props.ticketTotal} />
          <div className={"divider div-transparent"} />
          <div>
            <button onClick={this.props.changeForm}>Back to Tickets</button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default BuyTicketForm;
