import React, { Component } from 'react'
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

// CSS
import './RegisterForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    url = 'api/customers'

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        let user = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });

        axios.post(this.url, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                return Promise.resolve(res);
            })
    };


    render() {
        return (
            <div className={'marginLeft'}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" name = 'username' placeholder="Enter Username"  onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name = 'password' placeholder="Password"  onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="password" name = 'verifypassword' placeholder="Verify Password"/>
                    </Form.Group>
                    <Button id={'darkGreenButton'} variant="primary" type="submit">
                        Register
                    </Button>
                    <Button id={'registerButton'}  variant="secondary" href={'/login'}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm