import * as React from "react";
import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView, FlatList } from "react-native-gesture-handler";

export default class TicketsScreen extends React.Component {
  state = {
    fields: [
      {
        name: "Strawberries",
        imageSrc: require("../assets/images/strawberry.png")
      },
      {
        name: "Potato",
        imageSrc: "SP20-P05-Mobileassetsimagestaters.png"
      },
      {
        name: "Corn",
        imageSrc: "SP20-P05-Mobile/assets/images/cornpickin.png"
      }
    ]
  };

  handleButton = () => {
    this.setState({});
  };

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/strawberry.png")}
                style={{ width: 50, height: 50 }}
              />
              <Image
                source={require("../assets/images/taters.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ padding: 10 }}>{item.name}</Text>
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
  }
});
