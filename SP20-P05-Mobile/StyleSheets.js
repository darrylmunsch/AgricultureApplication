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
  container: {},
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
  },
  h1: {
    textAlign: "center",
    fontSize: 55,
    color: "green",
    paddingTop: 230,
  },
  h2: {
    textAlign: "center",
    fontSize: 50,
    color: "brown",
  },
  h3: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 20,
    color: "#987856",
  },
});
export const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90cd9e",
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
    textAlign: "left",
    fontSize: 20,
    color: "#e1ffdf",
    paddingBottom: 20,
  },
  centerTextLarge: {
    textAlign: "left",
    fontSize: 30,
    color: "#e1ffdf",
  },
  centerFooter: {
    textAlign: "center",
    fontSize: 15,
    alignItems: "center",
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
    color: "#90cd9e",
    shadowColor: "#469856",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    width: "40%",
  },
  lightText: {
    color: "#90cd9e",
  },
});
export const ticketForm = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#e1ffdf",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#e1ffdf",
    justifyContent: "center",
  },
  header: {
    color: "#90cd9e",
    fontSize: 25,
  },
  buttonBottom: {
    marginTop: 200,
    width: 100,
    backgroundColor: "#0d5d0d",
    borderColor: "#0d5d0d",
  },
  picker: {
    color: "#e1ffdf",
    height: 30,
    width: 200,
    marginTop: -50,
  },
  progress: {
    flex: 1,
    backgroundColor: "#0d5d0d",
  },
  blueberry: {
    height: 100,
    width: 300,
    borderColor: "#e1ffdf",
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: 100,
    resizeMode: "cover",
    flex: 0.4,
  },
  ImgView: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#e1ffdf",
  },
  navigateBackView: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 100,
    marginBottom: 20,
  },
  navigateBack: {
    color: "#90cd9e",
    fontSize: 20,
  },
  navigateNext: {
    color: "#90cd9e",
    fontSize: 20,
  },
  buttonBucket: {
    width: 100,
    backgroundColor: "#0d5d0d",
    borderColor: "#0d5d0d",
  },
  navigateNextView: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 100,
    marginBottom: 20,
  },
  navigationView: {
    flexDirection: "row",
  },
});
export const profile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90cd9e",
    alignItems: "center",
    justifyContent: "center",
  },
  logout: {
    color: "#e1ffdf",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 20,
    fontSize: 18,
  },
  main: {
    flex: 1,
    backgroundColor: "#90cd9e",
  },
  centerText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
