import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addRating } from "../../apis/rating";
import { TextInput } from "react-native-gesture-handler";
import Header from "../../components/Header";

const CreateRating = ({ navigation }) => {
  const placeId = "66a0f5c4fce937019db42bc0";
  const [note, setNote] = useState("");
  const [mood, setMood] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["addingRating"],
    mutationFn: () => addRating({ placeId, mood, note }),
    onSuccess: () => console.log("zzzzz"),
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <Header navigation={navigation} title={"Your Review"} />
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "cochin", fontSize: "25", fontWeight: "bold" }}
          >
            Your Review Matters!
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "cochin",
              fontSize: "20",
              fontWeight: "bold",
            }}
          >
            Rate your experience
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => setMood(0)}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  margin: 10,
                  borderColor: mood == 0 ? "red" : "",
                  borderWidth: mood == 0 ? 10 : 0,
                }}
                source={require("/Users/fatemahbaqer/development/capstone-team-frontend-reactNative/assets/thumbsdown.png")}
              />
            </TouchableOpacity>
            {/* //i can wrap the image tag with touchable opacity so that when its
            touched it does what i want to do.... */}
            <TouchableOpacity onPress={() => setMood(10)}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  margin: 10,
                  borderColor: mood == 10 ? "red" : "",
                  borderWidth: mood == 10 ? 10 : 0,
                }}
                source={require("/Users/fatemahbaqer/development/capstone-team-frontend-reactNative/assets/thumbsup.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "cochin",
              fontSize: "20",
              padding: 10,
            }}
          >
            Leave us a comment
          </Text>
          <TextInput
            onChangeText={setNote}
            style={{
              width: "90%",
              height: "40%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "lightgray",
              backgroundColor: "white",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={mutate}
            style={{
              borderRadius: 7,
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#219ebc",
            }}
          >
            <Text style={{ fontFamily: "cochin", fontSize: "30" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateRating;

const styles = StyleSheet.create({});
