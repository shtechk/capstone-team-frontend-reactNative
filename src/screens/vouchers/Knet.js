import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addVoucher } from "../../apis/vouchers";
import { useRoute } from "@react-navigation/native";

const Knet = ({ navigation }) => {
  const [bank, setBank] = useState("");
  const [prefix, setPrefix] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [pin, setPin] = useState("");

  const router = useRoute();
  const { amount, phoneNumber, message, paymentMethod } = router.params;
  // amount: { type: Number, required: true },
  // phone_number: { type: Number, required: true },
  // message: { type: String },
  // method: { type: String },
  // status: { type: String },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  const { mutate } = useMutation({
    mutationKey: ["createVoucher"],
    mutationFn: () => addVoucher(amount, phoneNumber, message, paymentMethod),
    onSuccess: () => {
      alert("Payment Successful!");
      navigation.goBack(); // Navigate back to the previous screen
    },
  });

  const handlePayment = () => {
    // Handle the fake payment logic here
    mutate();
  };

  const bankOptions = {
    "Boubyan Bank ": ["1234", "5678"],
    "National Bank of Kuwait": ["8765", "4321"],
    "Warba Bank": ["1122", "3344"],
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "beige" }}>
        <Text style={styles.title}>K-Net Payment</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Merchant: Book me</Text>
          <Text style={styles.infoText}>Website: https://www.bookme.com</Text>
          <Text style={styles.infoText}>Amount: amount</Text>
        </View>
        <Picker
          selectedValue={bank}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setBank(itemValue);
            setPrefix("");
          }}
        >
          <Picker.Item label="Select Your Bank" value="" />
          {Object.keys(bankOptions).map((bank) => (
            <Picker.Item key={bank} label={bank} value={bank} />
          ))}
        </Picker>
        {bank && (
          <Picker
            selectedValue={prefix}
            style={styles.picker}
            onValueChange={(itemValue) => setPrefix(itemValue)}
          >
            <Picker.Item label="Select Card Prefix" value="" />
            {bankOptions[bank].map((prefix) => (
              <Picker.Item key={prefix} label={prefix} value={prefix} />
            ))}
          </Picker>
        )}
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <View style={styles.row}>
          <Picker
            selectedValue={expiryMonth}
            style={[styles.picker, { flex: 1 }]}
            onValueChange={(itemValue) => setExpiryMonth(itemValue)}
          >
            <Picker.Item label="MM" value="" />
            {Array.from({ length: 12 }, (_, i) => (
              <Picker.Item
                key={i + 1}
                label={`${i + 1}`.padStart(2, "0")}
                value={`${i + 1}`.padStart(2, "0")}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={expiryYear}
            style={[styles.picker, { flex: 1 }]}
            onValueChange={(itemValue) => setExpiryYear(itemValue)}
          >
            <Picker.Item label="YYYY" value="" />
            {Array.from({ length: 10 }, (_, i) => (
              <Picker.Item
                key={i}
                label={`${2024 + i}`}
                value={`${2024 + i}`}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="PIN"
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBank("");
              setPrefix("");
              setCardNumber("");
              setExpiryMonth("");
              setExpiryYear("");
              setPin("");
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    color: "red",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 20,
    backgroundColor: "pink",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

export default Knet;
