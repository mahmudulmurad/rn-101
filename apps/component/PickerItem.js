import React from "react";
import { AppText } from "./AppText";
import { TouchableOpacity, StyleSheet } from "react-native";

export const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
