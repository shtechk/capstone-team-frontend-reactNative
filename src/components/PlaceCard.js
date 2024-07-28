import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../api";
import CachedImage from "./CachedImage";
import { withDecay } from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";
import { getDistance } from "geolib"; // Import the getDistance function from geolib

const PlaceCard = ({
  link,
  name,
  mood,
  food,
  service,
  _id,
  ratings,
  userLocation,
  place,
}) => {
  const [distance, setDistance] = useState(0);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("createBooking", { _id });
  };

  // Calculate the distance from user location to the place

  useEffect(() => {
    setDistance(
      calculateDistance(
        userLocation?.coords?.latitude,
        userLocation?.coords?.longitude,

        place?.location?.coordinates[0],
        place?.location?.coordinates[1]
      )
    );
  }, [userLocation]);

  console.log(distance);
  return (
    <View
      style={{
        width: "95%",
        height: 150,
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
            //backgroundColor: "yellow",
            borderRadius: 22,
            overflow: "hidden",
            //flexWrap: "wrap",
          }}
        >
          <Image
            source={{ uri: BASE_URL + "/" + link }}
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
          <Text style={{ fontSize: 20 }}>{name}</Text>
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
          <Text style={{ fontSize: 14, color: "gray" }}>
            {distance.toFixed(0)} Km
          </Text>
          {/* Display the calculated distance */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default PlaceCard;
