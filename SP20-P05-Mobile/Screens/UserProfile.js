import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { profile } from "../StyleSheets";
import bg from "../Resources/farmbg.jpg";

class UserProfile extends Component {
  render() {
    return (
      <View style={profile.container}>
        <Text>UserProfile</Text>
      </View>
    );
  }
}

export default UserProfile;
