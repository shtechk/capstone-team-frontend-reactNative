import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const moodIcons = [
  { label: "All", value: "", name: "All" },
  { label: "Quiet", value: "Quiet", name: "Quiet" },
  { label: "Work", value: "Work", name: "Work" },
  { label: "Rustic", value: "Rustic", name: "Rustic" },
  { label: "Lively", value: "Lively", name: "Lively" },

  // Add more moods with corresponding icons
];
const MoodSelector = ({ selectedMood, onSelectMood }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        paddingLeft: 0,
        gap: 8,
        //backgroundColor: "yellow",
        width: 350,
      }}
    >
      {moodIcons.map((mood) => (
        <TouchableOpacity
          key={mood.value}
          onPress={() => onSelectMood(mood.value)}
          style={{
            backgroundColor:
              selectedMood === mood.value ? "lightblue" : "white",
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "grey",
            height: 60,
            width: 60,
            //backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Ionicons
            //name={mood.icon}
            //name="quiet"
            size={24}
            color={selectedMood === mood.value ? "blue" : "grey"}
          /> */}
          <Text style={{ fontSize: 12 }}>{mood.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default MoodSelector;

const styles = StyleSheet.create({});
