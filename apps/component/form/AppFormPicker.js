import { useFormikContext } from "formik";
import React from "react";
import { AppPicker } from "../AppPicker";
import { ErrorText } from "./ErrorText";

export const AppFormPicker = ({
  categories,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        categories={categories}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item?.label)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorText error={errors[name]} visible={touched[name]} />
    </>
  );
};
