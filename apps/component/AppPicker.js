import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/style";
import { AppText } from "./AppText";
import { PickerItem } from "./PickerItem";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BaseScreen } from "../screens/Base";

export const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns,
}) => {
  const [show, setShow] = useState(false);
  const handlePickedItem = (data) => {
    setShow(false);
    onSelectItem(data);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem?.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyle.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={show} animationType="slide">
        <BaseScreen>
          <Button title="Close" onPress={() => setShow(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                one={item}
                onPress={() => handlePickedItem(item)}
              />
            )}
          />
        </BaseScreen>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyle.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
