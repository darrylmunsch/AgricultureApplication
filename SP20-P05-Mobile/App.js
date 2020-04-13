/*********NOTE: import 'react-native-gesture-handler' MUST BE ABOVE ALL OTHER IMPORTS*********/
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import _Store from "./Redux/Store";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import TicketScreen from "./Screens/TicketScreen";
import LoginScreen from "./Screens/LoginScreen";
import PaypalWebView from "./Screens/PaypalWebView";
import TicketForm from "./Screens/TicketForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={_Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"Login"} component={LoginScreen} />
          <Stack.Screen name={"TicketForm"} component={TicketForm} />
          <Stack.Screen name={"WebView"} component={PaypalWebView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
