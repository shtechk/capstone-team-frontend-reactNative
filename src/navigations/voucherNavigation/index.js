import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vouchers from "../../screens/vouchers/Vouchers";
import CreateVoucher from "../../screens/vouchers/CreateVoucher";
import Knet from "../../screens/vouchers/Knet";
import ApplePay from "../../screens/vouchers/ApplePay";
// import OneVoucher from "../../screens/vouchers/oneVoucher";

const Stack = createStackNavigator();

const VoucherNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="allVouchers" component={Vouchers} />
      <Stack.Screen name="addNewVoucher" component={CreateVoucher} />
      <Stack.Screen name="FakeKnet" component={Knet} />
      <Stack.Screen name="FakeApplePay" component={ApplePay} />
      {/* <Stack.Screen name="oneVoucher" component={OneVoucher} /> */}
    </Stack.Navigator>
  );
};

export default VoucherNavigation;
