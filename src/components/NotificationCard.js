import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
//import { useMutation } from "react-query";
import { markNotificationAsRead } from "../apis/notifications";
import { useMutation } from "@tanstack/react-query";

const NotificationCard = ({ notification }) => {
  const { mutate } = useMutation({
    mutationKey: ["notifications"],
    mutationFn: () => markNotificationAsRead(notification.id),
    onSuccess: () => {
      //
    },
  });
  const handlePress = () => {
    mutate();
  };
  return (
    <TouchableOpacity // styles for Card Container
      onPress={() => handlePress()}
      style={{
        backgroundColor: "lightblue",
        position: "relative",
        width: "95%",
        padding: 20,
        borderRadius: 22,
        shadowColor: "red",
      }}
    >
      {/* Red dot for unread notifications */}
      {/* {!notification.isRead && ( */}
      <View
        style={{
          height: 10,
          width: 10,
          backgroundColor: "red",
          borderRadius: 5,
          position: "absolute",
          top: 0,
          left: 375,
        }}
      />
      {/* )} */}
      {/*styles for notification content */}
      <View style={{ gap: 5 }}>
        {/*styles for title */}

        <Text
          style={{
            fontSize: 15,
            fontFamily: "choic",
            fontWeight: "bold",
            //backgroundColor: "green",
          }}
        >
          Voucher: {/*{notification.title}*/}
        </Text>
        <Text> HELLLO safa {/*{notification.body}*/}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
