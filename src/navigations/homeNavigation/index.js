import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/home/HomeScreen";
import BusinessDetails from "../../screens/home/BusinessDetails";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="businessDetails" component={BusinessDetails} />
      {/*BusinessDetails Screen that shahed will create i call it here BusinessDetails */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
