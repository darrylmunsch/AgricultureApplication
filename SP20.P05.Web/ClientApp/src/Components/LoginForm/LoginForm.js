import React, { useContext, useState } from "react";
import { UserContext } from "../Hooks/Context/UserContext";
import { Form } from "react-bootstrap";
import { Button } from "rsuite";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Formik } from "formik";
import Toast from "react-bootstrap/Toast";
import * as yup from "yup";

// CSS
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  const { _user, _setUser } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [_username, _setUsername] = useState("default");
  const [_password, _setPassword] = useState("default");
  const [_signedIn, _setSignedIn] = useState(false);
  const url = "api/authentication/login";

  const schema = yup.object({
    username: yup.string().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/,
        "Must have 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character"
      )
  });

  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    let user = {
      username: data.username,
      password: data.password
    };

    await axios
      .post(url, user, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);

        if (res.status === 200) {
          _setUser(res.data);
          _setSignedIn(true);
        }

        return false;
      });

    setSubmitting(false);
    resetForm();
  };

  if (_signedIn) return <Redirect to={{ pathname: "/" }} />;

  return (
    <div className={"centerForm"}>
      <Jumbotron className={"jumbo_clr"}>
        <div className={"formMargins"}>
          <Formik
            initialValues={{ username: "", password: "" }}
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
                <Button
                  className={"btn_register"}
                  variant="primary"
                  disabled={isSubmitting}
                  type="submit"
                  onClick={() => validateForm()}
                >
                  Submit
                </Button>
                <Button variant="secondary">
                  <Link to={"/register"}>Register</Link>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Jumbotron>
    </div>
  );
}

export function UserToast() {
  const [show, setShow] = useState(true);
  const { _user } = useContext(UserContext);
  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <img src="../../Resources/tree.png" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Welcome! {_user.username}</strong>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}
