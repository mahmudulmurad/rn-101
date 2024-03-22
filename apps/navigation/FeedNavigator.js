import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listing } from "../screens/Listing";
import ListingDetails from "../screens/ListingDetails";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={Listing} />
    <Stack.Screen name="ListingDetails" component={ListingDetails} />
  </Stack.Navigator>
);
export default FeedNavigator;
