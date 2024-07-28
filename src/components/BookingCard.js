import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TextInput, DatePickerIOS } from "react-native";

const BookingCard = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const [persons, setPersons] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { _id } = route.params;

  const handleBooking = () => {
    const booking = { _id, date, time, persons, instructions };
    // navigation.navigate("Payment", { booking });
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const { booking } = route.params;

  const handlePayment = (method) => {
    // booking?.paymentMethod = method;
    // navigation.navigate("Confirmation", { booking });
  };

  return (
    <View>
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {/* {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )} */}
      <TextInput placeholder="Time" value={time} onChangeText={setTime} />
      <TextInput
        placeholder="Persons"
        value={persons.toString()}
        onChangeText={(text) => setPersons(parseInt(text))}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Special Instructions"
        value={instructions}
        onChangeText={setInstructions}
      />
      <View>
        <Text>Payment Method:</Text>
        <Button
          title="Pay with Apple Pay"
          onPress={() => handlePayment("Apple Pay")}
        />
        <Button
          title="Pay with Knet"
          onPress={() => handlePayment("Knet Card")}
        />
      </View>
      <Button title="Book" onPress={handleBooking} />
    </View>
  );
};

export default BookingCard;
