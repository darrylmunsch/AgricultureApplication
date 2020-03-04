import React, { Component } from 'react'
import {Button} from 'rsuite';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';
// CSS
import './RegisterForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            varifypassword:'',
            registered:''
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

        let user ={
            username: this.state.username,
            password: this.state.password
        };


        if(this.state.password == this.state.verifypassword){

            axios.post(this.url, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);

                    if(res.status ==200)
                        this.setState({registered: true})


                    return Promise.resolve(res);
                })
        }
        else{
            console.log('Passwords do not match')
        }

    };


    render() {

        if(this.state.registered)
            return<Redirect to ={{ pathname: '/'}} />

        return (
            <Jumbotron id={'register_container'}>
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="password" name = 'verifypassword' placeholder="Verify Password" oncChange={this.handleChange}/>
                    </Form.Group>
                    <Button id={'darkGreenButton'} variant="primary" type="submit">
                        Register
                    </Button>
                    <Button id={'loginButton'}  variant="secondary" href={'/login'}>
                        Login
                    </Button>
                </Form>
                
            </div>
        
            </Jumbotron>
        
           
            
        );
    }
}

export default RegisterForm