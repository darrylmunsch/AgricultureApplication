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