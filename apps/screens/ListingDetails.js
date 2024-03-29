import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import { ListItem } from "../component/ListItem";
import { AppText } from "../component/AppText";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListingDetails({ route }) {
  const listing = route.params;

  return (
    <GestureHandlerRootView>
      <Image style={styles.image} source={{ uri: listing.url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.id}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/lvb.jpg")}
            title="L Van"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondery,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetails;
