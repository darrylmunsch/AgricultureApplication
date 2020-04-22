import React, { Component } from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { profile } from "../StyleSheets";
import { connect } from "react-redux";
import Button from "../Components/Button";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  redirectToLogin = () => {
    this.props.navigation.navigate("Login");
  };
  logoutUser = () => {
    console.log("add log out function");
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={profile.main}>
        {this.props.auth.isAuthenticated ? (
          <View>
            <Text style={profile.logout} onPress={() => this.redirectToLogin()}>
              Logout
            </Text>
            <View style={profile.centerText}>
              <Text style={{ color: "#e1ffdf" }}>
                Welcome, {this.props.auth.user.username}
              </Text>
            </View>
          </View>
        ) : (
          <View style={profile.container}>
            <Text style={{ color: "#e1ffdf", marginTop: 10 }}>
              To view your profile,{"  "}
              <Text
                style={{ color: "white", fontWeight: "bold" }}
                onPress={() => this.redirectToLogin()}
              >
                Log In
              </Text>
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
export default connect(mapStateToProps)(UserProfile);
