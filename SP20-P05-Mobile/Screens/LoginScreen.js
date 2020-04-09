import React, { Component } from "react";
import { View } from "react-native";
import { login, ButtonStyle } from "../StyleSheets";
import FormTextInput from "../Components/FormTextInput";
import Button from "../Components/Button";
import Axios from "axios";
import { baseurl } from "../Constants";
import { _storeData } from "../Functions/Storage";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: {},
      isLoggedIn: false,
    };
  }

  handleUsernameChange = (username) => {
    this.setState({ username: username });
  };
  handlePasswordChange = (Password) => {
    this.setState({ password: Password });
  };
  handleLogout = () => {
    Axios.post(`${baseurl}/api/authentication/logout`).then(
      (res) => {
        console.log("Logged out...", res);
        this.setState({
          isLoggedIn: false,
        });
        _removeData("user");
        this.props.navigation.navigate("Home", { user: {} });
      },
      (error) => {
        console.log("Error Logging out...", error);
      }
    );
  };
  handleLogin = async () => {
    const url = baseurl + "/api/authentication/login";
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    await Axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //console.log(res.data);

      if (res.status === 200) {
        _storeData("@User", res.data);
        this.setState({
          user: res.data,
          isLoggedIn: true,
        });
        this.props.navigation.navigate("Home", { user: this.state.user });
      }
    });
  };
  render() {
    return (
      <View style={login.container}>
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
          <Button
            label={"Log Out"}
            onPress={this.handleLogout}
            style={ButtonStyle.light}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
