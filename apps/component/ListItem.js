import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "./AppText";

export const ListItem = ({
  title,
  image,
  description,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.text}>
            <AppText style={styles.text.title} numberOfLines={1}>
              {title}
            </AppText>
            {description && (
              <AppText style={styles.text.description} numberOfLines={2}>
                {description}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    objectFit: "cover",
  },
  text: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    title: {
      fontWeight: "500",
    },
    description: {
      color: "#6e6969",
    },
  },
});
