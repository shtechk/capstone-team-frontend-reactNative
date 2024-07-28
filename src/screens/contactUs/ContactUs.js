import { Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ContactUs = ({ navigation }) => {
  // Function to handle notification icon press
  const onNotificationPress = () => {
    // Handle the press event, e.g., navigate to a notifications screen
    // navigation.navigate('NotificationsScreen');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white", // Dark blue background for the main view #023047
      }}
    >
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
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>

          {/* Title "Home" */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#023047", // Dark blue text for the title
              }}
            >
              Contact Us
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
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", gap: 12 }}>
        {/*phone-No */}
        <View
          style={{
            //justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="call-outline" size={30} color="black" />
          <Text style={{ color: "black", fontSize: "20" }}>+965-99999999</Text>
        </View>
        {/*E-mail */}
        <View
          style={{
            //justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="mail-open-outline" size={30} color="black" />
          <Text style={{ color: "black", fontSize: "20" }}>email@mail.com</Text>
        </View>
        {/*twiter */}
        <View
          style={{
            //justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="logo-twitter" size={30} color="black" />
          <Text style={{ color: "black", fontSize: "20" }}>@ContactUs</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;
