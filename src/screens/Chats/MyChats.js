import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const MyChats = () => {
  const [users, setUser] = useState([]);

  const { data } = useQuery({
    queryKey: ["Chats"],
    queryFn: () => getAllChats(),
  });

  //
  const dataList = data?.map((chat, index) => {
    return (
      <View key={index}>
        <Text>{JSON.stringify(chat)}</Text>
      </View>
    );
  });

  return (
    <View>
      {/* frame inputs begin here */}
      {/* // header */}
      <View></View>
      {/* // Place chat bubbles here */}
      <View></View>
      {/* // typed message input heree */}
      <View></View>
      <Button title="Confirm" onPress={() => {}} />
    </View>
  );
};

export default MyChats;
