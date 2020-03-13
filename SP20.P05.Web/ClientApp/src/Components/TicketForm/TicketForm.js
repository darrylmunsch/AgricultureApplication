import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from "react-bootstrap";
import { Button } from "rsuite";

export default function TicketForm() {
  return (
    <Form>
      <Form.Row>
        <fieldset>
          <Form.Group controlId="formGridState">
            <Form.Label>State</Form.Label>
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
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
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
  );
}
