import React from "react";
import { TextInput } from "react-native";
import { form } from "../StyleSheets";

const FormTextInput = (props) => {
  // Extract the style & placeholderTextColor prop from the rest of the props.
  // This allows us to overwrite the style of the form when we implement it.
  const { style, ...otherProps } = props;
  let placeholderTextColor;
  if (style) {
    placeholderTextColor = style.color;
  }
  return (
    <TextInput
      style={[form.textInput, style]}
      placeholderTextColor={placeholderTextColor}
      {...otherProps}
    />
  );
};

export default FormTextInput;
