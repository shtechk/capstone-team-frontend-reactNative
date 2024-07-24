import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactUs from "../../screens/contactUs/ContactUs";

const Stack = createStackNavigator();
const ContactNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="contactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};

export default ContactNavigation;
