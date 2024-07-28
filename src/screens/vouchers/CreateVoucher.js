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
// import { Picker } from "@react-native-picker/picker"; //where is picker used and why?

const CreateVoucher = () => {
  const navigation = useNavigation();

  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (paymentMethod === "knet") {
      navigation.navigate("FakeKnet");
    } else {
      navigation.navigate("FakeApplePay");
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["createVoucher"],
    mutationFn: () => addVoucher(),
    onSuccess: () => {
      navigation.navigate("allVouchers");
    },
  });

  //i have to use this mutate for when the form is submitted it creates a voucher and
  //sent it to the reciever
  //can i put mutate inside the handlePayment??? ASK!!

  return (
    <View style={styles.container}>
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
            paymentMethod === "apple" && styles.selectedPaymentMethodButton,
          ]}
          onPress={() => setPaymentMethod("apple")}
        >
          <Text style={styles.paymentMethodText}>Apple Pay</Text>
        </TouchableOpacity>
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
    backgroundColor: "#FFF",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "skyblue",
    fontFamily: "avenir",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  amountButton: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 10,
  },
  selectedAmountButton: {
    backgroundColor: "skyblue",
  },
  amountText: {
    fontSize: 18,
    fontFamily: "avenir",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontFamily: "avenir",
  },
  paymentMethodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    fontFamily: "avenir",
  },
  paymentMethodButton: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    fontFamily: "avenir",
  },
  selectedPaymentMethodButton: {
    backgroundColor: "skyblue",
    fontFamily: "avenir",
  },
  paymentMethodText: {
    fontSize: 18,
    fontFamily: "avenir",
  },
  payButton: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "black",
    fontSize: 18,
    fontFamily: "avenir",
  },
});
