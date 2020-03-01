import React, { Component } from 'react'
import {Button, ButtonToolbar, Content, ControlLabel, FlexboxGrid, Form, FormControl, FormGroup, Panel} from 'rsuite';
import axios from 'axios';

// CSS
import './LoginForm.css';

export class LoginForm extends Component {

    state ={
        username:'',
        password:''
    };

    handleUsernameChange = event => {
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };


    render() {
        return (
            <div>
                <Content id={'loginPadding'}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12} >
                            <Panel header={<h3>Login</h3>} bordered id={'loginBox'}>
                                <Form fluid onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <ControlLabel>Username</ControlLabel>
                                        <FormControl name="username" type={"text"} onChange={this.handleUsernameChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl name="password" type="password" onChange={this.handlePasswordChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonToolbar>
                                            <Button id={'darkGreenButton'} appearance="primary" type={'submit'} >Sign In</Button>
                                            <Button appearance="secondary" href={'/register'}>Register</Button>
                                        </ButtonToolbar>
                                    </FormGroup>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </div>
        )
    }
}

export default LoginForm