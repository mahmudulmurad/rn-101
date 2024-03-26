import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { BaseScreen } from "./Base";
import { ListItem } from "../component/ListItem";
import { ListItemDeleteAction } from "../component/ListItemDeleteAction";
import { LineSeperator } from "../component/LineSeperator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("../assets/lvb.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/lvb.jpg"),
  },
];

function Messages(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <BaseScreen>
      <GestureHandlerRootView>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={LineSeperator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/lvb.jpg"),
              },
            ]);
          }}
        />
      </GestureHandlerRootView>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({});

export default Messages;
