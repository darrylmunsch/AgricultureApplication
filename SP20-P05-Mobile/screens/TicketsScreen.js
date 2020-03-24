import * as React from "react";
import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  RectButton,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native-gesture-handler";

export default class TicketsScreen extends React.Component {
  state = {
    fields: [
      {
        name: "Strawberries",
        source: "https://i.imgur.com/B7Ui6fk.png"
      },
      {
        name: "Potato",
        source: "https://i.imgur.com/QjEb5As.png"
      },
      {
        name: "Corn",
        source: "https://i.imgur.com/iDHW7B9.png"
      },
      {
        name: "BlackBerries",
        source: "https://i.imgur.com/ERdwVwR.png"
      }
    ]
  };

  handleTap = item => {
    this.setState({});
  };

  // object declared with  {} not preceded by =>
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, width: "100%", backgroundColor: "black" }}
            />
          )}
          data={this.state.fields}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleTap(item)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.source }}
                  style={{ width: 80, height: 80, borderRadius: 35 }}
                />
                <Text style={{ padding: 10 }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
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
  }
});
