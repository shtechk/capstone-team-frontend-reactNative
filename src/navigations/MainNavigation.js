import React from "react";
import HomeNavigation from "./homeNavigation";
import ContactUs from "../screens/contactUs/ContactUs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import VoucherNavigation from "./voucherNavigation";
import BookingsNavigation from "./bookingsNavigation";
import ChatsNavigation from "./chatsNavigation";
const Drawer = createDrawerNavigator();
const MainNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="contact Us" component={ContactUs} />
      <Drawer.Screen name="vouchers" component={VoucherNavigation} />
      <Drawer.Screen name="Bookings" component={BookingsNavigation} />
      <Drawer.Screen name="Chats" component={ChatsNavigation} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
