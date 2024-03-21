import { StyleSheet, Platform, StatusBar, View } from "react-native";
import { NewListing } from "./apps/screens/NewListing";

export default function App() {
  return (
    <View style={styles.container}>
      <NewListing />
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
