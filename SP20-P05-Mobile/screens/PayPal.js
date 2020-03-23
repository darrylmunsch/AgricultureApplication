import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  ActivityIndicator,
  Button,
  Alert
} from "react-native";
import { WebView } from "react-native-webview";
//import { PayPalButton } from "react-paypal-button-v2";

import axios from "axios";
import baseurl from "../constant";
import * as WebBrowser from "expo-web-browser";

export default class PayPal extends React.Component {
  state = {
    accessToken: null,
    approvalUrl: null,
    paymentId: null
  };

  componentDidMount() {
    const credentials = {
      sandbox: "YOUR_SANDBOX_CREDENTIALS",
      production: "YOUR_PRODUCTION_CREDENTIALS"
    };
    let currency = "100 USD";
    currency.replace(" USD", "");

    const dataDetail = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      transactions: [
        {
          amount: {
            total: currency,
            currency: "THB",
            details: {
              subtotal: currency,
              tax: "0",
              shipping: "0",
              handling_fee: "0",
              shipping_discount: "0",
              insurance: "0"
            }
          }
        }
      ],
      redirect_urls: {
        return_url: "https://example.com",
        cancel_url: "https://example.com"
      }
    };
    axios
      .post(
        "https://api.sandbox.paypal.com/v1/oauth2/token",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `A21AAHrrwmrkovPeZTRJZ2tvqgVEHTw1w2Co6Vpadh5o8q2bFuJoqx5-U_MP4oH6wN3D7NhE0sYhy5lZhObXe5IKy99YM0fbQ` // Your Authorization Value
          }
        }
      )
      .then(response => {
        console.log(response.data.access_token);

        axios
          .post(
            "https://api.sandbox.paypal.com/v1/payments/payment",
            { Details }, // you can get data details from https://developer.paypal.com/docs/api/payments/v1/
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${response.data.access_token}`
              }
            }
          )
          .then(response => {
            const { id, links } = response.data;
            const approvalUrl = links.find(data => data.rel == "approval_url");

            console.log(id);
            console.log(approvalUrl);
          })
          .catch(err => {
            console.log({ ...err });
          });
      })
      .catch(err => {
        console.log({ ...err });
      });
  }

  _onNavigationStateChange = webViewState => {
    if (webViewState.url.includes("https://c633ef6a.ngrok.io/")) {
      this.setState({
        approvalUrl: null
      });

      const { PayerID, paymentId } = webViewState.url;

      axios
        .post(
          `https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,
          { payer_id: PayerID },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.state.accessToken}`
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log({ ...err });
        });
    }
  };

  render() {
    const { approvalUrl } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        {approvalUrl ? (
          <WebView
            style={{ height: 400, width: 300 }}
            source={{ uri: approvalUrl }}
            onNavigationStateChange={this._onNavigationStateChange}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            style={{ marginTop: 20 }}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}
