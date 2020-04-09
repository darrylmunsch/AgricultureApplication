import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { main } from "../StyleSheets";

class TicketScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={main.container}>
        <Text style={main.textGreen}>Ticket Screen</Text>
        <Button
          style={main.greenButton}
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default TicketScreen;
