import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import { login, ButtonStyle } from "../StyleSheets";
import FormTextInput from "../Components/FormTextInput";
import Button from "../Components/Button";
import { loginCurrentUser, logoutUser } from "../Redux/Actions/AuthActions";
import { connect } from "react-redux";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.isAuthenticated === true) {
      this.props.navigation.navigate("Home");
    }
  }

  handleUsernameChange = (username) => {
    this.setState({ username: username });
  };
  handlePasswordChange = (Password) => {
    this.setState({ password: Password });
  };
  handleLogin = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.loginUser(userData);
    console.log("login pressed" + JSON.stringify(userData));
    console.log(this.props.auth.loading);
  };
  handleLogout = () => {
    console.log("test");
    this.props.logoutUser();
  };

  render() {
    return (
      <View style={login.container}>
        {!this.props.auth.isAuthenticated ? (
          <View style={login.formContainer}>
            <FormTextInput
              value={this.state.username}
              onChangeText={this.handleUsernameChange}
              placeholder={"Username"}
              textContentType={"username"}
              style={login.formStyle}
            />
            <FormTextInput
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={"Password"}
              textContentType={"password"}
              secureTextEntry
              style={login.formStyle}
            />
            <Button
              label={"Log In"}
              onPress={this.handleLogin}
              style={ButtonStyle.light}
            />
          </View>
        ) : (
          <Button
            label={"Log Out"}
            onPress={this.handleLogout}
            style={ButtonStyle.light}
          />
        )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => {
      dispatch(loginCurrentUser(userData));
    },
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
