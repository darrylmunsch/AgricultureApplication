import React, { Component } from 'react'

// Components
import RegisterNav from '../../Components/SideNav/RegisterNav';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

// CSS
import './Register.css';

export class Register extends Component {
    render() {
        return (
            <div>
                <RegisterNav />
                <div className={'background-img'}>
                    <div id={'divElement'}>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
