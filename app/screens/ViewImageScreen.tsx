import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  View
} from "react-native";

import { colors } from "../constants";

const chairImage = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closePlaceholder}></View>
      <View style={styles.deletePlaceholder}></View>
      <Image source={chairImage} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black
  },
  closePlaceholder: {
    height: 50,
    width: 50,
    backgroundColor: colors.red,
    position: "absolute",
    left: 30,
    top: StatusBar.currentHeight || 40
  },
  deletePlaceholder: {
    height: 50,
    width: 50,
    backgroundColor: colors.green,
    position: "absolute",
    right: 30,
    top: StatusBar.currentHeight || 40
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  }
});
