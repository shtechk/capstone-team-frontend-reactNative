import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const RatingItem = ({ username, createdAt, review }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 9,
        borderRadius: "20%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 3,
          height: 30,
        }}
      >
        <View
          style={{
            flex: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "cochin",
              fontSize: 18,
              paddingLeft: 5,
            }}
          >
            {username}
          </Text>
        </View>
        <View
          style={{
            flex: 9,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontFamily: "cochin", fontSize: 16 }}
          >
            {createdAt}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 7,
          borderRadius: "20%",
          backgroundColor: "white",
          height: 80,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontFamily: "cochin",
            paddingTop: 9,
            paddingLeft: 9,
          }}
        >
          {review}
        </Text>
      </View>
    </View>
  );
};

export default RatingItem;

const styles = StyleSheet.create({});
