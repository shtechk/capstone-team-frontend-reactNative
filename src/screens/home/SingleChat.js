import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SingleChat = () => {
  const [options, setoptions] = useState(["Chats"]);
  const [chats, setchats] = useState([]);
  const chooseOption = (option) => {
    if (options.includes(option)) {
      setoptions(options.filter((c) => c !== option));
    } else {
      setoptions([...options, option]);
    }
  };

  const navigation = useNavigation();

  return (
    <View>
      {/* frame input begins here */}
      {/* // header */}
      <View></View>
      {/* // chats list */}
      <View>
        <Pressable
          onPress={() => chooseOption("Chats")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></Pressable>
      </View>
      {/* // */}
      <View>
        <Text>My Chats</Text>
      </View>
      {/* // */}
      <View>
        <MaterialIcons
          onPress={() => navigation.navigate("MyChats")}
        ></MaterialIcons>
      </View>
      {/* frame input ends here */}
    </View>
  );
};
export default SingleChat;

const styles = StyleSheet.create({});
