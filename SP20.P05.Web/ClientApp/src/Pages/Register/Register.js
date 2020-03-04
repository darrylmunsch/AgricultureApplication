import React, { Component } from 'react'

// Components
import SideNav from '../../Components/SideNav/SideNav';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

// CSS
import './Register.css';

export class Register extends Component {
    render() {
        return (
            <div>
                <SideNav />
                <RegisterForm />
            </div>
        )
    }
}

export default Register