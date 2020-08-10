import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../theme";

const Button = ({
  color = COLORS.primary,
  children
}: {
  width?: string | number;
  color?: string;
  children?: React.ReactNode;
}) => {
  return (
    <View style={[styles.shape, { backgroundColor: COLORS[color] || color }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shape: {
    height: 50,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Button;
