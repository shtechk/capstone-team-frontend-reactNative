import { Button, Text, View } from "react-native";
import React, { useCallback } from "react";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { getAllRatings } from "../../apis/rating";
import RatingItem from "../../components/RatingItem";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import PlaceDetails from "../../components/PlaceDetails";
import PlaceCard from "../../components/PlaceCard";

const PlaceRating = ({ navigation }) => {
  const route = useRoute();
  const _id = route.params?._id || "66a0e833fce937019db42b8c";

  const { data: ratings, refetch } = useQuery({
    queryKey: ["ratings"],
    queryFn: () => getAllRatings(_id),
  });

  const { data: place } = useQuery({
    queryKey: ["placeDetail", _id],
    queryFn: () => getPlaceById(_id),
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );
  console.log({ ratings });
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
        style={{ justifyContent: "center", paddingLeft: 20, marginTop: 10 }}
      >
        <PlaceCard
          link={place.images}
          key={place._id}
          name={place.name}
          mood={place.mood}
          //food={place.food}
          _id={place._id}
          ratings={place.ratings}
          place={place}
        />
      </View>
      {/* <View
        style={{
          flex: 0.25,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: "4", backgroundColor: "pink" }}>
          <Text>image</Text>
        </View>
        <View style={{ flex: 10, backgroundColor: "yellow" }}>
          <Text> Coffe shop info </Text>
        </View>
      </View> */}

      <ScrollView
        style={{
          flex: 4,
          padding: 8,
        }}
      >
        {ratingList}

        {/* //here is where it will return all the ratings that are added! */}
      </ScrollView>
      <Button
        title="Add a review"
        onPress={() => navigation.navigate("createRating", { _id: place._id })}
      />
    </View>
  );
};

export default PlaceRating;
