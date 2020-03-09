import React, {useContext, useState} from 'react';
import {UserContext} from "../Hooks/Context/UserContext";
import {Form} from 'react-bootstrap';
import {Button} from 'rsuite';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';
import { Formik } from "formik";

// CSS
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginFunc() {
    const {_user, _setUser} = useContext(UserContext);
    const [_username, _setUsername] = useState('default');
    const [_password, _setPassword] = useState('default');
    const [_signedIn, _setSignedIn] = useState(false);
    const url = 'api/authentication/login';

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

                if (res.status === 200){
                    _setUser(res.data);
                    _setSignedIn(true);
                }

                return false;
            });

        setSubmitting(false);
        resetForm();
    };
    if (_signedIn) return <Redirect to={{ pathname: '/'}} />;

    return (
        <div className={"centerForm"}>
            <Jumbotron className={"jumbo_clr"}>
                <div className={"formMargins"}>
                    <Formik
                        initialValues={{ username: "", password: "" }}
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