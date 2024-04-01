import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { BaseScreen } from "./Base";
import * as Yup from "yup";
import {
  AppForm,
  AppFormFiled,
  AppFormSubmitButton,
  ErrorText,
} from "../component/form";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApiWorker from "../hooks/API";
import { LoadingIndicator } from "../component/LoadingIndicator";

const formValidation = Yup.object().shape({
  username: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

export const Login = () => {
  const userAuth = useAuth();
  const loginApi = useApiWorker(authApi.login);

  const [failedStatus, setFailedStatus] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const res = await loginApi.request(username, password);

    if (!res.ok) setFailedStatus(true);

    userAuth.logIn(res?.data?.accessToken);
  };

  return (
    <>
      <LoadingIndicator visible={loginApi?.loading} />
      <BaseScreen style={styles.container}>
        <Image source={require("../assets/lvb.jpg")} style={styles.logo} />
        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={formValidation}
        >
          <ErrorText error="Invalid username/password" visible={failedStatus} />

          <AppFormFiled
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Name"
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
    </>
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
