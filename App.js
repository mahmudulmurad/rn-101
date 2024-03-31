import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./apps/navigation/AuthNavigator";
import navigationTheme from "./apps/navigation/navigationTheme";
import AppBottomTabNavigator from "./apps/navigation/AppNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./apps/auth/AuthContext";
import authStore from "./apps/auth/Store";
import "core-js/stable/atob";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStore.getuser();
    setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppBottomTabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
  },
});
