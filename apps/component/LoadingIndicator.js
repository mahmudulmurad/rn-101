import React from "react";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

export const LoadingIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loading.json")}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        zIndex: 1,
        opacity: 0.5,
      }}
    />
  );
};
