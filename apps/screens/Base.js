import { StyleSheet, View } from "react-native";

export const BaseScreen = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: { flex: 1 },
});
