import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "../screens/WelcomePage";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomePage}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
export default AuthNavigator;
