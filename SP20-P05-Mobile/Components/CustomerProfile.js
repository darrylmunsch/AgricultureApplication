import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ButtonStyle, profile } from "../StyleSheets";
import { connect } from "react-redux";
import Axios from "axios";
import { baseurl } from "../Constants";
import Button from "../Components/Button";
import QRCode from "../Components/QRCode";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tickets: null,
      error: null,
      visible: false,
      ticketData: null,
    };
  }

  getTickets = () => {
    console.log("tickets: " + this.state.tickets);
    this.setState({ loading: true });
    const api = Axios.create({
      baseURL: baseurl,
    });
    let id = this.props.auth.user?.id;
    api.get(`api/farm-field-tickets/${id}/userTickets`).then((res) => {
      console.log(res.data);
      this.setState({
        tickets: res.data,
        loading: false,
      });
    });
    console.log("tickets2: " + this.state.tickets);
  };
  getFieldName = (id) => {
    switch (id) {
      case 1:
        return "Blueberry";
      case 2:
        return "Blackberry";
      case 3:
        return "Strawberry";
    }
  };
  toggleModal = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        {this.state.loading ? (
          <ActivityIndicator style={{ color: "white", alignSelf: "center" }} />
        ) : this.state.tickets && this.state.tickets !== [] ? (
          <View>
            {this.state.tickets.map((ticket, index) => (
              <View key={index}>
                <Text
                  style={{
                    color: "#e1ffdf",
                    fontSize: 25,
                  }}
                >
                  {this.getFieldName(ticket.farmFieldId)} Field Ticket
                </Text>
                <Text>
                  Id:
                  {ticket.id}
                </Text>
                <Text>
                  Time Slot:
                  {ticket.ticketTimeSlot}
                </Text>
                <Text>
                  small Buckets:
                  {ticket.smallBucketQty}
                </Text>
                <Text>
                  medium Buckets:
                  {ticket.mediumBucketQty}
                </Text>
                <Text>
                  large Buckets:
                  {ticket.largeBucketQty}
                </Text>
                <Button
                  label={"Get ticket QR code"}
                  onPress={this.toggleModal}
                  style={[ButtonStyle.light, { width: 200 }]}
                  textStyle={ButtonStyle.lightText}
                />
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <QRCode
                    style={{ justifyContent: "center" }}
                    visible={this.state.visible}
                    toggleModal={this.toggleModal}
                    ticket={ticket}
                  />
                </View>
              </View>
            ))}
            {this.state.error ? (
              <Text style={{ color: "red" }}>{this.state.error}</Text>
            ) : null}
          </View>
        ) : (
          <View>
            <Text>{this.state.error}</Text>
            <Button
              label={"Check Tickets"}
              onPress={this.getTickets}
              style={[ButtonStyle.light, { width: 200 }]}
              textStyle={ButtonStyle.lightText}
            />
          </View>
        )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}

export default connect(mapStateToProps)(CustomerProfile);
