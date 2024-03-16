import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "../AppText";

export const ErrorText = ({ error, visible }) => {
  if (!error) {
    return null;
  }
  if (!visible) {
    return null;
  }
  return <AppText style={styles.container}>{error}</AppText>;
};

const styles = StyleSheet.create({
  container: {
    color: "red",
    marginBottom: 5,
  },
});
