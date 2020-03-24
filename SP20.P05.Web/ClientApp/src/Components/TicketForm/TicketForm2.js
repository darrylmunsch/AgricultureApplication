import React, { Component } from "react";
import axios from "axios";

// React-Bootstrap
import { Col, Form, Jumbotron } from "react-bootstrap";

// CSS
import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: ["Blueberry", "Blackberry", "Strawberry"],
      selectedField: "",
      selectedBucket: "",
      selectedBucketSize: "",
      selectedBucketPrice: "",
      bucketPriceSM: "",
      bucketPriceMD: "",
      bucketPriceLG: "",
      numTickets: ""
    };
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
          console.log(response.data.id);
        }
      })
      .catch(error => console.log(error.response));
  };
  handleFieldChange = e => {
    let val = e.target.value;
    if (val === "Choose Farm Field...") {
      this.setState({ selectedField: "" });
      sessionStorage.setItem("selectedField", "");
    } else {
      this.setState({ selectedField: val });
      sessionStorage.setItem("selectedField", val);
    }
    this.setBucketPriceSM(val);
    this.setBucketPriceMD(val);
    this.setBucketPriceLG(val);
  };
  setBucketPriceSM = selectedField => {
    console.log("setBucketPriceSM hit");
    switch (selectedField) {
      case "Blueberry":
        sessionStorage.setItem("bucketPriceSM", "$11");
        return;
      case "Strawberry":
        sessionStorage.setItem("bucketPriceSM", "$10");
        return;
      case "Blackberry":
        sessionStorage.setItem("bucketPriceSM", "$13");
        return;
      default:
        sessionStorage.setItem("bucketPriceSM", "");
        return;
    }
  };
  setBucketPriceMD = selectedField => {
    console.log("setBucketPriceMD hit");
    switch (selectedField) {
      case "Blueberry":
        sessionStorage.setItem("bucketPriceMD", "$16");
        return;
      case "Strawberry":
        sessionStorage.setItem("bucketPriceMD", "$15");
        return;
      case "Blackberry":
        sessionStorage.setItem("bucketPriceMD", "$17");
        return;
      default:
        sessionStorage.setItem("bucketPriceMD", "");
        return;
    }
  };
  setBucketPriceLG = selectedField => {
    console.log("setBucketPriceLG hit");
    switch (selectedField) {
      case "Blueberry":
        sessionStorage.setItem("bucketPriceLG", "$21");
        return;
      case "Strawberry":
        sessionStorage.setItem("bucketPriceLG", "$20");
        return;
      case "Blackberry":
        sessionStorage.setItem("bucketPriceLG", "$24");
        return;
      default:
        sessionStorage.setItem("bucketPriceLG", "");
        return;
    }
  };
  handleBucketChange = e => {
    console.log("Bucket Changed...");
    // Set val to form value
    const val = e.target.value;
    if (val === "Choose Bucket Size...") {
      sessionStorage.setItem("selectedBucket", "");
    } else {
      sessionStorage.setItem("selectedBucket", val);
      sessionStorage.setItem("selectedBucketSize", val);
    }
    this.setSelectedBucketPrice(val);
  };
  handleNumberChange = e => {
    console.log("Number of Tickets Changed...");
    // Set val to form value
    const val = e.target.value;
    sessionStorage.setItem("numTickets", val);
    this.setState({
      numTickets: val
    });
  };
  getTicketTotal = () => {
    console.log("Getting Ticket Total..");
    let numTick = sessionStorage.getItem("numTickets");
    let SBP = sessionStorage.getItem("selectedBucketPrice");
    let ans = numTick * SBP;
    sessionStorage.setItem("ticketTotal", ans.toString());

    this.setState({
      ticketTotal: this.state.numTickets * this.state.selectedBucketPrice
    });

    return this.state.numTickets * this.state.selectedBucketPrice;
  };
  setSelectedBucketPrice = size => {
    console.log("Setting Selected Bucket Price...");
    switch (size) {
      case "Small":
        sessionStorage.setItem(
          "selectedBucketPrice",
          sessionStorage.getItem("bucketPriceSM").substring(1)
        );
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceSM.substring(1)
        });
      case "Medium":
        sessionStorage.setItem(
          "selectedBucketPrice",
          sessionStorage.getItem("bucketPriceMD").substring(1)
        );
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceMD.substring(1)
        });
      case "Large":
        sessionStorage.setItem(
          "selectedBucketPrice",
          sessionStorage.getItem("bucketPriceLG").substring(1)
        );
        return this.setState({
          selectedBucketPrice: this.state.bucketPriceLG.substring(1)
        });
      default:
        return console.log("Error setting selected bucket price");
    }
  };

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
                value={sessionStorage.getItem("selectedField")}
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
                {sessionStorage.getItem("selectedField") ? (
                  <div>
                    <strong>
                      Bucket Prices for{" "}
                      {sessionStorage.getItem("selectedField")} Field:
                    </strong>
                    <div>
                      Small Bucket: {sessionStorage.getItem("bucketPriceSM")}
                    </div>
                    <div>
                      Medium Bucket: {sessionStorage.getItem("bucketPriceMD")}
                    </div>
                    <div className={"padding"}>
                      Large Bucket: {sessionStorage.getItem("bucketPriceLG")}
                    </div>
                  </div>
                ) : null}
              </div>
              <Form.Control
                as={"select"}
                value={sessionStorage.getItem("selectedBucket")}
                onChange={this.handleBucketChange}
              >
                <option>Choose Bucket Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Control>
            </Form.Group>
            {sessionStorage.getItem("selectedField") &&
            sessionStorage.getItem("selectedBucket") ? (
              <div>
                {sessionStorage.getItem("selectedField")} Field Ticket with{" "}
                {sessionStorage.getItem("selectedBucket")}, $
                {sessionStorage.getItem("selectedBucketPrice")} bucket
              </div>
            ) : null}
            <div className={"divider div-transparent"} />
            <Form.Group>
              <Form.Label>How Many Tickets?</Form.Label>
              <Form.Control
                value={sessionStorage.getItem("numTickets")}
                onChange={this.handleNumberChange}
              />
            </Form.Group>
            <div>Total: ${sessionStorage.getItem("ticketTotal")}</div>
            <div>
              <button onClick={this.props.changeForm}>Buy Tickets</button>
            </div>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default TicketForm;
