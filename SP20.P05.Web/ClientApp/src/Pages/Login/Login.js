import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/SideNav';
import LoginForm from '../../Components/LoginForm/LoginForm';

// CSS
import './Login.css';

export class Login extends Component {

    render() {
        return (
            <div>
                <SideNav />
                <div classNmae={'marginLeft'}>
                    <LoginForm />
                </div>

            </div>
        )
    }
}

export default Login