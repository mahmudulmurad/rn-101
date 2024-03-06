import { StyleSheet, Platform, StatusBar, View, Text } from "react-native";

import Prac from "./apps/screens/Prac";
export default function App() {
  return (
    <View style={styles.container}>
      <Prac />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  border: {
    text: {
      fontSize: 30,
      fontFamily: "Roboto",
      color: "tomato",
    },
  },
});
