import React, { Component } from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { profile } from "../StyleSheets";
import { connect } from "react-redux";

class CustomerProfile extends Component {
  render() {
    return <Text>customer page</Text>;
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}

export default connect(mapStateToProps)(CustomerProfile);
