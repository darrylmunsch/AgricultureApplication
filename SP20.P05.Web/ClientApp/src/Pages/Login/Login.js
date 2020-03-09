import React, {Component, useContext} from 'react';
import {Link} from "react-router-dom";

// Components
import LoginNav from '../../Components/SideNav/LoginNav';
import LoginFunc from '../../Components/LoginForm/LoginFunc';

// CSS
import './Login.css';
import {UserContext} from "../../Components/Hooks/Context/UserContext";

function Login() {
    const {_user} = useContext(UserContext);

        return (
            <div>
                <LoginNav />
                <div className={'background-img'}>
                    <div id={'divElement'} >
                        <LoginFunc />
                    </div>
                </div>
            </div>
        )
}

export default Login