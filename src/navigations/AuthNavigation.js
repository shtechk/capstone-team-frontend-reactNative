// src/navigations/AuthNavigation.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Secondview from "../screens/home/Secondview";
import Login from "../screens/home/Login";
import Register from "../screens/home/Register";
import VerifyEmail from "../screens/home/VerifyEmail";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Secondview">
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
        name="VerifyEmail"
        component={VerifyEmail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
