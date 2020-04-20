import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { profile } from "../StyleSheets";
import {connect} from "react-redux";
import Button from '../Components/Button';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  redirectToLogin = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    const navigation = this.props.navigation;
    return (
        <View style={profile.container}>
          {this.props.auth.isAuthenticated ? (
              <View>
                <Text>Welcome, {this.props.auth.user}</Text>
              </View>
          ) :
              <View>
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
          }
        </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
export default connect(mapStateToProps)(UserProfile);
