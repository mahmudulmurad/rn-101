import React from "react";
import { BaseScreen } from "./Base";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "../component/ListItem";
import colors from "../config/colors";
import { Icon } from "../component/Icon";
import { LineSeperator } from "../component/LineSeperator";

const menuItems = [
  {
    title: " My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: " My Messeges",
    icon: {
      name: "email",
      backgroundColor: colors.secondery,
    },
  },
];
export const Account = () => {
  return (
    <BaseScreen style={styles.screen}>
      <View style={styles.header}>
        <ListItem
          title="Mahmudul Hasan Murad"
          description="SWE 3"
          image={require("../assets/lvb.jpg")}
        />
      </View>
      <View style={styles.middle}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ index, item }) => (
            <ListItem
              title={item.title}
              key={index}
              onPress={() => console.log("Tapped")}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  bgColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={LineSeperator}
        />
      </View>
      <View style={styles.end}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" size={35} bgColor="#ffe66d" />}
        />
      </View>
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  header: {
    marginBottom: "25px",
  },
  middle: {
    marginBottom: "25px",
  },
  end: {},
});