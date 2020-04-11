import React, { Component } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { home } from "../StyleSheets";
import { connect } from "react-redux";
const isEmpty = require("is-empty");

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      storage: {},
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({
        user: this.props.auth.user,
      });
    }
  }
  render() {
    const { navigation } = this.props;
    const user = this.props.auth.user;

    return (
      <View style={home.container}>
        <Text style={home.textGreen}>Home Screen</Text>
        {this.props.auth.isAuthenticated ? (
          <Text style={home.textGreen}>Welcome, you have signed in.</Text>
        ) : null}
        <Button
          style={home.textGreen}
          title="Go to Tickets"
          onPress={() => navigation.navigate("Tickets")}
        />
        <Button
          style={home.textGreen}
          title="Go to LogIn"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          style={home.textGreen}
          title="force update data"
          onPress={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        />
        <Text>Testing Data from Redux: </Text>
        <Text>
          isAuthenticated: {JSON.stringify(this.props.auth.isAuthenticated)}
        </Text>
        <Text>User: {JSON.stringify(this.props.auth.user)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
export default connect(mapStateToProps)(HomeScreen);
