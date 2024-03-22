import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NewListing } from "../screens/NewListing";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { NewListingButton } from "./NewListingButton";
import Routes from "./Routes";

const Tab = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="NewListing"
        component={NewListing}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(Routes.NewListing)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="account" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppBottomTabNavigator;
