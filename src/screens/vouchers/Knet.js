import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useMutation } from "@tanstack/react-query";
import { addVoucher } from "../../apis/vouchers";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Knet = ({ navigation }) => {
  const [bank, setBank] = useState("");
  const [prefix, setPrefix] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [pin, setPin] = useState("");
  const [open, setOpen] = useState(false);
  const [prefixOpen, setPrefixOpen] = useState(false);

  const router = useRoute();
  const { amount, phoneNumber, message, paymentMethod } = router.params;

  const { mutate } = useMutation({
    mutationKey: ["createVoucher"],
    mutationFn: () => addVoucher(amount, phoneNumber, message, paymentMethod),
    onSuccess: () => {
      alert("Payment Successful!");
      navigation.goBack();
    },
  });

  const handlePayment = () => {
    mutate();
  };

  const bankOptions = [
    { label: "Boubyan Bank", value: "Boubyan Bank" },
    { label: "National Bank of Kuwait", value: "National Bank of Kuwait" },
    { label: "Warba Bank", value: "Warba Bank" },
  ];

  const prefixOptions = {
    "Boubyan Bank": [
      { label: "5337", value: "5337" },
      { label: "5678", value: "5678" },
    ],
    "National Bank of Kuwait": [
      { label: "8765", value: "8765" },
      { label: "4321", value: "4321" },
    ],
    "Warba Bank": [
      { label: "1122", value: "1122" },
      { label: "3344", value: "3344" },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{
          fontSize: 50,
          fontFamily: "cochin",
          textAlign: "center",
          paddingBottom: 100,
          color: "white",
        }}
      >
        Payment Page
      </Text>
      <View>
        {/* <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Merchant: Book me</Text>
          <Text style={styles.infoText}>Website: https://www.bookme.com</Text>
          <Text style={styles.infoText}>Amount: {amount} KD </Text>
        </View> */}
        <DropDownPicker
          open={open}
          value={bank}
          items={bankOptions}
          setOpen={setOpen}
          setValue={setBank}
          style={styles.picker}
          placeholder="Select Your Bank"
        />
        {bank && (
          <DropDownPicker
            open={prefixOpen}
            value={prefix}
            items={prefixOptions[bank]}
            setOpen={setPrefixOpen}
            setValue={setPrefix}
            style={styles.picker}
            placeholder="Select Card Prefix"
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="PIN"
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          secureTextEntry
        />
        <KeyboardAvoidingView style={styles.buttonContainer}>
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
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: "#219ebc",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "cochin",
  },
  infoContainer: {
    marginBottom: 20,
    backgroundColor: "pink",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "cochin",
  },
  picker: {
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
    marginBottom: 15,
    backgroundColor: "white",
    fontFamily: "cochin",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 5,
    backgroundColor: "yellow",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    backgroundColor: "white",
    width: 90,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    fontFamily: "cochin",
    fontWeight: "bold",
    // alignItems: "center",
  },
});

export default Knet;
