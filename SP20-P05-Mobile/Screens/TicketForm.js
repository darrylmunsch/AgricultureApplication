import React, { Component } from "react";
import { Text, View, Picker, FlatList } from "react-native";
import { ticketForm } from "../StyleSheets";
import Button from "../Components/Button";
import {baseurl, BucketPrices, Fields} from "../Constants";
import FormTextInput from "../Components/FormTextInput";
import DismissKeyboard from "../Components/DismissKeyboard";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
import {connect} from "react-redux";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "Choose Field...",
      farmFieldId: null,
      step: 1,
      smBucketPrice: "",
      mdBucketPrice: "",
      lgBucketPrice: "",
      numSmBucket: 0,
      numMdBucket: 0,
      numLgBucket: 0,
      errorSm: "",
      errorMd: "",
      errorLg: "",
      ticketTotal: "",
      finalTicket: {
        id:1,
        field: "",
        totalCost: "",
        smBuckets: 0,
        mdBuckets: 0,
        lgBuckets: 0,
      },
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selectedField !== this.state.selectedField) {
      this.setBucketPrice(this.state.selectedField);
    }
    if (prevState.numSmBucket !== this.state.numSmBucket) {
      this.getTotal();
    } else if (prevState.numMdBucket !== this.state.numMdBucket) {
      this.getTotal();
    } else if (prevState.numLgBucket !== this.state.numLgBucket) {
      this.getTotal();
    }
  }

  setBucketPrice = (field) => {
    switch (field) {
      case "Blue Berries":
        this.setState({
          smBucketPrice: BucketPrices.BlueberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.BlueberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.BlueberryField.lgBucketPrice,
        });
        return;
      case "Black Berries":
        this.setState({
          smBucketPrice: BucketPrices.BlackberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.BlackberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.BlackberryField.lgBucketPrice,
        });
        return;
      case "Strawberries":
        this.setState({
          smBucketPrice: BucketPrices.StrawberryField.smBucketPrice,
          mdBucketPrice: BucketPrices.StrawberryField.mdBucketPrice,
          lgBucketPrice: BucketPrices.StrawberryField.lgBucketPrice,
        });
        return;
    }
  };

  setValue = (item) => {
    this.setState({
      selectedField: item,
    });
  };

  increaseStep = () => {
    if (this.state.selectedField !== "Choose Field...") {
      this.setState({
        step: 2,
      });
    }
  };

  decreaseStep = () => {
    this.setState({
      step: 1,
    });
  };

  findFarmFieldId = async() =>{

    const getFarmFieldIdUrl = baseurl + '/get-by-name/' + this.state.selectedField

    const getFarmFieldNameRequest = await axios.get(getFarmFieldIdUrl);

    alert(getFarmFieldNameRequest.data.id)

    this.setState({farmFieldId: getFarmFieldNameRequest.data.id})

    this.increaseStep()
  }

  goToPurchase = async () => {
    this.setState({
      finalTicket: {
        field: this.state.selectedField,
        totalCost: this.state.ticketTotal,
        smBuckets: this.state.smBuckets,
        mdBuckets: this.state.mdBuckets,
        lgBuckets: this.state.lgBuckets,
      },
    });

    let ticket = {
      'id': 1,
      'ticketTimeSlot' : '9999-04-25T01:56:33.09Z',
      'smallBucketQty': this.state.finalTicket.smBuckets,
      'mediumBucketQty': this.state.finalTicket.mdBuckets,
      'largeBucketQty' : this.state.finalTicket.lgBuckets,
      'farmFieldId' : this.state.farmFieldId,
      'userId': this.props.auth.user.id
    }

    alert(this.props.auth.user.id)

    let createTicketUrl = baseurl + '/api/farm-field-tickets'

     let thing = axios.post( createTicketUrl,ticket,
        {headers:{
        'Content Type': 'application/json'
      }}).then( (res) =>{
        alert(res.data.id)
       alert(res.status)
     }).catch( (error) =>{
       alert(error)
     })

    this.props.navigation.navigate("WebView", {
      ticket: this.state.finalTicket,
    });
  };

  setNumSmBuckets = (value) => {
    const isnum = /^\d+$/.test(value);
    if (!isnum) {
      this.setState({
        errorSm: "invalid",
      });
    } else {
      this.setState({
        errorSm: "",
        numSmBucket: value,
      });
    }
  };

  setNumMdBuckets = (value) => {
    const isnum = /^\d+$/.test(value);
    if (!isnum) {
      this.setState({
        errorMd: "invalid",
      });
    } else {
      this.setState({
        errorMd: "",
        numMdBucket: value,
      });
    }
  };

  setNumLgBuckets = (value) => {
    const isnum = /^\d+$/.test(value);
    if (!isnum) {
      this.setState({
        errorLg: "invalid",
      });
    } else {
      this.setState({
        errorLg: "",
        numLgBucket: value,
      });
    }
  };

  getTotal = () => {
    const totalSm = this.state.smBucketPrice * this.state.numSmBucket;
    const totalMd = this.state.mdBucketPrice * this.state.numMdBucket;
    const totalLg = this.state.lgBucketPrice * this.state.numLgBucket;
    const total = totalSm + totalMd + totalLg;
    this.setState({
      ticketTotal: total,
    });
  };

  render() {
    const selectedField = this.state.selectedField;
    return (
      <DismissKeyboard>
        <View style={ticketForm.container1}>
          {this.state.step === 1 ? (
            <View style={ticketForm.container1}>
              <Text style={ticketForm.header}>{this.state.selectedField}</Text>
              <Picker
                selectedValue={selectedField}
                style={ticketForm.picker}
                onValueChange={this.setValue}
              >
                <Picker.Item
                  label={"Choose Field..."}
                  value={"Choose Field..."}
                />
                <Picker.Item label={"Blueberry"} value={"Blue Berries"} />
                <Picker.Item label={"Blackberry"} value={"Black Berries"} />
                <Picker.Item label={"Strawberry"} value={"Strawberries"} />
              </Picker>
              <Button
                label={"Select Field"}
                onPress={this.findFarmFieldId}
                style={ticketForm.buttonBottom}
              />
              <View style={{ backgroundColor: "#90ee90" }} />
            </View>
          ) : null}
          {this.state.step === 2 ? (
            <View>
              <View style={ticketForm.inputContainer}>
                <Text style={{ fontSize: 30, paddingBottom: 10 }}>
                  {selectedField}
                </Text>
                <Text style={{ fontSize: 20, paddingBottom: 30 }}>
                  Please pick your bucket(s)
                </Text>
                <Text>Small Bucket Price: ${this.state.smBucketPrice}</Text>
                <FormTextInput
                  style={{
                    width: 200,
                    color: "#90cd9e",
                    borderColor: "#90cd9e",
                    textAlign: "center",
                  }}
                  placeholder={"How many small buckets?"}
                  keyboardType={"numeric"}
                  onChangeText={this.setNumSmBuckets}
                />
                {this.state.error !== "" ? (
                  <Text style={{ color: "#ff0000" }}>{this.state.errorSm}</Text>
                ) : null}
                <Text>Medium Bucket Price: ${this.state.mdBucketPrice}</Text>
                <FormTextInput
                  style={{
                    width: 200,
                    color: "#90cd9e",
                    borderColor: "#90cd9e",
                    textAlign: "center",
                  }}
                  placeholder={"How many medium buckets?"}
                  keyboardType={"numeric"}
                  onChangeText={this.setNumMdBuckets}
                />
                {this.state.error !== "" ? (
                  <Text style={{ color: "#ff0000" }}>{this.state.errorMd}</Text>
                ) : null}
                <Text>Large Bucket Price: ${this.state.lgBucketPrice}</Text>
                <FormTextInput
                  style={{
                    width: 200,
                    color: "#90cd9e",
                    borderColor: "#90cd9e",
                    textAlign: "center",
                  }}
                  placeholder={"How many large buckets?"}
                  keyboardType={"numeric"}
                  onChangeText={this.setNumLgBuckets}
                />
                {this.state.error !== "" ? (
                  <Text style={{ color: "#ff0000" }}>{this.state.errorLg}</Text>
                ) : null}
                <Text>Ticket Total: ${this.state.ticketTotal}</Text>
              </View>
              <View style={ticketForm.navigationView}>
                <View style={ticketForm.navigateBackView}>
                  <MaterialIcon
                    name={"navigate-before"}
                    color={"green"}
                    size={25}
                  />
                  <Text
                    style={ticketForm.navigateBack}
                    onPress={() => this.decreaseStep()}
                  >
                    Back
                  </Text>
                </View>
                <View style={ticketForm.navigateNextView}>
                  <Text
                    style={ticketForm.navigateNext}
                    onPress={() => this.goToPurchase()}
                  >
                    Next
                  </Text>
                  <MaterialIcon
                    name={"navigate-next"}
                    color={"green"}
                    size={25}
                  />
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </DismissKeyboard>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
  };
}


export default connect(mapStateToProps)(TicketForm);
