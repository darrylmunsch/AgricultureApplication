import React, {useContext, useState} from 'react';
import {UserContext} from "../Hooks/Context/UserContext";
import {Form} from 'react-bootstrap';
import {Button} from 'rsuite';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';

// CSS
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginFunc() {
    const {_user, _setUser} = useContext(UserContext);
    const [username, setUsername] = useState('default');
    const [password, setPassword] = useState('default');
    const [signedIn, setSignedIn] = useState(false);
    const url = 'api/authentication/login';

    const handleSubmit = async event => {
        event.preventDefault();

        const user ={
            username: username,
            password: password
        };

        await axios.post(url, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem('user', (JSON.stringify(res.data)));
                _setUser(res.data);
                return (res);
            })
    };

    return(
        <div className={"centerForm"}>
            <Jumbotron className={"jumbo_clr"}>
                <div className={'formMargins'}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name = 'username' placeholder="Enter Username"
                                          onChange={e => {setUsername(e.target.value);}} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name = 'password' placeholder="Password"
                                          onChange={e => {setPassword(e.target.value);}}/>
                        </Form.Group>
                        <Button className={"btn_register"} variant="primary" type="submit" >
                            Submit
                        </Button>
                        <Button  variant="secondary" href={'/register'}>
                            Register
                        </Button>
                    </Form>
                </div>
            </Jumbotron>
        </div>
    )
}