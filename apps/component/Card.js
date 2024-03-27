import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Card = ({ title, description, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 10,
    elevation: 3, // Added elevation for shadow on Android
  },
  image: {
    width: "100%",
    height: 150, // Removed "px" from height
    borderRadius: 5,
    resizeMode: "cover", // Changed objectFit to resizeMode
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    color: colors.tomato,
  },
});
