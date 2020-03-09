import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "rsuite";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Formik } from "formik";

// CSS
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signedIn: ""
    };
  }

  url = "api/authentication/login";

  render() {
    if (this.state.signedIn) return <Redirect to={{ pathname: "/" }} />;

    return (
      <div className={"centerForm"}>
        <Jumbotron className={"jumbo_clr"}>
          <div className={"formMargins"}>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                data.preventDefault();

                let user = {
                  username: data.username,
                  password: data.password
                };

                await axios
                  .post(this.url, user, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })
                  .then(res => {
                    console.log(res);
                    console.log(res.data);

                    if (res.status === 200) this.setState({ signedIn: true });

                    return Promise.resolve(res);
                  });

                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="username"
                      name="username"
                      placeholder="Enter Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Button
                    className={"btn_register"}
                    variant="primary"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button variant="secondary" href={"/register"}>
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default LoginForm;
