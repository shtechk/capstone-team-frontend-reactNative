import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import PlaceCard from "./PlaceCard";
import { getAllPlaces } from "../apis/places";

const PlacesList = ({ places, isSuccess }) => {
  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  console.log("HELLLO");
  console.log(places);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setUserLocation(userLocation);
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
    <ScrollView
      contentContainerStyle={{
        gap: 7,
      }}
    >
      {places?.map((place) => {
        return (
          <>
            <PlaceCard
              link={place.images}
              key={place._id}
              name={place.name}
              mood={place.mood}
              //food={place.food}
              _id={place._id}
              ratings={place.ratings}
              userLocation={userLocation}
              place={place}
            />
          </>
        );
      })}
      <View style={{ height: 100 }}></View>
      <View style={{ height: 100 }}></View>
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default PlacesList;
