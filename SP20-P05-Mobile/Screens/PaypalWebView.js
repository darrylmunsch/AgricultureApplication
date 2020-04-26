import "react-native-get-random-values";
import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { baseurl } from "../Constants";
import { connect } from "react-redux";

class PaypalWebView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        source={{
          uri: `${baseurl}/mobilePay/${this.props.price}/ticketInfo=?${this.props.ticketInfo}`,
          //uri: `${baseurl}/mobilePay/${100}/ticketInfo=?${'Ticket Information'}`,
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}

export default connect(mapStateToProps)(PaypalWebView);
