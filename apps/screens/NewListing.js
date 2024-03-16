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

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Mobile", value: 2 },
  { label: "Clothing", value: 3 },
  { label: "Books", value: 4 },
  { label: "Devices", value: 5 },
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
          categorie: null,
          description: "",
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
          items={categories}
          name="category"
          placeholder="Category"
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
