import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

export const UploadProgress = ({ progress, visible = false, onFinished }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {" "}
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animationDone}
            onAnimationFinish={onFinished}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animationDone: {
    width: 150,
  },
});
