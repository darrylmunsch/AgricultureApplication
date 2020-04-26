import React, { Component } from "react";
import QRCode from "react-native-qrcode-svg";
import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./Button";
import { ButtonStyle } from "../StyleSheets";

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.visible}
        >
          <View style={styles.centeredView}>
            <QRCode
              value={JSON.stringify(this.props.ticket)}
              color={"green"}
              backgroundColor={"white"}
              size={200}
            />
            <Button
              style={[ButtonStyle.light, { marginTop: 10 }]}
              textStyle={ButtonStyle.lightText}
              onPress={() => this.props.toggleModal()}
              label={"Done"}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default QrCode;
