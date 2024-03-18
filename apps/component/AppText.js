import React from "react";
import { Text } from "react-native";
import defaultStyle from "../config/style";

export const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyle.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
