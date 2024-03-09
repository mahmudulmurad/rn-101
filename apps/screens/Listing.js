import React from "react";
import { BaseScreen } from "./Base";
import { FlatList, StyleSheet } from "react-native";
import { Card } from "../component/Card";
import colors from "../config/colors";

const listItems = [
  {
    id: 1,
    title: "A master for sale.!",
    price: 999,
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 2,
    title: "A master for sale.!",
    price: 100,
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 3,
    title: "A master for sale.!",
    price: 350,
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 4,
    title: "A master for sale.!",
    price: 500,
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 5,
    title: "A master for sale.!",
    price: 600,
    image: require("../assets/lvb.jpg"),
  },
];
export const Listing = () => {
  return (
    <BaseScreen style={styles.container}>
      <FlatList
        data={listItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <Card
            key={index}
            title={item.title}
            description={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
