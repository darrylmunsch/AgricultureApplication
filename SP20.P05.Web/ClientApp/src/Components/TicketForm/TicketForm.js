import React, { useContext, useState } from "react";
import { UserContext } from "../Hooks/Context/UserContext";
import { Form, Col, Row } from "react-bootstrap";
import { Button } from "rsuite";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Formik } from "formik";
import Toast from "react-bootstrap/Toast";
import * as yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

import "./TicketForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RadioGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

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

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Jumbotron className={"jumbo_clr"}>
      <Form>
        <Form.Row>
          <fieldset>
            <Form.Group controlId="formGridState">
              <h1>Choose a Field</h1>
              <Form.Label>Choose a Field</Form.Label>
              <Form.Control as="select" value="Choose...">
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
                  <RadioGroup  defaultValue={'Small'}>
                    <GreenRadio
                        checked={selectedValue === "Small"}
                        onChange={handleChange}
                        value="Small"
                        name="radio-button-small-bucket"
                        label={"Small"}
                        labelPLacement={"end"}
                        inputProps={{ "aria-label": "Small" }}
                    />
                    <GreenRadio
                        checked={selectedValue === "Medium"}
                        onChange={handleChange}
                        value="Medium"
                        label={"Medium"}
                        labelPLacement={"end"}
                        name="radio-button-medium-bucket"
                        inputProps={{ "aria-label": "Medium" }}
                    />
                    <GreenRadio
                        checked={selectedValue === "Large"}
                        onChange={handleChange}
                        value="Large"
                        label={"Large"}
                        labelPLacement={"end"}
                        name="radio-button-large-bucket"
                        inputProps={{ "aria-label": "Large" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
            </Form.Group>
          </fieldset>
        </Form.Row>

        <Button className={"btn_submit"} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
}
