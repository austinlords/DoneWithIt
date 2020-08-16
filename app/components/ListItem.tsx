import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  GestureResponderEvent,
  ViewStyle
} from "react-native";
// @ts-ignore
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import { COLORS } from "../theme";

export interface ListItemProps {
  image: any;
  title: string;
  subtitle: string;
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

const ListItem: React.SFC<ListItemProps> = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  style
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={COLORS.lightGray} onPress={onPress}>
        <View style={[styles.container, style]}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
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
