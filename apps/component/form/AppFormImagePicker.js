import React from "react";
import { StyleSheet } from "react-native";
import { ImageInputList } from "../ImageInputList";
import { useFormikContext } from "formik";
import { ErrorText } from "./ErrorText";

export const AppFormImagePicker = ({ name, ...otherProps }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const onRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((one) => one !== uri)
    );
  };

  const onImageAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={onRemoveImage}
        onImageAdd={onImageAdd}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
