import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/home/HomeScreen";
import CreateBooking from "../../screens/home/CreateBooking";
import PlaceReview from "../../screens/home/PlaceReview";
import FindLocation from "../../screens/home/FindLocation";
import SingleChat from "../../screens/home/SingleChat";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="createBooking" component={CreateBooking} />
      <Stack.Screen name="singleChat" component={SingleChat} />
      <Stack.Screen name="findLocation" component={FindLocation} />
      <Stack.Screen name="placeReview" component={PlaceReview} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
