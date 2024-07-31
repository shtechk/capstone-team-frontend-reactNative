import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getPlaceById } from "../apis/places";
import { BASE_URL } from "../apis";

const PlaceDetails = ({ _id }) => {
  const navigation = useNavigation();
  const { data: place } = useQuery({
    queryKey: ["placeDetail", _id],
    queryFn: () => {
      return getPlaceById(_id);
    },
  });
  // console.log(place);
  if (!place) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
      }}
    >
      {/* */}

      {/* image of place*/}

      <View>
        <Image
          source={{ uri: BASE_URL + "/" + place?.images }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      {/* title */}
      <View>
        <Text>{place.name}</Text>
      </View>
      {/* details */}
      <View>
        <Text>{place.mood}</Text>
        <Text>{place.food}</Text>
        <Text>{place.drinks}</Text>
        <Text>{place.service}</Text>
        <Text>{place.parking}</Text>
        <Text>{place.timings}</Text>
      </View>

      {/* icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Rating", { _id })}
        >
          <Ionicons name="star" size={32} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="location" size={32} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat", { _id })}>
          <Ionicons name="chatbubble" size={32} color="green" />
        </TouchableOpacity>
      </View>

      {/* end */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default PlaceDetails;
