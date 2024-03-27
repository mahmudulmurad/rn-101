import React from "react";
import { AppTextInput } from "../AppTextInput";
import { useFormikContext } from "formik";
import { ErrorText } from "./ErrorText";

export const AppFormFiled = ({ name, ...otherProps }) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
};
