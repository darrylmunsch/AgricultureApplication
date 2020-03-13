import React, {useContext, useEffect, useState} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/Context/UserContext";
import axios from "axios";

// Icons
import { GiFruitTree } from "react-icons/gi";
import {IoIosLogIn, IoIosLogOut} from "react-icons/io";
import {TiTicket, TiHomeOutline} from "react-icons/ti";
import {GiStrawberry} from "react-icons/gi";
import {FiInfo} from "react-icons/fi";
import {FaUserCheck} from "react-icons/fa";


// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css";





export default function NavBar() {
  const { _user, _setUser } = useContext(UserContext);
  const {active, setActive} = useState('');

  function handleLogOut() {
    axios.post("api/authentication/logout").then(r => console.log(r));
    localStorage.removeItem("currentUser");
    _setUser(JSON.parse(localStorage.getItem("currentUser")));
  }

  return (
    <div>
      <Navbar bg={"dark"} sticky={"top"}>
          <Navbar.Brand className={"navbar-brand"}  >
            <GiFruitTree className={"fruit-tree-icon-green"} />
            <strong className={"envoc-brand"}>Envoc Agriculture Co.</strong>
          </Navbar.Brand>
        <Nav defaultActiveKey="home">
          <Nav.Link  as={Link} to="/" className={'nav-link-item'} eventKey={'home'}>
            <TiHomeOutline />
            Home
          </Nav.Link>
          <Nav.Link  as={Link} to="/fields" className={'nav-link-item'} eventKey={'fields'}>
            <GiStrawberry />
             Fields
          </Nav.Link>
          <Nav.Link as={Link} to="/tickets" className={"nav-link-item"} eventKey={"tickets"}>
            <TiTicket/>
            Tickets
          </Nav.Link>
          <Nav.Link as={Link} to="/About-us" className={"nav-link-item"} eventKey={"aboutUs"}>
            <FiInfo/>
            About Us
          </Nav.Link>
          <Nav.Item className={"nav-link-item"}>
            {_user ? (
                <NavDropdown  title={<FaUserCheck/>}  id={'nav-link-item'}>
                  <NavDropdown.Item as={Link} to={'/admin'}>Admin Access</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogOut}>
                    <IoIosLogOut/>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
            ) : (
                <Nav.Link as={Link} to="/login" className={'nav-link-item'} eventKey={"LogIn"}>
                  <IoIosLogIn/>
                  Login
                </Nav.Link>
            )}
          </Nav.Item>

        </Nav>
      </Navbar>
    </div>
  );
};

