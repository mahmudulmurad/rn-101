import React from "react";
import { Image, StyleSheet } from "react-native";
import { BaseScreen } from "./Base";
import * as Yup from "yup";
import { AppForm, AppFormFiled, AppFormSubmitButton } from "../component/form";

const formValidation = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export const Login = () => {
  return (
    <BaseScreen style={styles.container}>
      <Image source={require("../assets/lvb.jpg")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={formValidation}
      >
        <AppFormFiled
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormFiled
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <AppFormSubmitButton title="Login" />
      </AppForm>
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 50,
  },
});
