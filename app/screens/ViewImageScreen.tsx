import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  View
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../theme";

const chairImage = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closePlaceholder}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deletePlaceholder}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image source={chairImage} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.black
  },
  closePlaceholder: {
    height: 50,
    width: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    top: StatusBar.currentHeight || 40
  },
  deletePlaceholder: {
    height: 50,
    width: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 30,
    top: StatusBar.currentHeight || 40
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  }
});
