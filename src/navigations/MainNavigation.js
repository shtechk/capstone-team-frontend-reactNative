import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Button, View, Text, Alert } from "react-native";
import HomeNavigation from "./homeNavigation";
// import BookingsNavigation from "./BookingsNavigation";
import ChatsNavigation from "./chatsNavigation";
import ContactNavigation from "./contactNavigation";
import UserContext from "../context/Usercontext";
import { BookingsNavigation } from "./bookingsNavigation";
import LogoutScreen from "../screens/home/LogoutScreen";
import { removeToken } from "../api/storage";
import VoucherNavigation from "./voucherNavigation";
import PlaceRating from "../screens/home/PlaceRating";

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={() => {
                Alert.alert("Logout", "Are you sure you want to logout!", [
                  {
                    text: "Yes",
                    onPress: () => {
                      removeToken();
                      setUser(false);
                    },
                    style: "destructive",
                  },
                  {
                    text: "No",
                    onPress: () => {},
                    style: "default",
                  },
                ]);
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Bookings" component={BookingsNavigation} />
      <Drawer.Screen name="vouchers" component={VoucherNavigation} />
      <Drawer.Screen name="placeReview" component={PlaceRating} />
      {/* <Drawer.Screen name="Bookings" component={BookingsNavigation} /> */}
      {/* <Drawer.Screen name="Chats" component={ChatsNavigation} /> */}
      <Drawer.Screen name="Contact" component={ContactNavigation} />
    </Drawer.Navigator>

    //note that the place rating will be taken off this page!!!!!!!!!!!!!!!
  );
};

export default MainNavigation;
