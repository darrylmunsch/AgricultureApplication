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
    alignItems: "center",
    justifyContent: "center",
  },
  textGreen: {
    color: "green",
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
export const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ee28a",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  formStyle: {
    height: 40,
    borderColor: "#e1ffdf",
    color: "#e1ffdf",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  centerText: {
    textAlign: "center",
    fontSize: 20,
    color: "#e1ffdf",
  },
  centerFooter: {
    textAlign: "center",
    fontSize: 15,
    alignItems: "center",
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
    backgroundColor: "#e1ffdf",
    borderColor: "#e1ffdf",
    color: "#6ee28a",
    shadowColor: "#469856",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    width: "40%",
  },
  lightText: {
    color: "#6ee28a",
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
export const profile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dddddd",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
