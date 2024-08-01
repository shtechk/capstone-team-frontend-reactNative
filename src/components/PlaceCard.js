import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CachedImage from "./CachedImage";
import { withDecay } from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";
import { getDistance } from "geolib"; // Import the getDistance function from geolib
import { BASE_URL } from "../apis";

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

  // console.log(BASE_URL + "/" + link);
  return (
    <View
      style={{
        width: "95%",
        height: 160,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 22,
        overflow: "hidden",
        backgroundColor: "white",
        gap: 5,
        borderWidth: 1,
        borderColor: "lightgray",
      }}
    >
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{
          flex: 1,
          flexDirection: "row",
          //backgroundColor: "green",
        }}
      >
        <View // this view for the image
          style={{
            flex: 2,
            padding: 5, // Adjust padding to give space inside the image container
            //backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: BASE_URL + "/" + link }}
            style={{
              width: "90%",
              height: "90%",
              borderRadius: 15, // Adjust to match the card's border radius
            }}
            onError={(e) => console.log(e.nativeEvent.error)}
          />
        </View>

        <View
          // this view for the name and price
          style={{
            flex: 2, // Adjust flex to give more space for text
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <Text style={{ fontSize: 20 }}>{name}</Text>
          {/*Avenir Next,Helvetica Neue Try any of these font familyFont */}
          <Text>{mood}</Text>
          <Text>{food}</Text>
          <Text>{service}</Text>
          <Text>Rating {ratings.length}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingHorizontal: 1,
            //backgroundColor: "red",
            paddingBottom: 4,
          }}
        >
          <Ionicons name="location-outline" size={24} color="gray" />
          <Text style={{ fontSize: 14, color: "gray" }}>
            {distance.toFixed(0)} Km
          </Text>
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
