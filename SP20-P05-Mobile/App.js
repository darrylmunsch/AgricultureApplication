/*********NOTE: import 'react-native-gesture-handler' MUST BE ABOVE ALL OTHER IMPORTS*********/
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import TicketScreen from "./Screens/TicketScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Tickets"} component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
