import React, { Component } from 'react'
import {Button, ButtonToolbar, Content, ControlLabel, FlexboxGrid, Form, FormControl, FormGroup, Panel} from 'rsuite';

// CSS
import './RegisterForm.css';

export class RegisterForm extends Component {
    render() {
        return (
            <div>
                <Content id={'registerPadding'}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12} >
                            <Panel header={<h3>Register</h3>} bordered id={'registerBox'}>
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
                                            <Button id={'darkGreenButton'} appearance="primary">Register</Button>
                                            <Button appearance="secondary" href={'/login'}>Sign In</Button>
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

export default RegisterForm