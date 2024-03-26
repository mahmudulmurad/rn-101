import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listing } from "../screens/Listing";
import ListingDetails from "../screens/ListingDetails";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Listing} component={Listing} />
    <Stack.Screen name={Routes.Listing_Details} component={ListingDetails} />
  </Stack.Navigator>
);
export default FeedNavigator;
