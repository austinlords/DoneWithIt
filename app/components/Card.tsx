import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import { COLORS } from "../theme";

export interface CardProps {
  title: string;
  subtitle: string;
  image: any;
}

const Card: React.SFC<CardProps> = ({ title, subtitle, image }: CardProps) => {
  return (
    <>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  text: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontWeight: "600",
    marginBottom: 10
  },
  subtitle: {
    color: COLORS.secondary,
    fontWeight: "bold"
  }
});

export default Card;
