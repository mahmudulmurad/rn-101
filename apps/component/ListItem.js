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
            <Text style={styles.text.title}>{title}</Text>
            {description && (
              <Text style={styles.text.description}>{description}</Text>
            )}
          </View>
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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    objectFit: "cover",
  },
  text: {
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
