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


import "bootstrap/dist/css/bootstrap.min.css";



export default function TicketForm() {
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
                  <Form.Check
                      type="radio"
                      label="Small"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                  />
                  <Form.Check
                      type="radio"
                      label="Medium"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                  />
                  <Form.Check
                      type="radio"
                      label="Large"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
  );
}
