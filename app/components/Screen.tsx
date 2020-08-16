import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, ViewStyle } from "react-native";

export interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Screen: React.SFC<ScreenProps> = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});
