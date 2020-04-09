// Use this file for all of our style sheets.
import { StyleSheet } from "react-native";

// Example Style w/ export:
export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
    color: "lightgreen",
  },
  textGreen: {
    color: "#90ee90",
  },
  greenButton: {
    color: "#90ee90",
    backgroundColor: "#343a40",
  },
});
// Import the styles you need for each component, function, etc.. (import { relevantStyle } from './StyleSheets')
// Look in App.js for the import there.
// Note: each export should contain all styles for a specific component, function, etc unless needed otherwise

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
  },
  textGreen: {
    color: "#90ee90",
  },
});
