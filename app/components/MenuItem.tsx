import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  GestureResponderEvent,
  ViewStyle
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, ColorsType } from "../theme";
import AppText from "./AppText";

export interface MenuItemProps {
  iconName: string;
  iconColor: ColorsType;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  style?: ViewStyle;
}

const MenuItem: React.SFC<MenuItemProps> = ({
  iconName,
  iconColor = COLORS.primary,
  onPress,
  text,
  style
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.container, style]}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: COLORS[iconColor as ColorsType] }
          ]}
        >
          <MaterialCommunityIcons name={iconName} color="white" size={20} />
        </View>
        <View style={styles.textContainer}>
          <AppText>{text}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 10,
    flexDirection: "row"
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  textContainer: {
    justifyContent: "center"
  }
});

export default MenuItem;
