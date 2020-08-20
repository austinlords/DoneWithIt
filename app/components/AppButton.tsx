import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ButtonProps
} from "react-native";

import defaultStyles from "../config/styles";

export interface AppButtonProps extends ButtonProps {
  color: string;
  onPress: () => void;
  title: string;
}

const AppButton: React.SFC<AppButtonProps> = ({
  color = defaultStyles.colors.primary,
  onPress,
  title
}) => {
  return (
    <TouchableOpacity
      style={[styles.shape, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shape: {
    height: 50,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  text: {
    textTransform: "uppercase",
    color: defaultStyles.colors.white,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default AppButton;
