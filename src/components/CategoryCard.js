import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BASE_URL } from "../apis";

const CategoryCard = ({ link, index, name }) => {
  const handlePress = () => {
    // We can handle filter by category
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={{
        flex: 1,
        minWidth: 140,
        minHeight: 140,
        //backgroundColor: "#8ecae6",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
      }}
    >
      <Image
        source={{ uri: BASE_URL + "/" + link }}
        style={{
          width: "100%",
          aspectRatio: 1,
          borderWidth: 1,
          borderRadius: 100,
          borderColor: "lightgray",
          //backgroundColor: "yellow",
          flex: 5,
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
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
