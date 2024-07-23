import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CategoryCard = ({ name, index, image }) => {
  return (
    <View
      style={{
        flex: 1,
        minWidth: 100,
        minHeight: 100,
        backgroundColor: "#8ecae6",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: "100%",
          borderWidth: 1,
          borderRadius: 100,
          borderColor: "lightgray",
          //backgroundColor: "yellow",
          flex: 3,
        }}
        onError={(e) => console.log(e.nativeEvent.error)}
      />

      <View
        style={{
          flex: 1, //backgroundColor: "green"
        }}
      >
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
