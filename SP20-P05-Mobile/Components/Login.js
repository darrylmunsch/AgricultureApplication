import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { login, ButtonStyle } from "../StyleSheets";
import FormTextInput from "./FormTextInput";
import Button from "./Button";
import { loginUser, logoutUser } from "../Redux/Actions/AuthActions";
import { connect } from "react-redux";
import DismissKeyboard from "./DismissKeyboard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.isAuthenticated) {
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
  handlePress = () => {
    this.props.func();
  };

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView style={login.container}>
          {!this.state.loading ? (
            <View>
              <View style={{ width: 300 }}>
                <Text style={login.centerTextLarge}>Welcome back,</Text>
                <Text style={login.centerText}>Log In to continue</Text>
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
              </View>
              <View style={login.centerFooter}>
                <Button
                  label={"Log In"}
                  onPress={this.handleLogin}
                  style={ButtonStyle.light}
                  textStyle={ButtonStyle.lightText}
                />
                <Text style={{ color: "#e1ffdf", marginTop: 10 }}>
                  Not signed up?{"  "}
                  <Text
                    style={{ color: "white", fontWeight: "bold" }}
                    onPress={() => this.handlePress()}
                  >
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          ) : (
            <ActivityIndicator size={"large"} color={"#e1ffdf"} />
          )}
        </KeyboardAvoidingView>
      </DismissKeyboard>
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
      dispatch(loginUser(userData));
    },
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
