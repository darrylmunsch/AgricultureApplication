import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { home } from "../StyleSheets";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={home.container}>
        <Text style={home.textGreen}>Home Screen</Text>
        <Button
          style={home.textGreen}
          title="Go to Tickets"
          onPress={() => this.props.navigation.navigate("Tickets")}
        />
      </View>
    );
  }
}

export default HomeScreen;
