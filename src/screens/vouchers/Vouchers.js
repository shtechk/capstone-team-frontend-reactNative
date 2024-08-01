import { View, Text, Button } from "react-native";
import React from "react";
import VoucherItem from "../../components/VoucherItem";
import { useQuery } from "@tanstack/react-query";
import { getAllVouchers } from "../../apis/vouchers";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const Vouchers = ({ navigation }) => {
  const navigations = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("addNewVoucher");
  };
  const { data: AllVouchers } = useQuery({
    queryKey: ["voucherss"],
    queryFn: () => getAllVouchers(),
  });
  console.log({ AllVouchers });
  const vouchersList = AllVouchers?.map((voucher) => {
    return (
      <VoucherItem
        key={voucher._id}
        amount={voucher.amount}
        message={voucher.message}
        userSender={voucher?.user?.phone_number}
        id={voucher._id}
      />
    );
  });

  return (
    <View
      style={{
        flex: "100%",
        width: "100%",
      }}
    >
      <Header navigation={navigation} title={"My Vouchers"} />

      <View style={{ flex: "50", width: "100%", gap: 7, padding: 10 }}>
        {vouchersList}
      </View>
      <View
        style={{
          flex: "10",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            borderRadius: "45%",
            height: "40%",
            minWidth: "70%",
            backgroundColor: "#219ebc",
          }}
        >
          {/* how to change the color of the title??  */}
          <TouchableOpacity
            onPress={handleNavigation}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ fontFamily: "cochin", color: "white", fontSize: "20" }}
            >
              Gift a Voucher
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Vouchers;
