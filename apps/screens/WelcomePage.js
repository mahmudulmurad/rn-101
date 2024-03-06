import { ImageBackground, StyleSheet } from "react-native";

export const WelcomePage = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/lvb.jpg")}
      resizeMode="cover"
    ></ImageBackground>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
