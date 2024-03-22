import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { BaseScreen } from "./Base";
import { AppForm, AppFormFiled, AppFormSubmitButton } from "../component/form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export const Register = () => {
  return (
    <BaseScreen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFiled
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormFiled
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormFiled
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Register" />
      </AppForm>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
