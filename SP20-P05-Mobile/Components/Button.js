import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonStyle } from "../StyleSheets";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, onPress, style } = this.props;
    return (
      <TouchableOpacity style={[ButtonStyle.primary, style]} onPress={onPress}>
        <Text style={ButtonStyle.whiteText}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
