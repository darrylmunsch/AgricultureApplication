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

  ticketUrl = "api/tickets";
  farmFieldActiveUrl = "api/farm-fields/active";

  handleProcessTicket = async data => {
    let ticket = {
      id: 0,
      ticketTimeSlot: "9999-03-23T22:24:13.306Z",
      farmFieldId: this.getFarmFieldId
    };

    sessionStorage.setItem('purchaseCompleted', 'false')

    if(sessionStorage.getItem('purchaseCompleted') === 'true'){
      for( var i=0; i<1; i++){
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
      }
      sessionStorage.setItem('purchaseCompleted', 'false')
    }





  };

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
