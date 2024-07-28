// src/screens/Firstview.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Firstview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Secondview")}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Secondview")}
      >
        <Text style={styles.buttonText}>عربي</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4F4F4F",
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default Firstview;
