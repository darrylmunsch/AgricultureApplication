import React, { useContext } from "react";
import axios from "axios";
import {UserContext} from "../Hooks/Context/UserContext";


const Logout = () => {
    const { _user, _setUser } = useContext(UserContext);
    function handleLogOut() {
        axios.post("api/authentication/logout").then(r => console.log(r));
        localStorage.removeItem("currentUser");
        _setUser(JSON.parse(localStorage.getItem("currentUser")));
    }

    return <button onClick={handleLogOut}>Log Out</button>;
};

export default Logout;