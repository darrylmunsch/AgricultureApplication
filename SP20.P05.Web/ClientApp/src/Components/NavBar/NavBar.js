import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiFruitTree } from "react-icons/gi";
import { UserContext } from "../Hooks/Context/UserContext";

// CSS
import "./NavBar.css";
import Logout from "../Functions/Logout";
import axios from "axios";

const NavBar = () => {
  const { _user, _setUser } = useContext(UserContext);

  function handleLogOut() {
    axios.post("api/authentication/logout").then(r => console.log(r));
    localStorage.removeItem("currentUser");
    _setUser(JSON.parse(localStorage.getItem("currentUser")));
  }

  return (
    <div>
      <Navbar bg={"dark"} sticky={"top"}>
        <Link to={"/"}>
          <Navbar.Brand className={"navbar-brand"}>
            <GiFruitTree className={"fruit-tree-icon-green"} />
            <strong className={"envoc-brand"}>Envoc Agriculture Co.</strong>
          </Navbar.Brand>
        </Link>
        <Nav>
          <Nav.Link as={Link} to="/fields" className={"nav-link-item"}>
            Fields
          </Nav.Link>
          <Nav.Link as={Link} to="/tickets" className={"nav-link-item"}>
            Tickets
          </Nav.Link>
        </Nav>
        <Nav className={"ml-auto"}>
          {_user ? (
            <Nav.Link className={"nav-link-item"} onClick={handleLogOut}>
              Log Out
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" className={"nav-link-item"}>
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
