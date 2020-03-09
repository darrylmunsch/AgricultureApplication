import React, { useContext, useState } from "react";
import { Button } from "rsuite";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import { Formik } from "formik";

export default function RegisterForm() {
  const [_registered, _setRegistered] = useState(false);
  const url = "api/customers";

  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    let user = {
      username: data.username,
      password: data.password,
      verifypassword: data.verifypassword
    };

    if (user.password === user.verifypassword){
      await axios
          .post(url, user, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(res => {
            console.log(res);
            console.log(res.data);

            if (res.status === 201) {
              _setRegistered(true);
            }

            return false;
          });
      resetForm();
    }
    else{
      console.log(user)
    }
  };

  if(_registered) return <Redirect to={{ pathname: '/login'}} />;

  return (
    <div className={"centerForm"}>
      <Jumbotron className={"jumbo_clr"}>
        <div className={"formMargins"}>
          <Formik
            initialValues={{ username: "", password: "", verifypassword: "" }}
            onSubmit={handleSubmit}
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
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Verify Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="verifypassword"
                    placeholder="Verify Password"
                    value={values.verifypassword}
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
                  Register
                </Button>
                <Button variant="secondary">
                  <Link to={"/login"}>Login</Link>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Jumbotron>
    </div>
  );
}
