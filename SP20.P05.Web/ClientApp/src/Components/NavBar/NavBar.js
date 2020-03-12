import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiFruitTree } from "react-icons/gi";

// CSS
import './NavBar.css';
import Card from "react-bootstrap/Card";

const NavBar = () => {
  return (
    <div>
      <Navbar bg={"dark"}>
        <Link to={"/"}>
          <Navbar.Brand className={'fruit-tree-icon-green'}>
              <GiFruitTree className={'fruit-tree-icon-green'}/>
              Envoc Agriculture Co.
          </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
