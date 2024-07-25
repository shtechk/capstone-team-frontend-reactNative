import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import PlaceCard from "./PlaceCard";
import { getAllPlaces } from "../apis/places";

const PlacesList = ({ places, isSuccess }) => {
  const [sortedPlaces, setSortedPlaces] = useState([]);
  console.log(places);
  console.log(places);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});

      if (isSuccess && places) {
        const sorted = [...places].sort((a, b) => {
          const distanceA = getDistance(
            {
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            },
            { latitude: a.latitude, longitude: a.longitude }
          );
          const distanceB = getDistance(
            {
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            },
            { latitude: b.latitude, longitude: b.longitude }
          );
          return distanceA - distanceB;
        });
        setSortedPlaces(sorted);
      }
    })();
  }, [places, isSuccess]);
  // console.log({ sortedBusinesses });
  return (
    <View style={{ flex: 1, paddingVertical: 5 }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 7,
        }}
      >
        {places?.map(
          (place) => (
            console.log(place), // Debug: Log the current place object
            (
              <PlaceCard
                link={place.images}
                key={place._id}
                name={place.name}
                mood={place.mood}
                //food={place.food}
                _id={place._id}
                ratings={place.ratings}
              />
            )
          )
        )}
      </ScrollView>
    </View>
  );
};

export default PlacesList;
