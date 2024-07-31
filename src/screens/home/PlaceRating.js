import { Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { getAllRatings } from "../../apis/rating";
import RatingItem from "../../components/RatingItem";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const PlaceRating = ({ navigation }) => {
  const route = useRoute();
  const _id = route.params?._id || "66a0e833fce937019db42b8c";

  const { data: ratings } = useQuery({
    queryKey: ["ratings"],
    queryFn: () => getAllRatings(_id),
  });

  console.log(ratings);
  // const ratingList = [
  //   { _id: "123", username: "56565", review: "hi" },
  //   { _id: "123", username: "56565", review: "hi" },
  //   { _id: "123", username: "56565", review: "hi" },
  //   { _id: "123", username: "56565", review: "hi" },
  // ]?.map((rating) => {
  //   return (
  //     <RatingItem
  //       key={rating._id}
  //       username={rating.username}
  //       review={rating.review}
  //     />
  //   );
  // }); that is for when i want to use fake data!!

  const ratingList = ratings?.map((rating) => {
    return (
      <RatingItem
        key={rating._id}
        username={rating?.user?.first_name}
        createdAt={rating.createdAt}
        //what is used instead of this ^^^^^
        review={rating.note}
      />
    );
  });

  return (
    <View
      style={{
        flex: "1",
      }}
    >
      <Header navigation={navigation} title={"Reviews"} />
      <View
        style={{
          flex: 0.25,
          backgroundColor: "lightgreen",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: "4", backgroundColor: "pink" }}>
          <Text>image</Text>
        </View>
        <View style={{ flex: 10, backgroundColor: "yellow" }}>
          <Text> Coffe shop info </Text>
        </View>
      </View>

      <ScrollView
        style={{
          flex: "40%",
          borderRadius: "20%",
        }}
      >
        {ratingList}

        {/* //here is where it will return all the ratings that are added! */}
      </ScrollView>
    </View>
  );
};

export default PlaceRating;
