import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  TextInputProps
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export interface AppTextInputProps extends TextInputProps {
  icon?: string;
}

const AppTextInput: React.SFC<AppTextInputProps> = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={defaultStyles.colors.medium}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
});

export default AppTextInput;
