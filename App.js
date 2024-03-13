import { StyleSheet, Platform, StatusBar, View, Switch } from "react-native";
import { AppTextInput } from "./apps/component/TextInput";
import { useState } from "react";
import { AppPicker } from "./apps/component/AppPicker";

export default function App() {
  const [state, setState] = useState(false);
  const data = (e) => {
    console.log(e);
    setState(e);
  };

  return (
    <View style={styles.container}>
      <AppTextInput placeholder="type your name" icon="email" />
      <Switch value={state} onValueChange={(e) => data(e)} />
      <AppPicker icon="apps" placeholder="Category" />
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
