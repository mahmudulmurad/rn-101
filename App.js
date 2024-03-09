import { StyleSheet, Platform, StatusBar, View } from "react-native";
import { Account } from "./apps/screens/Account";
import { Listing } from "./apps/screens/Listing";
export default function App() {
  return (
    <View style={styles.container}>
      <Listing />
      {/* <Account /> */}
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
