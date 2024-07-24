import { View, Text, Button } from "react-native";
import React from "react";
import VoucherItem from "../../components/VoucherItem";
import { useQuery } from "@tanstack/react-query";
import { getAllVouchers } from "../../apis/vouchers";

const Vouchers = () => {
  const { data: AllVouchers } = useQuery({
    queryKey: ["getAllVouchers"],
    queryFn: () => getAllVouchers(),
  });

  const vouchersList = AllVouchers?.map((voucher) => {
    <VoucherItem
      key={voucher._id}
      amount={voucher.amount}
      status={voucher.status}
      userSender={voucher?.user.first_name}
      id={voucher._id}
    />;
  });

  return (
    <View
      style={{
        flex: "100%",
        width: "100%",
      }}
    >
      <View
        style={{ flex: "12", justifyContent: "center", alignItems: "center" }}
      >
        <Text>the notifications and drawer</Text>
      </View>
      <View
        style={{
          flex: "13",
          backgroundColor: "#219ebc",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "30",
            fontFamily: "Cochin",
            fontWeight: "bold",
          }}
        >
          My Vouchers
        </Text>
      </View>
      <View style={{ flex: "50", backgroundColor: "orange", width: "100%" }}>
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
          <Button title="Create New Vouchers"></Button>
        </View>
      </View>
    </View>
  );
};

export default Vouchers;
