import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const ConfirmBooking = ({ route, navigation }) => {
  const { booking } = route.params;
  const [status, setStatus] = useState("You are requesting a booking for:");

  return (
    <View>
      <Text>{booking.time}</Text>
      <Text>{status}</Text>
      <Button title="Confirm" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

export default ConfirmBooking;
