import React, {useContext, useState} from "react";
import Toast from "react-bootstrap/Toast";
import {UserContext} from "../../Components/Hooks/Context/UserContext";

export default function ToastFunc() {
    const {_user } = useContext(UserContext);
    const [show, setShow] = useState(true);

    return(
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <img src="../../Resources/tree.png" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Welcome, {_user.username}!</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>You are now logged in.</Toast.Body>
        </Toast>
    )
}