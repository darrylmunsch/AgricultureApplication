import React from "react";
import DismissKeyboard from "./DismissKeyboard";
import { Text, View } from "react-native";
import { ticketForm } from "../StyleSheets";
import FormTextInput from "./FormTextInput";
import Button from "./Button";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const BucketSelect = () => {
  return (
    <DismissKeyboard>
      <View>
        <View style={ticketForm.container}>
          <Text>{props.selectedField}</Text>
          <Text>Please pick your bucket(s)</Text>
          <Text>Small Bucket Price: ${this.state.smBucketPrice}</Text>
          <FormTextInput
            style={{ width: 200 }}
            placeholder={"How many small buckets?"}
            keyboardType={"numeric"}
            onChangeText={this.setNumSmBuckets}
          />
          {this.state.error !== "" ? (
            <Text style={{ color: "#ff0000" }}>{this.state.errorSm}</Text>
          ) : null}
          <Text>Medium Bucket Price: ${this.state.mdBucketPrice}</Text>
          <FormTextInput
            style={{ width: 200 }}
            placeholder={"How many medium buckets?"}
            keyboardType={"numeric"}
            onChangeText={this.setNumMdBuckets}
          />
          {this.state.error !== "" ? (
            <Text style={{ color: "#ff0000" }}>{this.state.errorMd}</Text>
          ) : null}
          <Text>Large Bucket Price: ${this.state.lgBucketPrice}</Text>
          <FormTextInput
            style={{ width: 200 }}
            placeholder={"How many large buckets?"}
            keyboardType={"numeric"}
            onChangeText={this.setNumLgBuckets}
          />
          {this.state.error !== "" ? (
            <Text style={{ color: "#ff0000" }}>{this.state.errorLg}</Text>
          ) : null}
          <Text>Ticket Total: ${this.state.ticketTotal}</Text>
          <Button label={"Back to fields"} onPress={this.decreaseStep} />
          <Button label={"Purchase Tickets!"} onPress={this.goToPurchase} />
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <MaterialIcon
              name={"navigate-before"}
              color={"green"}
              size={25}
              style={ticketForm.navigateBack}
            />
            <Text>Back</Text>
            <Text>Next</Text>
            <MaterialIcon name={"navigate-next"} color={"green"} size={25} />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default BucketSelect;
