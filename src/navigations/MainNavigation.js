import React from "react";
import HomeNavigation from "./homeNavigation";
import ContactUs from "../screens/contactUs/ContactUs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BookingsNavigation from "./bookingsNavigation";
import ChatsNavigation from "./chatsNavigation";
const Drawer = createDrawerNavigator();
const MainNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Bookings" component={BookingsNavigation} />
      <Drawer.Screen name="Chats" component={ChatsNavigation} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
