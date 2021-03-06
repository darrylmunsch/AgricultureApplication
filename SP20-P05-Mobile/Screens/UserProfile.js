import React, { Component } from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { profile } from "../StyleSheets";
import { connect } from "react-redux";
import CustomerProfile from "../Components/CustomerProfile";
import AdminProfile from "../Components/AdminProfile";
import { logoutUser } from "../Redux/Actions/AuthActions";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  redirectToLogin = () => {
    this.props.navigation.navigate("Login");
  };
  logoutUser = () => {
    this.props.logoutUser();
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={profile.main}>
        {this.props.auth.isAuthenticated ? (
          <View>
            <Text style={profile.logout} onPress={() => this.logoutUser()}>
              Logout
            </Text>
            <View style={profile.centerText}>
              <Text style={{ color: "#e1ffdf" }}>
                Welcome, {this.props.auth.user.username}
              </Text>
            </View>
            {this.props.auth.user?.username === "customer" ? (
              <CustomerProfile />
            ) : this.props.auth.user && this.props.username ? (
              <AdminProfile />
            ) : null}
            {this.props.auth.user?.username === "admin" ? (
              <AdminProfile />
            ) : null}
          </View>
        ) : (
          <View style={profile.container}>
            <Text style={{ color: "#e1ffdf", marginTop: 10 }}>
              To view your profile,{"  "}
              <Text
                style={{ color: "white", fontWeight: "bold" }}
                onPress={() => this.redirectToLogin()}
              >
                Log In
              </Text>
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
