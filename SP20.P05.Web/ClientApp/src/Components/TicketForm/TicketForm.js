import React from "react";
import { Form, Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TicketForm() {
  const [_ticket, _setTicketState] = React.useState({
    selectedField: "",
    selectedBucket: {
      size: "",
      price: ""
    },
    bucketPrices: {
      small: "",
      medium: "",
      large: ""
    },
    ticketTotal: ""
  });
  const [fields, setFields] = React.useState([
    "Blueberry",
    "Blackberry",
    "Strawberry"
  ]);

  function handleFieldChange(e) {
    const val = e.target.value;
    if (val === "Choose Farm Field...") {
      _setTicketState(prevState => {
        return { ...prevState, selectedField: "" };
      });
    } else {
      _setTicketState(prevState => {
        return { ...prevState, selectedField: val };
      });
    }
    setBucketPriceSm(val);
    setBucketPriceMd(val);
    setBucketPriceLg(val);
  }
  function handleBucketChange(e) {
    const val = e.target.value;
    if (val === "Choose Bucket Size") {
      _setTicketState(prevState => {
        return { ...prevState, selectedBucket: "" };
      });
    } else {
      _setTicketState(prevState => {
        return { ...prevState, selectedBucket: val };
      });
    }
  }
  function getTotal(e) {}
  function setBucketPriceSm(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return _setTicketState(prevState => {
          return { ...prevState, small: "$11" };
        });
      case "Strawberry":
        return _setTicketState(prevState => {
          return { ...prevState, small: "$10" };
        });
      case "Blackberry":
        return _setTicketState(prevState => {
          return { ...prevState, small: "$13" };
        });
      case "Choose Bucket Size...":
        return _setTicketState(prevState => {
          return { ...prevState, small: "" };
        });
    }
  }
  function setBucketPriceMd(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return _setTicketState(prevState => {
          return { ...prevState, medium: "$16" };
        });
      case "Strawberry":
        return _setTicketState(prevState => {
          return { ...prevState, medium: "$15" };
        });
      case "Blackberry":
        return _setTicketState(prevState => {
          return { ...prevState, medium: "$17" };
        });
      case "Choose Bucket Size...":
        return _setTicketState(prevState => {
          return { ...prevState, medium: "" };
        });
    }
  }
  function setBucketPriceLg(selectedField) {
    switch (selectedField) {
      case "Blueberry":
        return _setTicketState(prevState => {
          return { ...prevState, large: "$21" };
        });
      case "Strawberry":
        return _setTicketState(prevState => {
          return { ...prevState, large: "$20" };
        });
      case "Blackberry":
        return _setTicketState(prevState => {
          return { ...prevState, large: "$24" };
        });
      case "Choose Bucket Size...":
        return _setTicketState(prevState => {
          return { ...prevState, large: "" };
        });
    }
  }

  return (
    <Jumbotron className={"jumbo_clr"}>
      <h1>bUy tickEtS nOW</h1>
      <Form>
        <Form.Group as={Col} controlId={"FarmField"}>
          <Form.Label>Farm Field</Form.Label>
          <Form.Control
            as={"select"}
            value={_ticket.selectedField}
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
            value={_ticket.selectedBucket}
            onChange={handleBucketChange}
          >
            <option>Choose Bucket Size</option>
            <option>Small </option>
            {_ticket.bucketPrices.small}
            <option>Medium </option>
            {_ticket.bucketPrices.medium}
            <option>Large </option>
            {_ticket.bucketPrices.large}
          </Form.Control>
        </Form.Group>
        {_ticket.selectedField && _ticket.selectedBucket.size ? (
          <div>
            {_ticket.selectedField} Field Ticket with{" "}
            {_ticket.selectedBucket.size}, {_ticket.selectedBucket.price} bucket
          </div>
        ) : null}
        <div className={"divider div-transparent"} />
        <Form.Group>
          <Form.Label>How Many Tickets?</Form.Label>
          <Form.Control defaultValue={1} onChange={getTotal} />
        </Form.Group>
        <div>
          <div>Total:</div>
          <div>{_ticket.ticketTotal}</div>
        </div>
      </Form>
    </Jumbotron>
  );
}
