import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RatingItem = ({ id, username, review }) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <View>
        <Text>RatingItem</Text>
      </View>
      <View>
        <Text> {id} </Text>
      </View>
      <View>
        <Text> {username} </Text>
      </View>
      <View>
        <Text> {review} </Text>
      </View>
    </View>
  );
};

export default RatingItem;

const styles = StyleSheet.create({});
