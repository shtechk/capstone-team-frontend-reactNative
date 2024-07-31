import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LogoutScreen from "../../screens/home/LogoutScreen";

const Stack = createStackNavigator();
export const Logout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
    </Stack.Navigator>
  );
};
