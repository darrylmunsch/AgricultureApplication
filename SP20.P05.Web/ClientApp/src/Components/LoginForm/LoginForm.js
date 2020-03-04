import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
import {Button} from 'rsuite';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';

// CSS
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            signedIn:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    url = 'api/authentication/login'

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        let user ={
            username: this.state.username,
            password: this.state.password
        };

        axios.post(this.url, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

                if(res.status ==200)
                    this.setState({signedIn: true})

                return Promise.resolve(res);
            })
    };


    render() {

        if(this.state.signedIn)
            return<Redirect to ={{ pathname: '/'}} />

        return (
            <Jumbotron id={'login_container'}>
            <div className={'marginLeft'}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" name = 'username' placeholder="Enter Username"  onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name = 'password' placeholder="Password"  onChange={this.handleChange}/>
                    </Form.Group>
                    <Button id={'darkGreenButton'} variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button id={'registerButton'}  variant="secondary" href={'/register'}>
                        Register
                    </Button>
                </Form>
            </div>
            </Jumbotron>
        );
    }
}

export default LoginForm