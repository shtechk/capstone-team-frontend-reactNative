import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { getAllRatings } from "../../apis/rating";

const PlaceRating = () => {
  const { data: AllRatings } = useQuery({
    queryKey: ["ratings"],
    queryFn: () => getAllRatings(),
  });

  return (
    <View>
      <Text>PlaceReview</Text>
    </View>
  );
};

export default PlaceRating;

const styles = StyleSheet.create({});
