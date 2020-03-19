import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { RadioGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PayPal from "../Paypal/PayPal";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

export default function TicketForm() {
  const [selectedValue, setSelectedValue] = React.useState("Small");
  const [setValue] = React.useState("Small");

  const handleChange = event => {
    setSelectedValue(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Jumbotron className={"jumbo_clr"}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <fieldset>
            <Form.Group controlId="formGridState">
              <h1>Choose a Field</h1>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Apples</option>
                <option>Oranges</option>
                <option>Tangerines</option>
                <option>PineCones</option>
                <option>Walnuts</option>
                <option>Wheat</option>
                <option>Cacti</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Row}>
              <h1>Buckets</h1>
              <Col sm={10}>
                <FormControl>
                  <RadioGroup defaultValue={"Small"}>
                    <FormControlLabel
                      checked={selectedValue === "Small"}
                      onChange={handleChange}
                      value="Small"
                      control={<GreenRadio />}
                      label="Small"
                    />
                    <FormControlLabel
                      checked={selectedValue === "Medium"}
                      onChange={handleChange}
                      value="Medium"
                      control={<GreenRadio />}
                      label="Medium"
                    />
                    <FormControlLabel
                      checked={selectedValue === "Large"}
                      onChange={handleChange}
                      value="Large"
                      control={<GreenRadio />}
                      label="Large"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
            </Form.Group>
          </fieldset>
        </Form.Row>
      </Form>
      <div className={"payPalMargins"}>
        <PayPal price={1000.0} description={"probs should buy this"} />
      </div>
    </Jumbotron>
  );
}
