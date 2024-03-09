import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Card = ({ title, description, image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.text.title}>{title}</Text>
        <Text style={styles.text.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "150px",
    borderRadius: "5px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  text: {
    marginBottom: "10px",
    marginLeft: 10,
    title: {
      fontWeight: "500",
      marginBottom: "10px",
    },
    description: {
      color: "tomato",
    },
  },
});
