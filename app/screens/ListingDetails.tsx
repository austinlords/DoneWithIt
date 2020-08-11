import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { COLORS } from "../theme";
import ListItem from "../components/ListItem";

export interface ListingDetailsProps {}

const ListingDetails: React.SFC<ListingDetailsProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/jacket.jpg")}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
        <ListItem
          title="Mosh Hamedani"
          subtitle="5 Listings"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: "row"
  },
  authorImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 10
  },
  authorName: {
    fontSize: 18,
    marginBottom: 5
  },
  authorListings: {
    fontWeight: "400",
    color: "gray",
    fontSize: 18
  },
  container: {
    flex: 1
  },
  content: {
    padding: 20
  },
  coverImage: {
    resizeMode: "cover",
    width: "100%",
    height: 300
  },
  price: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10
  }
});

export default ListingDetails;
