// src/screens/manageBooking/ManageBooking.js
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ManageBooking = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text style={styles.text} >Manage Booking</Text>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default ManageBooking;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
text:{
    flex:1,

  justifyContent:'center',
  alignContent:'center'
}


});
