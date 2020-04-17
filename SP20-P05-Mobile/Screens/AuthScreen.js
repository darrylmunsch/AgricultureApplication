import React, { Component } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.setScreen = this.setScreen.bind(this);
    this.state = {
      showReg: false,
    };
  }

  setScreen() {
    this.setState({
      showReg: !this.state.showReg,
    });
  }
  render() {
    console.log("AuthScreen Props: " + this.props);
    return !this.state.showReg ? (
      <Login func={this.setScreen} navigation={this.props.navigation} />
    ) : (
      <Register func={this.setScreen} navigation={this.props.navigation} />
    );
  }
}

export default AuthScreen;
