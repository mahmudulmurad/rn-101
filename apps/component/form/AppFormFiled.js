import React from "react";
import { AppTextInput } from "../AppTextInput";
import { useFormikContext } from "formik";
import { ErrorText } from "./ErrorText";

export const AppFormFiled = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
};
