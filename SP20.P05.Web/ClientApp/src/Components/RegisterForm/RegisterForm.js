import React, { Component } from "react";
import { Button } from "rsuite";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      verifypassword: "",
      registered: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  url = "api/customers";

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.state.password === this.state.verifypassword) {
      axios
        .post(this.url, user, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.status === 200) this.setState({ registered: true });
          return Promise.resolve(res);
        });
    } else {
      console.log("Passwords do not match");
    }
  };

  render() {
    if (this.state.registered) return <Redirect to={{ pathname: "/" }} />;

    return (
      <div className={"centerForm"}>
        <Jumbotron className={"jumbo_clr"}>
          <div className={"formMargins"}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                  type="password"
                  name="verifypassword"
                  placeholder="Verify Password"
                  oncChange={this.handleChange}
                />
              </Form.Group>
              <Button className={"btn_register"} type="submit">
                Register
              </Button>
              <Button variant="secondary">
                <Link to={"/login"}>Login</Link>
              </Button>
            </Form>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default RegisterForm;
