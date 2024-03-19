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
import { GestureHandlerRootView } from "react-native-gesture-handler";

const items = [
  { label: "Furniture", value: 1, bgColor: "red", icon: "apps" },
  { label: "Mobile", value: 2, bgColor: "green", icon: "email" },
  { label: "Clothing", value: 3, bgColor: "blue", icon: "lock" },
  { label: "Axe", value: 4, bgColor: "tomato", icon: "axe" },
  { label: "Axis", value: 5, bgColor: "#645719", icon: "axis" },
  { label: "AWS", value: 6, bgColor: "#577558", icon: "aws" },
  { label: "Atom", value: 7, bgColor: "#5DAE60", icon: "atom" },
  { label: "BioHazard", value: 8, bgColor: "#22C299", icon: "biohazard" },
  { label: "Battery", value: 9, bgColor: "#3E381B", icon: "battery" },
  {
    label: "Compass",
    value: 10,
    bgColor: "#136270",
    icon: "compass-rose",
  },
  { label: "Babel", value: 11, bgColor: "yellow", icon: "babel" },
  { label: "Badminton", value: 12, bgColor: "#453280", icon: "badminton" },
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
      <GestureHandlerRootView>
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
            items={items}
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
      </GestureHandlerRootView>
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
