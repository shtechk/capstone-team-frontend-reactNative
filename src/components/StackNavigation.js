// src/components/StackNavigation.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Firstview from "../screens/home/Firstview";
import Secondview from "../screens/home/Secondview";
import Login from "../screens/home/Login";
import Register from "../screens/home/Register";
import Guest from "../screens/home/Guest";
import VerifyEmail from "../screens/home/VerifyEmail";
import Homepage from "../screens/home/Homepage";
import HomeScreen from "../screens/home/HomeScreen";



const Stack = createStackNavigator();

const StackNavigation = () => {
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
      <Stack.Screen
        name="oldviewgomepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
    
  );
};

export default StackNavigation;
