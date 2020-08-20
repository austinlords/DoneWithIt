import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, ViewStyle, View } from "react-native";

export interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Screen: React.SFC<ScreenProps> = ({ children, style }) => {
  return (
    // padding is applying on Android but not iOS
    <SafeAreaView style={[style, styles.screen]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    padding: 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});
