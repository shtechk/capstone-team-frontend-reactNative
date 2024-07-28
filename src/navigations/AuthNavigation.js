// src/navigations/AuthNavigation.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Firstview from "../screens/home/Firstview";
import Secondview from "../screens/home/Secondview";
import Login from "../screens/home/Login";
import Register from "../screens/home/Register";
import Guest from "../screens/home/Guest";
import VerifyEmail from "../screens/home/VerifyEmail";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Firstview">
      <Stack.Screen
        name="Firstview"
        component={Firstview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Secondview"
        component={Secondview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guest"
        component={Guest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
