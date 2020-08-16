import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "../theme";

export interface ListItemSeparatorProps {}

const ListItemSeparator: React.SFC<ListItemSeparatorProps> = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.lightGray
  }
});

export default ListItemSeparator;
