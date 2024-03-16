import { useFormikContext } from "formik";
import React from "react";
import { AppPicker } from "../AppPicker";
import { ErrorText } from "./ErrorText";

export const AppFormPicker = ({ items, name, placeholder }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        categories={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
};
