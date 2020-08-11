import * as React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export interface AppTextProps {
  children: React.ReactNode;
  style?: object;
}

const AppText: React.SFC<AppTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
});

export default AppText;
