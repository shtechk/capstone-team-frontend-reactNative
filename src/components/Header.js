import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getMyNotifications } from "../apis/notifications";
import { useQuery } from "@tanstack/react-query";

const Header = ({ navigation, title }) => {
  // Function to handle notification icon press
  navigation = useNavigation();
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);

  const { data } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getMyNotifications(),
  });
  useEffect(() => {
    const checkNotifications = async () => {
      if (data) {
        const unreadExists = data.some((notification) => !notification.isRead);
        setHasUnreadNotifications(unreadExists);
      }
    };

    checkNotifications();
  }, [data]);
  const onNotificationPress = () => {
    navigation.navigate("notification");
    // Handle the press event, e.g., navigate to a notifications screen
    // navigation.navigate('NotificationsScreen');
  };
  return (
    <View>
      {/* Overall header view at the top */}
      <View
        style={{
          width: "100%",
          height: 120,
          backgroundColor: "#fb8500", // Orange background for the header
          overflow: "hidden",
        }}
      >
        {/* Upper Header view that is below clock and battery icons on the screen */}
        <View style={{ flex: 50, backgroundColor: "#219ebc" }}></View>
        {/* lower header*/}
        <View
          style={{
            flex: 70,
            backgroundColor: "#219ebc", // cyan background for the lower header
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          {/* Drawer Icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              //backgroundColor: "#219ebc", // orange background for the drawer button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>

          {/* Title "Home" */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Cochin",
                fontWeight: "bold",
                color: "white", // Dark blue text for the title
              }}
            >
              {title}
            </Text>
          </View>
          {/* Notification Icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              // backgroundColor: "#fb8500", // orange background for the notification button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onNotificationPress}
          >
            <Ionicons
              name="notifications-circle-sharp"
              size={24}
              color="white"
            />
            {hasUnreadNotifications && (
              <View
                style={{
                  height: 7,
                  width: 7,
                  backgroundColor: "red",
                  borderRadius: 5,
                  position: "absolute",
                  top: 12,
                  right: 12,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
