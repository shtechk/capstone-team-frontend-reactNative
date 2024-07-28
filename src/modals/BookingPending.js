import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const BookingPending = ({ route, navigation }) => {
  const { booking } = route.params;
  const [status, setStatus] = useState("Waiting for store acceptance");

  return (
    <View>
      <Text>{booking.time}</Text>
      <Text>{status}</Text>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
};

export default BookingPending;
