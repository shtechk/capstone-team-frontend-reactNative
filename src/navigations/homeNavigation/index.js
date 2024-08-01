import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import CreateBooking from "../../screens/home/CreateBooking";
import PlaceRating from "../../screens/home/PlaceRating";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="createBooking"
        options={{
          headerTitle: "Create Booking",
          headerShown: true,
        }}
        component={CreateBooking}
      />
      {/* <Stack.Screen name="Rating" component={PlaceReview} /> */}
      <Stack.Screen name="placeReview" component={PlaceRating} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
