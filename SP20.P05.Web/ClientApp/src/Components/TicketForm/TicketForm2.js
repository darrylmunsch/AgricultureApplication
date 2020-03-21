import React, { Component } from "react";

// React-Bootstrap
import { Form, Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

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
      bucketPriceSM: "unset",
      bucketPriceMD: "unset",
      bucketPriceLG: "unset",
      ticketTotal: ""
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleBucketChange = this.handleBucketChange.bind(this);
    this.setBucketPriceMD = this.setBucketPriceMD.bind(this);
    this.setBucketPriceLG = this.setBucketPriceLG.bind(this);
  }
  handleFieldChange(e) {
    // Set val to form value
    const val = e.target.value;
    // Set state unless unchanged
    if (val === "Choose Farm Field...") {
      this.setState({ selectedField: "" });
    } else this.setState({ selectedField: val });
    this.setBucketPriceSM(val);
    this.setBucketPriceMD(val);
    this.setBucketPriceLG(val);
  }
  handleBucketChange(e) {
    // Set val to form value
    const val = e.target.value;
    if (val === "Choose Bucket Size...") {
      this.setState({ selectedBucket: "" });
    } else this.setState({ selectedBucket: val });
  }
  setBucketPriceSM(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceSM: "$11" });
      case "Strawberry":
        return this.setState({ bucketPriceSM: "$10" });
      case "Blackberry":
        return this.setState({ bucketPriceSM: "$13" });
    }
  }
  setBucketPriceMD(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceSM: "$16" });
      case "Strawberry":
        return this.setState({ bucketPriceSM: "$15" });
      case "Blackberry":
        return this.setState({ bucketPriceSM: "$17" });
    }
  }
  setBucketPriceLG(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return this.setState({ bucketPriceSM: "$21" });
      case "Strawberry":
        return this.setState({ bucketPriceSM: "$20" });
      case "Blackberry":
        return this.setState({ bucketPriceSM: "$24" });
    }
  }

  render() {
    return (
      <Jumbotron className={"jumbo_clr"}>
        <h1>bUy tickEtS nOW</h1>
        <Form>
          <Form.Group as={Col} controlId={"FarmField"}>
            <Form.Label>Farm Field</Form.Label>
            <Form.Control
              as={"select"}
              value={this.state.selectedField}
              onChange={this.handleFieldChange()}
            >
              <option>Choose Farm Field...</option>
              {this.state.fields.map(field => (
                <option>{field}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <div className={"divider div-transparent"} />
          <Form.Group as={Col} controlId={"Buckets"}>
            <Form.Label>Bucket</Form.Label>
            <Form.Control
              as={"select"}
              value={this.state.selectedBucket}
              onChange={this.handleBucketChange}
            >
              <option>Choose Bucket Size</option>
              <option>Small {this.state.bucketPriceSM}</option>
              <option>Medium {this.state.bucketPriceMD}</option>
              <option>Large {this.state.bucketPriceLG}</option>
            </Form.Control>
          </Form.Group>
          {this.state.selectedField && this.state.selectedBucket ? (
            <div>
              {this.state.selectedField} Field Ticket with{" "}
              {this.state.selectedBucket}, {this.state.selectedBucket} bucket
            </div>
          ) : null}
          <div className={"divider div-transparent"} />
          <Form.Group>
            <Form.Label>How Many Tickets?</Form.Label>
            <Form.Control defaultValue={1} />
          </Form.Group>
          <div>
            <div>Total:</div>
            <div>{this.state.ticketTotal}</div>
          </div>
        </Form>
      </Jumbotron>
    );
  }
}

export default TicketForm;
