import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addVoucher } from "../../apis/vouchers";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
// import { Picker } from "@react-native-picker/picker"; //where is picker used and why?

const CreateVoucher = () => {
  const navigation = useNavigation();

  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = ({ navigation }) => {
    if (paymentMethod === "knet") {
      navigation.navigate("FakeKnet", {
        amount,
        phoneNumber,
        message,
        paymentMethod,
      });
    }
  };

  //i have to use this mutate for when the form is submitted it creates a voucher and
  //sent it to the reciever
  //can i put mutate inside the handlePayment??? ASK!!

  return (
    <View style={styles.container}>
      {/* //i want to pass the header in here  */}
      <Text style={styles.title}> Send Voucher To Your Loved Ones </Text>
      <View style={styles.amountContainer}>
        {["5", "10", "15", "20"].map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.amountButton,
              amount === value && styles.selectedAmountButton,
            ]}
            onPress={() => setAmount(value)}
          >
            <Text style={styles.amountText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={[
            styles.paymentMethodButton,
            paymentMethod === "knet" && styles.selectedPaymentMethodButton,
          ]}
          onPress={() => setPaymentMethod("knet")}
        >
          <Text style={styles.paymentMethodText}>K-Net</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateVoucher;

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#219ebc",
    fontFamily: "avenir",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  amountButton: {
    backgroundColor: "#219ebc",
    padding: 15,
    borderRadius: 10,
  },
  selectedAmountButton: {
    backgroundColor: "skyblue",
  },
  amountText: {
    fontSize: 18,
    fontFamily: "cochin",
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontFamily: "cochin",
    fontSize: 16,
  },
  paymentMethodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    fontFamily: "cochin",
  },
  paymentMethodButton: {
    flex: 1,
    backgroundColor: "#219ebc",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    fontFamily: "cochin",
  },
  selectedPaymentMethodButton: {
    backgroundColor: "#219ebc",
    fontFamily: "cochin",
  },
  paymentMethodText: {
    fontSize: 20,
    fontFamily: "cochin",
    color: "white",
  },
  payButton: {
    backgroundColor: "#219ebc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "cochin",
  },
});
