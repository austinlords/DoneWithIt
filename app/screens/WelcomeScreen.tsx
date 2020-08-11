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

import AppButton from "../components/AppButton";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={backgroundImage}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.logoHolder}>
          <Image source={logo} style={styles.logo} />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Sell What You Don't Need
          </Text>
        </View>
        <View style={styles.buttonHolder}>
          <AppButton onPress={() => console.log("tapped")} color="primary">
            login
          </AppButton>
          <AppButton onPress={() => console.log("tapped")} color="secondary">
            register
          </AppButton>
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
    height: 150,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30
  }
});
