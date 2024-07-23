import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeNavigation from "./homeNavigation";
import ContactUs from "../screens/contactUs/ContactUs";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const MainNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
