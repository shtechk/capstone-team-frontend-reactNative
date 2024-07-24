import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpcomingBookings from "../../screens/manageBooking/UpcomingBookings";
import ManageBooking from "../../screens/manageBooking/ManageBooking";

const Stack = createStackNavigator();
const BookingsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="upcomingBookings" component={UpcomingBookings} />
      <Stack.Screen name="manageBookings" component={ManageBooking} />
    </Stack.Navigator>
  );
};

export default BookingsNavigation;
