import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "../screens/Account";
import Messages from "../screens/Message";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={Account}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
);
export default AccountNavigator;
