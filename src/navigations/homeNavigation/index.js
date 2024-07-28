import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import CreateBooking from "../../screens/home/CreateBooking";
import FindLocation from "../../screens/home/FindLocation";
import SingleChat from "../../screens/home/SingleChat";
import PlaceRating from "../../screens/home/PlaceRating";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="createBooking" component={CreateBooking} />
      <Stack.Screen name="Chat" component={SingleChat} />
      <Stack.Screen name="Location" component={FindLocation} />
      {/* <Stack.Screen name="Rating" component={PlaceReview} /> */}
      <Stack.Screen name="singleChat" component={SingleChat} />
      <Stack.Screen name="findLocation" component={FindLocation} />
      {/* <Stack.Screen name="placeReview" component={PlaceRating} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
