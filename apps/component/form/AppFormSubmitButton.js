import { useFormikContext } from "formik";
import React from "react";
import { Button, StyleSheet } from "react-native";

export const AppFormSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      color="crimson"
      style={styles.loginButton}
      onPress={handleSubmit}
    />
  );
};
const styles = StyleSheet.create({
  loginButton: {
    padding: 10,
    borderRadius: 35,
  },
});
