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
  textLarge: {
    fontSize: 30,
    color: "#90ee90",
  },
  panel: {
    flex: 1,
    color: "#90ee90",
    borderColor: "#90ee90",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
  },
  textGreen: {
    color: "#90ee90",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
  formStyle: {
    height: 40,
    borderColor: "#90ee90",
    color: "#90ee90",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});
export const ticket = StyleSheet.create({
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
export const form = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#ffffff",
    color: "#ffffff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});
export const ButtonStyle = StyleSheet.create({
  primary: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e90ff",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#1e90ff",
  },
  whiteText: {
    color: "#ffffff",
    textAlign: "center",
    height: 20,
  },
  light: {
    backgroundColor: "#90ee90",
    color: "#343a40",
    borderColor: "#90ee90",
  },
});
export const TEST_STYLE = StyleSheet.create({
  formColors: {
    color: "#ee82ee",
    borderColor: "#ee82ee",
  },
});
export const ticketForm = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#dddddd",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBottom: {
    marginTop: 200,
    width: 100,
    backgroundColor: "#0d5d0d",
    borderColor: "#0d5d0d",
  },
  picker: {
    color: "#90ee90",
    height: 50,
    width: 200,
  },
  progress: {
    flex: 1,
    backgroundColor: "#0d5d0d",
  },
});
