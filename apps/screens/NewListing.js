import React from "react";
import { BaseScreen } from "./Base";
import {
  AppForm,
  AppFormFiled,
  AppFormPicker,
  AppFormSubmitButton,
} from "../component/form";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { CategoryPickerItem } from "../component/CategoryPickerItem";

const categories = [
  { label: "Furniture", value: 1, bgColor: "red", icon: "apps" },
  { label: "Mobile", value: 2, bgColor: "green", icon: "email" },
  { label: "Clothing", value: 3, bgColor: "blue", icon: "lock" },
  { label: "Books", value: 4, bgColor: "red", icon: "apps" },
  { label: "Devices", value: 5, bgColor: "red", icon: "apps" },
];

const formValidation = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

export const NewListing = () => {
  return (
    <BaseScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={formValidation}
      >
        <AppFormFiled
          name="title"
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
        />
        <AppFormFiled
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          categories={categories}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormFiled
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <AppFormSubmitButton title="Post" />
      </AppForm>
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
