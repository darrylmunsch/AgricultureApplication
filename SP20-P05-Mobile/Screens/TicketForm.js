import React, { Component, useState } from "react";
import { Text, View, Picker } from "react-native";
import { ticketForm } from "../StyleSheets";
import Button from "../Components/Button";
import { BucketPrices } from "../Constants";
import FormTextInput from "../Components/FormTextInput";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "Choose Field...",
      step: 1,
      smBucketPrice: "",
      mdBucketPrice: "",
      lgBucketPrice: "",
      numSmBucket: 0,
      numMdBucket: 0,
      numLgBucket: 0,
      error: "",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selectedField !== this.state.selectedField) {
      this.setBucketPrice(this.state.selectedField);
    }
  }

  setBucketPrice = (field) => {
    switch (field) {
      case "Blueberry":
        this.setState({
          smBucketPrice: BucketPrices.BlueberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.BlueberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.BlueberryField.lgBucketPrice,
        });
        return;
      case "Blackberry":
        this.setState({
          smBucketPrice: BucketPrices.BlackberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.BlackberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.BlackberryField.lgBucketPrice,
        });
        return;
      case "Strawberry":
        this.setState({
          smBucketPrice: BucketPrices.StrawberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.StrawberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.StrawberryField.lgBucketPrice,
        });
        return;
    }
  };

  setValue = (item) => {
    this.setState({
      selectedField: item,
    });
  };
  increaseStep = () => {
    if (this.state.selectedField !== "Choose Field...") {
      this.setState({
        step: 2,
      });
    }
  };
  decreaseStep = () => {
    this.setState({
      step: 1,
    });
  };
  goToPurchase = () => {
    console.log("Add the goToPurchase function!");
  };
  setNumBuckets = (value) => {
    if (isNaN(value)) {
      this.setState({
        error: "invalid",
      });
    } else {
      this.setState({
        error: "",
      });
    }
  };

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
              <Picker.Item
                label={"Choose Field..."}
                value={"Choose Field..."}
              />
              <Picker.Item label={"Blueberry"} value={"Blueberry"} />
              <Picker.Item label={"Blackberry"} value={"Blackberry"} />
              <Picker.Item label={"Strawberry"} value={"Strawberry"} />
            </Picker>
            <Button
              label={"Select Field"}
              onPress={this.increaseStep}
              style={ticketForm.buttonBottom}
            />
            <View style={{ backgroundColor: "#90ee90" }} />
          </View>
        ) : null}
        {this.state.step === 2 ? (
          <View style={ticketForm.container}>
            <Text>{this.state.selectedField}</Text>
            <Text>Please pick your bucket(s)</Text>
            <Text>Small Bucket Price: ${this.state.smBucketPrice}</Text>
            <FormTextInput
              style={{ width: 200 }}
              placeholder={"How many small buckets?"}
              keyboardType={"numeric"}
              onChangeText={this.setNumBuckets}
            />
            {this.state.error !== "" ? (
              <Text style={{ color: "#ff0000" }}>{this.state.error}</Text>
            ) : null}
            <Text>Medium Bucket Price: ${this.state.mdBucketPrice}</Text>
            <FormTextInput
              style={{ width: 200 }}
              placeholder={"How many medium buckets?"}
              keyboardType={"numeric"}
              onChangeText={this.setNumBuckets}
            />
            <Text>Large Bucket Price: ${this.state.lgBucketPrice}</Text>
            <FormTextInput
              style={{ width: 200 }}
              placeholder={"How many large buckets?"}
              keyboardType={"numeric"}
              onChangeText={this.setNumBuckets}
            />
            <Button label={"Back to fields"} onPress={this.decreaseStep} />
            <Button label={"Purchase Tickets!"} onPress={this.goToPurchase} />
          </View>
        ) : null}
      </View>
    );
  }
}
export default TicketForm;

/*
Strawberry: 10 15 20
Blackberry:

 */
