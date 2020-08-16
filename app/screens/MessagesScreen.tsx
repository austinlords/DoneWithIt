import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

type Message = {
  id: number;
  title: string;
  description: string;
  image: any;
};

const initialMessages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg")
  }
];

export interface MessageScreenProps {}

const MessageScreen: React.SFC<MessageScreenProps> = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  function handleDelete(message: Message) {
    // Delete message from message array
    // Call the server to delete

    return setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg")
            }
          ]);
        }}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessageScreen;
