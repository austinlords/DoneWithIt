import React from "react";
import { TextInput, StyleSheet } from "react-native";
import AppText from "./AppText";

export interface ErrorMessageProps {
  error?: string;
  visible?: boolean;
}

const ErrorMessage: React.SFC<ErrorMessageProps> = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.text}>{error}</AppText>;
};

const styles = StyleSheet.create({
  text: {
    color: "red"
  }
});

export default ErrorMessage;
