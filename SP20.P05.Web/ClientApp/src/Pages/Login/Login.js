import React, { Component } from 'react'

// Components
import LoginNav from '../../Components/SideNav/LoginNav';
import LoginForm from '../../Components/LoginForm/LoginForm';

// CSS
import './Login.css';

export class Login extends Component {
    render() {
        return (
            <div>
                <LoginNav />
                <div className={'background-img'}>
                    <div id={'divElement'} >
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login