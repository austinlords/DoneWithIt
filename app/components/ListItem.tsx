import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import { COLORS } from "../theme";

export interface ListItemProps {
  image: any;
  title: string;
  subtitle: string;
}

const ListItem: React.SFC<ListItemProps> = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subtitle: {
    fontWeight: "400",
    color: COLORS.medium,
    fontSize: 18
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  }
});

export default ListItem;
