import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/TicketsScreen";
import PayPal from "../screens/PayPal";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          title: "Buy Tickets",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-cash" />
          )
        }}
      />
      <BottomTab.Screen
        name="PayPal"
        component={PayPal}
        options={{
          title: "Pay Now",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-cash" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "FarmHub";
    case "Tickets":
      return "Purchase Tickets";
    case "PayPal":
      return "PayPal";
  }
}
