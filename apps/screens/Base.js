import { StyleSheet, View } from "react-native";

export const BaseScreen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
