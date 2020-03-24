import React, { Component } from "react";
import axios from "axios";

// React-Bootstrap
import { Button, Col, Form, Jumbotron } from "react-bootstrap";

// CSS
import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PayPal from "../Paypal/PayPal";

class TicketForm extends Component {
  ticketUrl = "api/tickets";
  farmFieldActiveUrl = "api/farm-fields/active";

  constructor(props) {
    super(props);
    this.state = {
      fields: ["Blueberry", "Blackberry", "Strawberry"],
      selectedField: "",
      selectedBucket: "",
      selectedBucketSize: "",
      selectedBucketPrice: "",
      bucketPriceSM: "unset",
      bucketPriceMD: "unset",
      bucketPriceLG: "unset",
      numTickets: "",
      ticketTotal: "0",
      data: []
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleBucketChange = this.handleBucketChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.setBucketPriceSM = this.setBucketPriceSM.bind(this);
    this.setBucketPriceMD = this.setBucketPriceMD.bind(this);
    this.setBucketPriceLG = this.setBucketPriceLG.bind(this);
    this.setSelectedBucketPrice = this.setSelectedBucketPrice.bind(this);
    this.getTicketTotal = this.getTicketTotal.bind(this);
    this.handleProcessTicket = this.handleProcessTicket.bind(this);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.numTickets !== prevState.numTickets) {
      this.getTicketTotal();
    }
  }

  getFarmFieldId = async data => {
    await axios
      .get(this.farmFieldActiveUrl)
      .then(response => {
        if (response.data.name === this.state.selectedField) {
          console.log(data.id);
        }
      })
      .catch(error => console.log(error.response));
  };

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

  handleFieldChange(e) {
    console.log("handleFieldChange hit");
    // Set val to form value
    const val = e.target.value;
    // Set state unless unchanged
    if (val === "Choose Farm Field...") {
      this.setState({ selectedField: "" });
    } else {
      this.setState({ selectedField: val });
    }
    this.setBucketPriceSM(val);
    this.setBucketPriceMD(val);
    this.setBucketPriceLG(val);
  }
  handleBucketChange(e) {
    console.log("handleBucketChange hit");
    // Set val to form value
    const val = e.target.value;
    if (val === "Choose Bucket Size...") {
      this.setState({ selectedBucket: "" });
    } else this.setState({ selectedBucket: val, selectedBucketSize: val });
    this.setSelectedBucketPrice(val);
  }
  handleNumberChange(e) {
    console.log("handleNumberChange hit");
    // Set val to form value
    const val = e.target.value;
    this.setState({ numTickets: val });
    this.getTicketTotal();
  }
  getTicketTotal() {
    console.log("getTicketTotal hit");
    console.log("numTickets: " + this.state.numTickets);
    console.log("selectedBucketPrice: " + this.state.selectedBucketPrice);
    this.setState({
      ticketTotal: this.state.numTickets * this.state.selectedBucketPrice
    });
    return this.state.numTickets * this.state.selectedBucketPrice;
  }
  setSelectedBucketPrice(size) {
    console.log("setSelectedBucketPrice hit");
    switch (size) {
      case "Small":
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceSM.substring(1)
        });
      case "Medium":
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceMD.substring(1)
        });
      case "Large":
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceLG.substring(1)
        });
      default:
        return console.log("Error setting selected bucket price");
    }
  }
  setBucketPriceSM(selectedField) {
    console.log("setBucketPriceSM hit");
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceSM: "$11" });
      case "Strawberry":
        return this.setState({ bucketPriceSM: "$10" });
      case "Blackberry":
        return this.setState({ bucketPriceSM: "$13" });
      default:
        return this.setState({ bucketPriceSM: "" });
    }
  }
  setBucketPriceMD(selectedField) {
    console.log("setBucketPriceMD hit");
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceMD: "$16" });
      case "Strawberry":
        return this.setState({ bucketPriceMD: "$15" });
      case "Blackberry":
        return this.setState({ bucketPriceMD: "$17" });
      default:
        return this.setState({ bucketPriceMD: "" });
    }
  }
  setBucketPriceLG(selectedField) {
    console.log("setBucketPriceLG hit");
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceLG: "$21" });
      case "Strawberry":
        return this.setState({ bucketPriceLG: "$20" });
      case "Blackberry":
        return this.setState({ bucketPriceLG: "$24" });
      default:
        return this.setState({ bucketPriceLG: "" });
    }
  }

  render() {
    return (
      <div>
        <Jumbotron className={"jumbo_clr"}>
          <h1>Purchase Tickets</h1>
          <Form>
            <Form.Group as={Col} controlId={"FarmField"}>
              <Form.Label>Farm Field</Form.Label>
              <Form.Control
                as={"select"}
                value={this.state.selectedField}
                onChange={this.handleFieldChange}
              >
                <option>Choose Farm Field...</option>
                {this.state.fields.map(field => (
                  <option key={field}>{field}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className={"divider div-transparent"} />
            <Form.Group as={Col} controlId={"Buckets"}>
              <Form.Label>Bucket</Form.Label>
              <div>
                {this.state.selectedField ? (
                  <div>
                    <strong>
                      Bucket Prices for {this.state.selectedField} Field:
                    </strong>
                    <div>Small Bucket: {this.state.bucketPriceSM}</div>
                    <div>Medium Bucket: {this.state.bucketPriceMD}</div>
                    <div className={"padding"}>
                      Large Bucket: {this.state.bucketPriceLG}
                    </div>
                  </div>
                ) : null}
              </div>
              <Form.Control
                as={"select"}
                value={this.state.selectedBucket}
                onChange={this.handleBucketChange}
              >
                <option>Choose Bucket Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Control>
            </Form.Group>
            {this.state.selectedField && this.state.selectedBucket ? (
              <div>
                {this.state.selectedField} Field Ticket with{" "}
                {this.state.selectedBucket}, ${this.state.selectedBucketPrice}{" "}
                bucket
              </div>
            ) : null}
            <div className={"divider div-transparent"} />
            <Form.Group>
              <Form.Label>How Many Tickets?</Form.Label>
              <Form.Control onChange={this.handleNumberChange} />
            </Form.Group>
            <div>
              <PayPal price={this.state.ticketTotal} />
            </div>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default TicketForm;
