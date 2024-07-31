import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import NotificationCard from "../../components/NotificationCard";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getMyNotifications } from "../../apis/notifications";

const Notifications = () => {
  const navigation = useNavigation();
  // const { data, isLoading } = useQuery({
  //   queryKy: ["notifications"],
  //   queryFn: () => getMyNotifications(),
  // });

  // if (isLoading) return <Text> loading !!!!</Text>;
  return (
    <View style={{ flex: 1 }}>
      {/* <Header navigation={navigation} title={"Notifications"} /> */}
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
          {/* Arrow-back icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              //backgroundColor: "lightgray", // background for the Arrow-back button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
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
              Notifications
            </Text>
          </View>
          {/* Close-circle Icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              // backgroundColor: "#fb8500", // orange background for the notification button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            // onPress={onClosePress}
          >
            <Ionicons name="close-circle" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          //alignItems: "center",
          //justifyContent: "center",
          height: "100%",
          //backgroundColor: "red",
          paddingVertical: 12,
        }}
      >
        <ScrollView
          pagingEnabled
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingBottom: 10,
            //height: "100%",
            //backgroundColor: "yellow",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* {data?.map((notification) => {
            <NotificationCard
              key={notification.id}
              notification={notification}
            />;
          })} */}
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
