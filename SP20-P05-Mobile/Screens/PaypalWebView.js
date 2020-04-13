import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { baseurl } from "../Constants";
import { connect } from "react-redux";

class PaypalWebView extends Component {
  constructor(props) {
    super(props);
  }

  handleOnMessage = (e) => {
    const { data } = e.nativeEvent;
    console.log("Message Received...\n" + data);
  };
  postMessage = () => {
    if (this.webview) {
      this.webview.postMessage('"Hello" from React Native!');
    }
    console.log("Sent Post Message");
  };

  render() {
    const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
})();`;
    return <WebView source={{ uri: `${baseurl}/tickets` }} />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}

export default connect(mapStateToProps)(PaypalWebView);
