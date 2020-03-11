import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Functions/Logout";

function Admin() {
    return (
        <div>
            <h1 style={{color:"black"}}>Welcome to the Admin Access Page</h1>
            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <Logout />
        </div>
    );
}

export default Admin;
