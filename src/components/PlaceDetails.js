import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const PlaceDetails = ({ _id }) => {
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(
          `http://192.168.8.95:8000/api/place/${_id}`
        );
        setPlace(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlace();
  }, [_id]);

  if (!place) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
      }}
    >
      {/* frame begins here */}

      {/* image of place*/}

      <View>
        {place.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 100, height: 100 }}
          />
        ))}
      </View>

      {/* //name of place */}
      <View>
        <Text>{place.name}</Text>
      </View>
      {/* // written details of place */}
      <View>
        <Text>{place.mood}</Text>
        <Text>{place.food}</Text>
        <Text>{place.drinks}</Text>
        <Text>{place.service}</Text>
        <Text>{place.parking}</Text>
        <Text>{place.timings}</Text>
      </View>

      {/* //3 icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Rating", { _id })}
        >
          <Ionicons name="star" size={32} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Location", { _id })}
        >
          <Ionicons name="location" size={32} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat", { _id })}>
          <Ionicons name="chatbubble" size={32} color="green" />
        </TouchableOpacity>
      </View>

      {/* frame ends here */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default PlaceDetails;
