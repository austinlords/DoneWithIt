import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/Card";
import { COLORS } from "../theme";

export interface ListingsScreenProps {}

const ListingsScreen: React.SFC<ListingsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHolder}>
        <Card
          title="Red Jacket for Sale!"
          subtitle="$100"
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={styles.cardHolder}>
        <Card
          title="Couch in great condition"
          subtitle="$1000"
          image={require("../assets/couch.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: COLORS.lightGray
  },
  cardHolder: {
    paddingHorizontal: 30,
    marginBottom: 20
  }
});
export default ListingsScreen;
