import React, { Component } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { ButtonStyle, login } from "../StyleSheets";
import FormTextInput from "./FormTextInput";
import Button from "./Button";
import DismissKeyboard from "./DismissKeyboard";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordChk: "",
      PassChkErr: "",
      test: this.props.test,
    };
  }

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
    if (this.state.passwordChk !== this.state.password) {
      this.setState({
        PassChkErr: "Passwords do not match.",
      });
    } else {
      this.setState({
        PassChkErr: "",
      });
    }
  };
  handlePress = () => {
    this.props.func();
  };
  handleRegister = () => {
    this.handleCheck();
    console.log("TODO: Add Register endpoint..");
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
              <FormTextInput
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder={"Password"}
                textContentType={"password"}
                secureTextEntry
                style={login.formStyle}
              />
              {this.state.PassChkErr !== "" ? (
                <Text style={{ color: "red" }}>{this.state.PassChkErr}</Text>
              ) : null}
              <FormTextInput
                value={this.state.passwordChk}
                onChangeText={this.handlePasswordChkChange}
                placeholder={"Re-Type Password"}
                textContentType={"password"}
                secureTextEntry
                style={login.formStyle}
              />
            </View>
            <View style={login.centerFooter}>
              <Button
                label={"Register"}
                onPress={this.handleRegister}
                style={ButtonStyle.light}
                textStyle={ButtonStyle.lightText}
              />
              <Text style={{ color: "#e1ffdf", marginTop: 10 }}>
                Already signed up?{"  "}
                <Text
                  style={{ color: "white", fontWeight: "bold" }}
                  onPress={() => this.handlePress()}
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

export default Register;
