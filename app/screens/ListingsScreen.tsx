import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import { COLORS } from "../theme";

const DATA = [
  {
    id: 1,
    title: "Red Jacket for Sale!",
    subtitle: 100,
    image: require("../assets/jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition",
    subtitle: 1000,
    image: require("../assets/couch.jpg")
  }
];

export interface ListingsScreenProps {}

const ListingsScreen: React.SFC<ListingsScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardHolder}>
            <Card
              title={item.title}
              subtitle={"$" + item.subtitle}
              image={item.image}
            />
          </View>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.lightGray
  },
  cardHolder: {
    marginBottom: 20
  }
});
export default ListingsScreen;
