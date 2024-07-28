import { Button, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VoucherItem = ({ id, amount, status, userSender }) => {
  //   const navigate = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: "10",
        backgroundColor: "red",
        maxWidth: "100%",
        maxHeight: "30%",
        borderRadius: "50%",
        borderWidth: "1",
        borderColor: "white",
      }}
    >
      <View>
        <Text> {amount} </Text>
      </View>
      <View>
        <Text> {status} </Text>
      </View>
      <View>
        <Text>{userSender}</Text>
      </View>

      {/* <Button onPress={()=>na} ></Button> in this button i want to navigate one voucher to view its details */}
      {/* i want to add a QR code that returns a mesaage of your wallet have been topped up with the amount sent */}
    </SafeAreaView>
  );
};

export default VoucherItem;
