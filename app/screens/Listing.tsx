import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/Card";
import { COLORS } from "../theme";

export interface ListingProps {}

const Listing: React.SFC<ListingProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHolder}>
        <Card
          title="Red Jacket for Sale!"
          subtitle="$100"
          image={require("../assets/jacket.jpg")}
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
    height: 500,
    padding: 30,
    marginBottom: 20
  }
});
export default Listing;
