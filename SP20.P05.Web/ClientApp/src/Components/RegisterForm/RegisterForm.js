import React, { useContext, useState } from "react";
import { Button } from "rsuite";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import * as yup from "yup";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import { Formik } from "formik";

export default function RegisterForm() {
  const [_registered, _setRegistered] = useState(false);
  const url = "api/customers";

  const schema = yup.object({
    username: yup
      .string()
      .required()
      .test("len", "Must be at least 4 characters", val => val.length >= 4),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/,
        "Must Contain 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character"
      )
      .min(6, "Password must contain 6 Characters"),
    verifypassword: yup.string().required()
  });

  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    let user = {
      username: data.username,
      password: data.password,
      verifypassword: data.verifypassword
    };

    if (user.password === user.verifypassword) {
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
    } else {
      console.log(user);
    }
  };

  if (_registered) return <Redirect to={{ pathname: "/login" }} />;

  return (
    <div className={"centerForm"}>
      <Jumbotron className={"jumbo_clr"}>
        <div className={"formMargins"}>
          <Formik
            initialValues={{ username: "", password: "", verifypassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              isInvalid,
              errors,
              touched,
              validateForm
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
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.username}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.password}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.verifypassword}
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.verifypassword}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className={"btn_register"}
                  variant="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Register
                </Button>
                <Button variant="secondary" onClick={() => validateForm()}>
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
