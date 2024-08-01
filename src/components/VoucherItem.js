import { Button, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VoucherItem = ({ id, amount, message, userSender }) => {
  //   const navigate = useNavigation();
  return (
    <View
      style={{
        height: 140,
        borderRadius: 30,
        padding: 10,
        overflow: "hidden",
        borderWidth: "1",
        borderColor: "#219ebc",
        backgroundColor: "#219ebc",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontFamily: "cochin", fontSize: "18" }}>
          Amount: {amount}{" "}
        </Text>
      </View>
      <View style={{ height: 50, paddingTop: 5 }}>
        <Text style={{ color: "white", fontFamily: "cochin", fontSize: "18" }}>
          {" "}
          Message: {message}{" "}
        </Text>
      </View>
      <View style={{ height: 30 }}>
        <Text style={{ color: "white", fontFamily: "cochin", fontSize: "18" }}>
          {" "}
          From: {userSender}
        </Text>
      </View>

      {/* <Button onPress={()=>na} ></Button> in this button i want to navigate one voucher to view its details */}
      {/* i want to add a QR code that returns a mesaage of your wallet have been topped up with the amount sent */}
    </View>
  );
};

export default VoucherItem;
