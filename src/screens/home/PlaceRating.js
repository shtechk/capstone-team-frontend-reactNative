import { Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { getAllRatings } from "../../apis/rating";
import RatingItem from "../../components/RatingItem";
import { useQuery } from "@tanstack/react-query";

const PlaceRating = () => {
  // const { data: Ratings } = useQuery({
  //   queryKey: ["ratings"],
  //   queryFn: () => getAllRatings(),
  // });

  // const ratingList = Ratings?.map((rating) => {
  //   <RatingItem
  //     key={rating._id}
  //     username={rating.username}
  //     review={rating.review}
  //   />;
  // });

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        backgroundColor: "red",
      }}
    >
      <Text>Hi ratings</Text>
    </View>
  );
};

export default PlaceRating;
