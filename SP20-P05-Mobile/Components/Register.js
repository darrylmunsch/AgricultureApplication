import React, { Component } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { ButtonStyle, login } from "../StyleSheets";
import FormTextInput from "./FormTextInput";
import Button from "./Button";
import DismissKeyboard from "./DismissKeyboard";
import { registerUser } from "../Redux/Actions/AuthActions";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordChk: "",
      UsernameErr: null,
      PassChkErr: null,
      PassReqErr: null,
      error: null,
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.registered !== prevProps.auth.registered) {
      this.changeScreen();
    } else if (this.props.auth.error !== prevProps.auth.error) {
      this.setState({
        error: this.props.auth.error,
      });
    }
  }
  checkUsername = (name) => {
    if (name.length < 4) {
      this.setState({
        UsernameErr: "Username must be at least 4 characters long",
      });
      return false;
    } else {
      this.setState({
        UsernameErr: null,
      });
      return true;
    }
  };
  checkPwdReqs = (password) => {
    let validated = false;
    if (password.length <= 5) {
      this.setState({
        PassReqErr: "Password must be at least 6 characters",
      });
    } else if (
      !/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(password)
    ) {
      this.setState({
        PassReqErr:
          "Password must Contain 1 Uppercase, Lowercase, Number and special Character",
      });
    } else {
      this.setState({
        PassReqErr: null,
      });
      validated = true;
    }
    return validated;
  };
  checkPwdMatch = (password1, password2) => {
    if (password1 !== password2) {
      this.setState({
        PassChkErr: "Passwords do not match.",
      });
      return false;
    } else {
      this.setState({
        PassChkErr: null,
      });
      return true;
    }
  };

  handleUsernameChange = (username) => {
    this.setState({ username: username });
  };
  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };
  handlePasswordChkChange = (passwordChk) => {
    this.setState({ passwordChk: passwordChk });
  };
  handleCheck = () => {
    // Pull state
    const { username, password, passwordChk } = this.state;
    // Check validation
    let nameIsValidated = this.checkUsername(username);
    let passwordIsValidated = this.checkPwdReqs(password);
    let passwordsMatch = this.checkPwdMatch(password, passwordChk);
    // Return true if shit validates
    return nameIsValidated && passwordIsValidated && passwordsMatch;
  };
  changeScreen = () => {
    this.props.func();
  };
  handleRegister = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    let ok = this.handleCheck();
    if (ok) {
      this.props.registerUser(userData);
    }
  };
  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView style={login.container}>
          <View>
            <View style={{ width: 300 }}>
              <Text style={login.centerText}>Register</Text>
              <FormTextInput
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
                placeholder={"Username"}
                textContentType={"username"}
                style={login.formStyle}
              />
              {this.state.UsernameErr ? (
                <Text style={{ color: "red" }}>{this.state.UsernameErr}</Text>
              ) : null}
              <FormTextInput
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder={"Password"}
                textContentType={"password"}
                secureTextEntry
                style={login.formStyle}
              />
              {this.state.PassReqErr !== "" ? (
                <Text style={{ color: "red" }}>{this.state.PassReqErr}</Text>
              ) : null}
              <FormTextInput
                value={this.state.passwordChk}
                onChangeText={this.handlePasswordChkChange}
                placeholder={"Re-Type Password"}
                textContentType={"password"}
                secureTextEntry
                style={login.formStyle}
              />
              {this.state.PassChkErr !== "" ? (
                <Text style={{ color: "red" }}>{this.state.PassChkErr}</Text>
              ) : null}
            </View>
            <View style={login.centerFooter}>
              <Button
                label={"Register"}
                onPress={this.handleRegister}
                style={ButtonStyle.light}
                textStyle={ButtonStyle.lightText}
              />
              {this.state.error ? (
                <Text style={{ color: "red" }}>{this.state.error}</Text>
              ) : null}
              <Text style={{ color: "#e1ffdf", marginTop: 10 }}>
                Already signed up?{"  "}
                <Text
                  style={{ color: "white", fontWeight: "bold" }}
                  onPress={() => this.changeScreen()}
                >
                  Log In
                </Text>
              </Text>
            </View>
          </View>
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
    registerUser: (userData) => {
      dispatch(registerUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
