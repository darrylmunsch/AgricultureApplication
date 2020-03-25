import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  Modal,
  Button,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  RectButton,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default class TicketsScreen extends React.Component {
  openTwoButtonAlert = () => {
    Alert.alert(
      "Confirm Purchase?",
      "",
      [
        { text: "Yes", onPress: () => Alert.alert("Purchase Completed!") },
        {
          text: "No",
          onPress: () => Alert.alert("Purchase Canceled!"),
          style: "cancel"
        }
      ],
      {
        cancelable: true
      }
    );
  };

  state = {
    modalVisible: false,
    modalVisible: false,
    clicks: 0,
    //[
    //   {
    //     name: "Strawberries",
    //     amount: 0
    //   },
    //   {
    //     name: "Potato",
    //     amount: 0
    //   },
    //   {
    //     name: "BlackBerry",
    //     amount: 0
    //   },
    //   {
    //     name: "Corn",
    //     amount: 0
    //   }
    // ],
    // strawBerryClicks: 0,
    // potatoClicks: 0,
    // blackBerryClicks: 0,
    // cornClicks: 0,

    fields: [
      {
        name: "Strawberries",
        source: "https://i.imgur.com/B7Ui6fk.png"
        //amount: 0
      },
      {
        name: "Potato",
        source: "https://i.imgur.com/QjEb5As.png"
        //amount: 0
      },
      {
        name: "Corn",
        source: "https://i.imgur.com/iDHW7B9.png"
        //amount: 0
      },
      {
        name: "BlackBerries",
        source: "https://i.imgur.com/ERdwVwR.png"
        //amount: 0
      }
    ]
  };

  handleTap = item => {
    this.setState({});
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  setModalNotVisible(visible) {
    this.setState({ modalVisible: !visible });
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  TotalClicks = () => {};

  // object declared with  {} not preceded by =>
  render() {
    return (
      <View style={styles.container}>
        <Text name="totalClicks">
          Total Items: {this.state.clicks} {"\n"} Total Price:
        </Text>
        <Button
          title="Purchase"
          style={{ paddingTop: 20, alignItems: "seperate" }}
          onPress={this.openTwoButtonAlert}
        ></Button>

        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, width: "100%", backgroundColor: "black" }}
            />
          )}
          data={this.state.fields}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.source }}
                  style={{ width: 80, height: 80, borderRadius: 35 }}
                />
                <Text style={{ padding: 10 }}>{item.name}</Text>
                <Text style={{ padding: 10 }}>{this.state.clicks}</Text>
              </View>
              <View>
                <Text name="itemClicks">
                  {this.state.clicks}
                  {item.name}
                </Text>
                <Button
                  title="+"
                  onPress={this.IncrementItem}
                  style={{ flexDirection: "Fit", alignitems: "right" }}
                ></Button>
                <Button
                  title="-"
                  onPress={this.DecreaseItem}
                  style={{ alignitems: "right" }}
                ></Button>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff"
  },
  totalClicks: {
    alignItems: "flex-end"
  }
});
