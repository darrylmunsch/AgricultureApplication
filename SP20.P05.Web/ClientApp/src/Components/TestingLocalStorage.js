import React, { Component } from "react";
import axios from "axios";
import { UserContext } from "./Hooks/Context/UserContext";
import { Link } from "react-router-dom";
import QR from "./Functions/QR";

class TestStorageMapping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      ticket: {}
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ currentUser });
  }

  handleLogOut() {
    axios.post("api/authentication/logout").then(r => console.log(r));
    localStorage.removeItem("currentUser");
    this.setState({ currentUser: null });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <UserContext.Consumer>
        {({ _user, _setUser }) => (
          <div>
            {currentUser ? (
              <div>
                {currentUser.username} is signed in
                <button onClick={this.handleLogOut}>Log out</button>
              </div>
            ) : (
              <div>no one is signed in</div>
            )}
            <Link to={"/"}>
              <button>Home</button>
            </Link>
            <Link to={"/login"}>
              <button>Log In</button>
            </Link>
            <QR ticket={JSON.stringify(this.state.ticket)} />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default TestStorageMapping;
