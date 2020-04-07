import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { baseurl } from "../constant";
import axios from "axios";

// function handleLoginPress() {
//   event.preventDefault();

//   const user = {
//     Username: this.state.Username,
//     Password: this.state.Password,
//   };

//   axios.post(`${baseurl}${authentication}${login}`, { user }).then((res) => {
//     console.log(res);
//     console.log(res.data);
//   });
// }

const headers = {
  "Content-Type": "application/json",
};

export default class LoginScreen extends React.Component {
  state = {
    Username: "",
    Password: "",
  };

  onUsernameChange = (Username) => {
    this.setState({ Username });
  };

  onPasswordChange = (Password) => {
    this.setState({ Password });
  };

  onPressLogin = () => {
    axios
      .post(`${baseurl}/api/authentication/login`, {
        Username: this.state.Username,
        Password: this.state.Password,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Username"
          onChangeText={this.onUsernameChange}
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={(input) => (this.passwordInput = input)}
          placeholder="Password"
          onChangeText={this.onPasswordChange}
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onPressLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});
