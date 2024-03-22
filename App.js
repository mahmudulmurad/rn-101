import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BaseScreen } from "./apps/screens/Base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./apps/navigation/AuthNavigator";
import navigationTheme from "./apps/navigation/navigationTheme";
import AppBottomTabNavigator from "./apps/navigation/AppNavigator";

const Link = () => {
  const nav = useNavigation();
  return (
    <Button
      title="Click me"
      onPress={() => nav.navigate("TweetDetails", { id: 50 })}
    />
  );
};
const Tweet = ({ navigation }) => {
  return (
    <BaseScreen>
      <Text>Tweets</Text>
      {/* <Button
        title="view tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 100 })}
      />
      */}
      <Link />
    </BaseScreen>
  );
};
const TweetDetails = ({ navigation, route }) => {
  return (
    <BaseScreen>
      <Text>Tweets Details {route.params.id}</Text>
      <Button title="tweet" onPress={() => navigation.navigate("Tweet")} />
    </BaseScreen>
  );
};

const Account = () => {
  return (
    <BaseScreen>
      <Text>Account</Text>
    </BaseScreen>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweet" component={Tweet} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "tomato",
          activeTintColor: "white",
          inactiveBackgroundColor: "white",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Tweet"
          component={Tweet}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="axe" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <AppBottomTabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
  },
});
