import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceDetails from "../../components/PlaceDetails";
import BookingCard from "../../components/BookingCard";

const CreateBooking = () => {
  return (
    <View style={{ flex: 90, paddingVertical: 5 }}>
      {/* frame inputs begin here */}
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
        <PlaceDetails />
      </ScrollView>
      {/* // booking field inputs */}
      <ScrollView>
        <BookingCard />
      </ScrollView>
      {/* // "book" button here */}
      <View>
        <Button
          title="Book"
          onPress={() => navigation.navigate("Rating", { _id: place._id })}
          // how can i add to this code, that i want the user to rate the most recent shop they booked at?
          // and when done, user is navigated back to this booking page (which will store the new booking request info user already typed)
          // and now he is able to hit the "book" button?
          //
          // onPress={() => Alert.alert('You are requesting a booking for ${time}')}
        />
      </View>
      {/* frame inputs end here */}
    </View>
  );
};

export default CreateBooking;

const styles = StyleSheet.create({});
