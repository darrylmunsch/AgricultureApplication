import React, { Component } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { home } from "../StyleSheets";
import { _removeData, _retrieveData } from "../Functions/Storage";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props,
      route: this.props,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({
        user: this.props,
      });
    }
  }
  componentDidMount = async () => {
    const currentUser = await _retrieveData("@User");
    this.setState({
      user: JSON.parse(currentUser),
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={home.container}>
        <Text style={home.textGreen}>Home Screen</Text>
        {this.state.user !== null ? (
          <Text style={home.textLarge}>Hello, {this.state.user.username}!</Text>
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
          title="remove data"
          onPress={() => AsyncStorage.clear()}
        />

        <Text>{this.state.user.username}</Text>
      </View>
    );
  }
}

export default HomeScreen;
