/*********NOTE: import 'react-native-gesture-handler' MUST BE ABOVE ALL OTHER IMPORTS*********/
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import TicketScreen from "./Screens/TicketScreen";
import LoginScreen from "./Screens/LoginScreen";

const Stack = createStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Tickets"} component={TicketScreen} />
        <Stack.Screen name={"Login"} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
