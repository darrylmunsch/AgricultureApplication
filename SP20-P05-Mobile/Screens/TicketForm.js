import React, { Component, useState } from "react";
import { Text, View, Picker } from "react-native";
import { ticketForm } from "../StyleSheets";
import Button from "../Components/Button";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "Blueberry",
      step: 1,
    };
  }

  setValue = (item) => {
    this.setState({
      selectedField: item,
    });
  };
  increaseStep = () => {
    this.setState({
      step: 2,
    });
  };
  decreaseStep = () => {};

  render() {
    const selectedField = this.state.selectedField;
    return (
      <View style={ticketForm.container}>
        {this.state.step === 1 ? (
          <View style={ticketForm.container}>
            <Text>Select Farm Field</Text>
            <Picker
              selectedValue={selectedField}
              style={ticketForm.picker}
              onValueChange={this.setValue}
            >
              <Picker.Item label={"Blueberry"} value={"Blueberry"} />
              <Picker.Item label={"Blackberry"} value={"Blackberry"} />
              <Picker.Item label={"Strawberry"} value={"Strawberry"} />
            </Picker>
            <Button
              label={"Select Field"}
              onPress={this.increaseStep}
              style={ticketForm.buttonBottom}
            />
          </View>
        ) : null}
        <View style={ticketForm.progress} />
      </View>
    );
  }
}
export default TicketForm;
