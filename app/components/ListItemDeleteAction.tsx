import React from "react";
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../theme";

export interface ListItemDeleteActionProps {
  onPress: (event: GestureResponderEvent) => void;
}

const ListItemDeleteAction: React.SFC<ListItemDeleteActionProps> = ({
  onPress
}) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.lightDanger}
      style={styles.container}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={COLORS.white}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.danger,
    width: 70,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListItemDeleteAction;
