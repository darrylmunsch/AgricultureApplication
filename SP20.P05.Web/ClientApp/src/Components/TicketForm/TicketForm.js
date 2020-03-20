import React from "react";
import { Form, Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TicketForm() {
  const [selectedField, setSelectedField] = React.useState("");
  const [selectedBucket, setSelectedBucket] = React.useState("");
  const [fields, setFields] = React.useState([
    "Blueberry",
    "Blackberry",
    "Strawberry"
  ]);

  function handleFieldChange(e) {
    if (e.target.value === "Choose Farm Field...") {
      setSelectedField("");
    } else {
      setSelectedField(e.target.value);
    }
  }
  function handleBucketChange(e) {
    setSelectedBucket(e.target.value);
  }
  function getPrice() {}
  function setBucketPriceSm(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return "$11";
      case "Strawberry":
        return "$10";
      case "Blackberry":
        return "$13";
      case "Choose Bucket Size...":
        return "";
    }
  }
  function setBucketPriceMd(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return "$16";
      case "Strawberry":
        return "$15";
      case "Blackberry":
        return "$17";
      case "Choose Bucket Size...":
        return "";
    }
  }
  function setBucketPriceLg(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return "$21";
      case "Strawberry":
        return "$20";
      case "Blackberry":
        return "$24";
      case "Choose Bucket Size...":
        return "";
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Jumbotron className={"jumbo_clr"}>
      <h1>bUy tickEtS nOW</h1>
      <Form>
        <Form.Group as={Col} controlId={"FarmField"}>
          <Form.Label>Farm Field</Form.Label>
          <Form.Control
            as={"select"}
            value={selectedField}
            onChange={handleFieldChange}
          >
            <option>Choose Farm Field...</option>
            {fields.map(field => (
              <option>{field}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <div className={"divider div-transparent"} />
        <Form.Group as={Col} controlId={"Buckets"}>
          <Form.Label>Bucket</Form.Label>
          <Form.Control
            as={"select"}
            value={selectedBucket}
            onChange={handleBucketChange}
          >
            <option>Choose Bucket Size</option>
            <option>Small {setBucketPriceSm(selectedField)}</option>
            <option>Medium {setBucketPriceMd(selectedField)}</option>
            <option>Large {setBucketPriceLg(selectedField)}</option>
          </Form.Control>
        </Form.Group>
        {selectedField && selectedBucket ? (
          <div>
            {selectedField} Field Ticket with {selectedBucket} bucket
          </div>
        ) : null}
        <div className={"divider div-transparent"} />
        <Form.Group>
          <Form.Label>How Many Tickets?</Form.Label>
          <Form.Control defaultValue={1} onChange={getPrice} />
        </Form.Group>
        <div>
          <div>Total:</div>
          <div>{getPrice}</div>
        </div>
      </Form>
    </Jumbotron>
  );
}
