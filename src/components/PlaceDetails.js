// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { getPlaceById } from "../apis/places";
// import { BASE_URL } from "../apis";
// import { SafeAreaView } from "react-native-safe-area-context";

// const PlaceDetails = ({ _id }) => {
//   const navigation = useNavigation();
//   const { data: place } = useQuery({
//     queryKey: ["placeDetail", _id],
//     queryFn: () => {
//       return getPlaceById(_id);
//     },
//   });
//   // console.log(place);
//   if (!place) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View
//       style={{
//         padding: 10,
//         borderRadius: 30,
//         backgroundColor: "#219ebc",
//       }}
//     >
//       {/* */}

//       {/* image of place*/}

//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//         }}
//       >
//         <View>
//           <Image
//             source={{ uri: BASE_URL + "/" + place?.images }}
//             style={{ width: 100, height: 100, borderRadius: 20 }}
//           />
//         </View>

//         {/* details */}
//         <View
//           style={{
//             gap: 10,
//           }}
//         >
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.name}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.mood}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.food}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.drinks}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.service}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.parking}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {place.timings}
//           </Text>
//         </View>
//       </View>

//       {/* icons */}
//       <View style={styles.iconContainer}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("Rating", { _id })}
//         >
//           <Ionicons name="star" size={32} color="gold" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {}}>
//           <Ionicons name="location" size={32} color="blue" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//   },
// });

// export default PlaceDetails;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getPlaceById } from "../apis/places";
import { BASE_URL } from "../apis";

const PlaceDetails = ({ _id }) => {
  const navigation = useNavigation();
  const { data: place } = useQuery({
    queryKey: ["placeDetail", _id],
    queryFn: () => getPlaceById(_id),
  });

  if (!place) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image
          source={{ uri: `${BASE_URL}/${place?.images}` }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.placeDetail}>{place.mood}</Text>
          <Text style={styles.placeDetail}>{place.food}</Text>
          <Text style={styles.placeDetail}>{place.drinks}</Text>
          <Text style={styles.placeDetail}>{place.service}</Text>
          <Text style={styles.placeDetail}>{place.parking}</Text>
          <Text style={styles.placeDetail}>{place.timings}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("placeReview", { _id })}
        >
          <Ionicons name="star" size={32} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              `https://www.google.com/maps/dir//${place.location?.coordinates[0]},${place.location?.coordinates[1]}`
            );
          }}
        >
          <Ionicons name="location" size={32} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#219ebc",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  placeName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  placeDetail: {
    color: "white",
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default PlaceDetails;
