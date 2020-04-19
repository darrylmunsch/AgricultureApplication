/*********NOTE: import 'react-native-gesture-handler' MUST BE ABOVE ALL OTHER IMPORTS*********/
import "react-native-gesture-handler";
import "react-native-get-random-values";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { Provider } from "react-redux";
import _Store from "./Redux/Store";
import BottomNav from "./Components/BottomTabNavigator";

export default function App() {
  return (
    <Provider store={_Store}>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </Provider>
  );
}
