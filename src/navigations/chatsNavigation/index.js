import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const ChatsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myChats" component={MyChats} />
      <Stack.Screen name="singleChat" component={SingleChat} />
    </Stack.Navigator>
  );
};

export default ChatsNavigation;
