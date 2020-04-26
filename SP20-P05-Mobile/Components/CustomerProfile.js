import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { ButtonStyle, profile } from "../StyleSheets";
import { connect } from "react-redux";
import Axios from "axios";
import { baseurl } from "../Constants";
import Button from "../Components/Button";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tickets: null,
      error: null,
    };
  }

  getTickets = () => {
    this.setState({ loading: true });
    const api = Axios.create({
      baseURL: baseurl,
    });
    let id = this.props.auth.user?.id;
    console.log("id: " + id);
    api.get(`api/farm-field-tickets/${id}/userTickets`).then((res) => {
      console.log(res.data);
      this.setState({
        tickets: res.data,
        loading: false,
      }).catch((err) => {
        console.log("error catch");
        this.setState({
          loading: false,
          error: err,
        });
      });
    });
  };

  render() {
    return (
      <View>
        <Text>customer page</Text>
        {this.state.loading ? (
          <ActivityIndicator style={{ color: "white", alignSelf: "center" }} />
        ) : this.state.tickets ? (
          <View>
            <Text>Tickets Found</Text>
            {this.state.error ? (
              <Text style={{ color: "red" }}>{this.state.error}</Text>
            ) : null}
          </View>
        ) : (
          <View>
            <Text>No Tickets Available</Text>
            <Button
              label={"Check Tickets"}
              onPress={this.getTickets}
              style={ButtonStyle.light}
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
