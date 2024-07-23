import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../apis";
import CachedImage from "./CachedImage";
import { withDecay } from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";

const PlaceCard = ({ images, name, mood, food, service, _id, ratings }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("businessDetails", { _id }); //_id help me to know which item i will navigate to."shahed????"
  };
  return (
    <View
      style={{
        width: "95%",
        height: 175,
        //backgroundColor: "red",
      }}
    >
      <TouchableOpacity
        // This view is for the card and because I wont to make the card to be touchable I'll use <TouchableOpacity> insted of <View>
        onPress={() => handlePress()}
        style={{
          flex: 1,
          borderRadius: 22,
          borderColor: "darkgray",
          overflow: "hidden",
          borderWidth: 1,
          padding: 5,
          flexDirection: "row",
          // backgroundColor: "green",
        }}
      >
        <View // this view for the image
          style={{
            flex: 2,
            backgroundColor: "yellow",
            borderRadius: 22,
            overflow: "hidden",
            //flexWrap: "wrap",
          }}
        >
          <Image
            source={{ uri: images }}
            style={{
              width: "100%",
              height: "100%",
              borderWidth: 1,
              borderRadius: 22,
              borderColor: "lightgray",
            }}
            onError={(e) => console.log(e.nativeEvent.error)}
          />
        </View>
        {/*<CachedImage uri={`${images}`} /> this componet to cached the image and save it locally but if there is a problme
        while loading image this will appear in errors that there is failed to load the uri*/}

        <View
          // this view for the name and price
          style={{
            flex: 2,
            paddingHorizontal: 10,
            //flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 9,
            //backgroundColor: "pink",
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Cochin" }}>{name}</Text>
          {/*Avenir Next,Helvetica Neue Try any of these font familyFont */}
          <Text>{mood}</Text>
          <Text>{food}</Text>
          <Text>{service}</Text>
          <Text>{ratings}</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            paddingHorizontal: 2,
            //backgroundColor: "red",
          }}
        >
          <Ionicons name="location-outline" size={24} color="gray" />
          <Text> distance</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceCard;
