import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from "react-native";
import { Formik } from "formik";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import LoginForm from "../authentication/LoginForm";

import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              style={{ flex: 1 }}
              source={require("../assets/images/blackberrydeath.png")}
              resizeMode={ImageResizeMode.contain}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.WelcomeText}>Welcome to {"\n"}FarmHub</Text>
              <Button
                onPress={handleLoginPress}
                title={"Login"}
                style={styles.loginbutton}
              ></Button>
              <Button
                onPress={handleCreateAccountPress}
                title={"Create Account"}
                style={styles.createAccbutton}
              ></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </NavigationContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleLoginPress() {
  this.props.navigation.navigate("LoginForm");
  // TODO : Navigate to LoginForm
}

function handleCreateAccountPress() {
  // TODO : Navigate to LoginForm
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30,
    padding: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: -30,
    marginBottom: -30
  },
  welcomeImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
    //alignSelf: 'stretch',
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  WelcomeText: {
    fontSize: 32,
    color: "rgba(122,193,122,1)",
    fontWeight: "bold",
    textAlign: "center"
  },

  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  loginbutton: {},
  createAccbutton: {}
});
