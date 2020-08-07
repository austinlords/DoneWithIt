import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Platform,
  StatusBar,
  View,
  ImageBackground
} from "react-native";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");
import { colors } from "../constants";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.logoHolder}>
          <Image source={logo} style={styles.logo} />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonHolder}>
          <View style={styles.login}></View>
          <View style={styles.register}></View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-between"
  },
  backgroundImage: {
    flex: 1
  },
  logoHolder: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    paddingTop: 80
  },
  buttonHolder: {
    height: "15%",
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100
  },
  login: {
    flex: 1,
    backgroundColor: colors.red
  },
  register: {
    flex: 1,
    backgroundColor: colors.green
  }
});
