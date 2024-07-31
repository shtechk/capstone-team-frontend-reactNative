import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BookedPlace from "../../components/BookedPlace";
import BookingCard from "../../components/BookingCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOneBooking, updateBooking } from "../../apis/bookings";

const ManageBooking = () => {
  const route = useRoute();

  const { _id } = route.params;

  const { data } = useQuery({
    queryKey: ["booking", _id],
    queryFn: () => getOneBooking(_id),
  });
  return (
    <View style={{ flex: 90, paddingVertical: 5 }}>
      {/* frame inputs begin here */}
      {/* // header */}
      <View></View>
      {/* // BookedPlace card details */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Manage Booking</Text>
        <BookedPlace _id={_id} hideButton={true} booking={data} />
      </ScrollView>
      {/* // booking field inputs */}
      <ScrollView>
        <BookingCard _id={_id} hideButton={true} />
      </ScrollView>
      {/* // 2 buttons */}

      {/* end */}
    </View>
  );
};

export default ManageBooking;

const styles = StyleSheet.create({});
