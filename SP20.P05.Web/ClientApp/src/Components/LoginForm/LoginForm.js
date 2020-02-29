import React, { Component } from 'react'
import {Button, ButtonToolbar, Content, ControlLabel, FlexboxGrid, Form, FormControl, FormGroup, Panel} from 'rsuite';

// CSS
import './LoginForm.css';

export class LoginForm extends Component {
    render() {
        return (
            <div>
                <Content id={'loginPadding'}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12} >
                            <Panel header={<h3>Login</h3>} bordered id={'loginBox'}>
                                <Form fluid>
                                    <FormGroup>
                                        <ControlLabel>Username</ControlLabel>
                                        <FormControl name="name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl name="password" type="password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonToolbar>
                                            <Button id={'darkGreenButton'} appearance="primary">Sign in</Button>
                                            <Button appearance="secondary">Register</Button>
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