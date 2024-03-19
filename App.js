import { StyleSheet, Platform, StatusBar, View, Switch } from "react-native";
import { AppTextInput } from "./apps/component/AppTextInput";
import { useState } from "react";
import { AppPicker } from "./apps/component/AppPicker";
import { Login } from "./apps/screens/Login";
import { NewListing } from "./apps/screens/NewListing";
import Prac from "./apps/screens/Prac";
import { ImagePickerScreen } from "./apps/screens/ImagePicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Mobile", value: 2 },
  { label: "Clothing", value: 3 },
  { label: "Books", value: 4 },
  { label: "Devices", value: 5 },
];

export default function App() {
  const [state, setState] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const data = (e) => {
    setState(e);
  };

  return (
    <View style={styles.container}>
      {/* <AppTextInput placeholder="type your name" icon="email" />
      <Switch value={state} onValueChange={(e) => data(e)} />
      <AppPicker
        selectedItem={selectedCategory}
        onSelectItem={(item) => setSelectedCategory(item)}
        icon="apps"
        placeholder="Category"
        categories={categories}
      /> */}
      {/* <Login /> */}
      {/* <NewListing /> */}
      {/* <Prac /> */}
      <ImagePickerScreen />
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
