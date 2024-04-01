import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { BaseScreen } from "./Base";
import {
  AppForm,
  AppFormFiled,
  AppFormSubmitButton,
  ErrorText,
} from "../component/form";

import authApi from "../api/auth";
import { UploadProgress } from "./UploadProgress";
import useAuth from "../auth/useAuth";
import useApiWorker from "../hooks/API";
import { LoadingIndicator } from "../component/LoadingIndicator";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

export const Register = () => {
  const userAuth = useAuth();
  const registerApi = useApiWorker(authApi.signup);

  const [failedStatus, setFailedStatus] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async ({ username, password }) => {
    setProgress(0);
    setUploadVisible(true);
    const res = await registerApi.request(username, password);

    if (!res.ok) {
      setFailedStatus(true);
      setUploadVisible(false);
    }

    userAuth.logIn(res?.data?.accessToken);
  };

  return (
    <BaseScreen style={styles.container}>
      <UploadProgress
        onFinished={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <LoadingIndicator visible={registerApi?.loading} />
      <Image source={require("../assets/lvb.jpg")} style={styles.logo} />

      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorText error="Something went wrong" visible={failedStatus} />
        <AppFormFiled
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Name"
        />
        {/* <AppFormFiled
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        /> */}
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 50,
  },
});
