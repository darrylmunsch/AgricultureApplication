import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { home, profile } from "../StyleSheets";
import { connect } from "react-redux";
import bg from "../Resources/farmbg.jpg";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      storage: {},
      count: 0,
      isAuthenticated: false,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({
        user: this.props.auth.user,
        isAuthenticated: this.props.auth.isAuthenticated,
      });
    }
  }
  render() {
    const { navigation } = this.props;
    const user = this.props.auth.user;

    return (
      <ImageBackground source={bg} style={home.image}>
        <StatusBar barStyle={"dark-content"} />
        <SafeAreaView style={home.container}>
          <Text style={home.h1}>Envoc</Text>
          <Text style={home.h2}>Aggriculture Co.</Text>
          <Text style={home.h3}>From our farm to your table.</Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}
export default connect(mapStateToProps)(HomeScreen);
