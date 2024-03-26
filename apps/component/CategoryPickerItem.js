import React from "react";
import { AppText } from "./AppText";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "./Icon";

export const CategoryPickerItem = ({ one, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon bgColor={one?.bgColor} name={one?.icon} size={80} />
        <AppText style={styles.text}>{one?.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});
