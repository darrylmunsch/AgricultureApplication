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