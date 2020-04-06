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

  onPressLogin() {
    const { Username, Password } = this.state;
    const payload = { Username, Password };
    console.log(payload);
    axios.post(`${baseurl}/authentication/login`, { payload }).then((res) => {
      if (res.data.status == 200) {
        console.log(res);
        console.log(res.data);
        Alrt.alert("Success");
      } else if (error.res) {
        console.log(error.toJSON());
      }
    });
  }

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
          onPress={this.onPressLogin()}
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
