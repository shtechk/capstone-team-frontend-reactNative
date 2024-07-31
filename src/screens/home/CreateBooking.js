import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceDetails from "../../components/PlaceDetails";
import BookingCard from "../../components/BookingCard";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getPlaceById } from "../../apis/places";

const CreateBooking = () => {
  const route = useRoute();
  const { _id } = route.params;

  return (
    <View style={{ flex: 90, paddingVertical: 5 }}>
      {/* // header */}
      <View></View>
      {/* // Place card details */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Create Booking</Text>
        <PlaceDetails _id={_id} />
      </ScrollView>
      {/* // booking field inputs */}
      <ScrollView>
        <BookingCard _id={_id} />
      </ScrollView>
      {/* // "book" button here */}
      <View></View>
      {/* end */}
    </View>
  );
};

export default CreateBooking;

const styles = StyleSheet.create({});
