import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { ListItem } from "../component/ListItem";
import { LineSeperator } from "../component/LineSeperator";
import { ListItemDeleteAction } from "../component/ListItemDeleteAction";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BaseScreen } from "./Base";
import { Icon } from "../component/Icon";

const initialMessages = [
  {
    id: 1,
    title:
      "Title Description Description Description Description Description Description",
    des: "Description Description Description Description Description Description Description Description Description Description Description Description",
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 2,
    title: "Title",
    des: "Description",
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 3,
    title: "Title Title Title",
    des: "Description",
    image: require("../assets/favicon.png"),
  },
];
export default function Prac() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDeleteMessages = (message) => {
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id)
    );
  };
  return (
    <BaseScreen>
      <GestureHandlerRootView>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ index, item }) => (
            <ListItem
              title={item.title}
              image={item.image}
              description={item.des}
              key={index}
              onPress={() => console.log("Tapped")}
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() => handleDeleteMessages(item)}
                />
              )}
              // IconComponent={<Icon />}
            />
          )}
          ItemSeparatorComponent={LineSeperator}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setMessages(initialMessages);
              }}
            />
          }
        />
      </GestureHandlerRootView>
    </BaseScreen>
  );
}
