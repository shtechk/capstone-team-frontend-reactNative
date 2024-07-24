import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vouchers from "../../screens/vouchers/Vouchers";
// import OneVoucher from "../../screens/vouchers/oneVoucher";

const Stack = createStackNavigator();

const VoucherNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="allVouchers" component={Vouchers} />
      {/* <Stack.Screen name="oneVoucher" component={OneVoucher} /> */}
    </Stack.Navigator>
  );
};

export default VoucherNavigation;
