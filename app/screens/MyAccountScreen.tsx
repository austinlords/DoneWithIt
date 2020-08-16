import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { COLORS } from "../theme";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/ListItemSeparator";

export interface MyAccountScreenProps {}

const MyAccountScreen: React.SFC<MyAccountScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamadani"
        subtitle="programmingwithmosh@gmail.com"
        style={{
          backgroundColor: COLORS.white,
          marginTop: 30,
          marginBottom: 50
        }}
      />
      <View style={styles.menuItemsContainer}>
        <MenuItem
          iconColor="primary"
          text="My Listings"
          iconName="format-list-bulleted"
          onPress={() => console.log("pressed My Listings")}
        />
        <ListItemSeparator />
        <MenuItem
          iconColor="secondary"
          text="My Messages"
          iconName="email"
          onPress={() => console.log("pressed My Messages")}
        />
      </View>
      <MenuItem
        iconColor="yellow"
        text="Log Out"
        iconName="logout"
        onPress={() => console.log("pressed Log Out")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray
  },
  menuItemsContainer: {
    marginBottom: 20
  }
});

export default MyAccountScreen;
