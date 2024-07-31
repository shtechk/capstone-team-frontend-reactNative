import { Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import LinearGradient from "react-native-linear-gradient";

const ContactUs = ({ navigation }) => {
  // Function to handle notification icon press
  const onNotificationPress = () => {
    // Handle the press event, e.g., navigate to a notifications screen
    // navigation.navigate('NotificationsScreen');
  };
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Contact us"} navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "ligtblue", // Placeholder for gradient
        }}
      >
        {/* <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          CONTACT US
        </Text> */}

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            //backgroundColor: "red",
          }}
        >
          {/* Outer background */}
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Duplicate layer to create depth */}
            <View
              style={{
                width: "90%",
                height: 550,
                borderRadius: 10,
                padding: 20,
                backgroundColor: "rgba(173, 216, 230, 0.2)", // Light blue with 20% opacity
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
          {/* Contact details container */}
          <View
            style={{
              width: "90%",
              height: 600,
              borderRadius: 10,
              padding: 20,
              backgroundColor: "lightblue",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "white", // Optional border for better definition
              gap: 20,
            }}
          >
            <ContactDetail icon="call" text="+257 72 123 123" />
            <ContactDetail icon="logo-instagram" text="@mybusiness123" />
            <ContactDetail
              icon="logo-pinterest"
              text="My Business Facebook Page"
            />
            <ContactDetail icon="globe-outline" text="www.mybusiness.com" />
            <ContactDetail icon="location-sharp" text="ABC Place 2nd Street" />
          </View>
        </View>
      </View>
    </View>
  );
};
const ContactDetail = ({ icon, text }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <Ionicons name={icon} size={24} color="white" style={{ marginRight: 10 }} />
    <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
      {text}
    </Text>
  </View>
);

export default ContactUs;
