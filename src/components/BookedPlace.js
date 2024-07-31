import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getPlaceById } from "../apis/places";
import { getOneBooking } from "../apis/bookings";
import { BASE_URL } from "../apis";
import dayjs from "dayjs";

const BookedPlace = ({ booking, hideButton, _id }) => {
  const navigation = useNavigation();
  // const { data: booking } = useQuery({
  //   queryKey: ["bookedPlace", _id],
  //   queryFn: () => getOneBooking(_id),
  // });

  // const { data: place } = useQuery({
  //   queryKey: ["placeDetail", _id],
  //   queryFn: () => getPlaceById(_id),
  // });

  // if (!booking) {
  //   return <Text>There is no booking</Text>;
  // }

  // if (!place) {
  //   return <Text>Place details can't be loaded</Text>;
  // }
  // console.log(booking.place);
  // console.log(`${BASE_URL}//${booking.place?.images}`);
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
      {/* image of place */}
      <View>
        <Image
          source={{ uri: `${BASE_URL}/${booking?.place?.images}` }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      {/* title */}
      <View>
        <Text>{booking?.place?.name}</Text>
      </View>
      {/* details */}
      <View>
        <Text>{dayjs(booking?.date).format("DD MMM YYYY")}</Text>
        <Text>{booking?.time}</Text>
        <Text>{booking?.persons}</Text>
      </View>

      {!hideButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("manageBookings", { _id: booking._id })
          }
        >
          <Text>Modify</Text>
        </TouchableOpacity>
      )}

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
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});

export default BookedPlace;
