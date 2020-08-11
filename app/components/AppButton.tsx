import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent
} from "react-native";

import { COLORS, ColorsType } from "../theme";

export interface AppButtonProps {
  color: ColorsType;
  children?: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const AppButton: React.SFC<AppButtonProps> = ({
  color = COLORS.primary,
  children,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[styles.shape, { backgroundColor: COLORS[color as ColorsType] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
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
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default AppButton;
