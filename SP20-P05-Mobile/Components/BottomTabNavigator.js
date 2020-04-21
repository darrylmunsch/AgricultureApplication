import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import TicketForm from "../Screens/TicketForm";
import UserProfile from "../Screens/UserProfile";
import AuthScreen from "../Screens/AuthScreen";
import PaypalWebView from "../Screens/PaypalWebView";
import RedeemQrCode from "../Screens/RedeemQrCode";

const barStyle = {
  backgroundColor: "white",
  borderTopWidth: StyleSheet.hairlineWidth,
  borderStyle: "solid",
  borderColor: "green",
};

const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
    return (
    <Tab.Navigator
      initialRouteName={"Home"}
      activeColor={"green"}
      barStyle={barStyle}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntIcon name={"home"} color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={AuthScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntIcon name={"login"} color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"Tickets"}
        component={TicketForm}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcon name={"ticket-outline"} color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={UserProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntIcon name={"user"} color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"WebView"}
        component={PaypalWebView}
        options={{
          tabBarIcon: ({ color }) => (
            <EntypoIcon name={"paypal"} color={color} size={25} />
          ),
        }}
      />
        <Tab.Screen
            name={"RedeemTickets"}
            component={RedeemQrCode}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcon name={"barcode"} color={color} size={25} />
                ),
            }}
        />
    </Tab.Navigator>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}

export default connect(mapStateToProps)(BottomNav);
