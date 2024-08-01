import { Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import CategoryList from "../../components/CategoryList";
import PlacesList from "../../components/PlacesList";
import { useQuery } from "@tanstack/react-query";
import { searchPlaces } from "../../apis/places";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import MoodSelector from "../../components/MoodSelector";

//For the FilterByMood
const moodOptions = [
  // { label: "All", value: "" },
  // { label: "Quiet", value: "quiet" },
  // { label: "Relaxed", value: "Relaxed" },
  // { label: "Energetic", value: "energetic" },
  // { label: "Cozy", value: "cozy" },
  // { label: "Chic", value: "chic" },
  // Add more moods as needed

  { label: "All", value: "", icon: "md-globe" },
  { label: "Quiet", value: "quiet", icon: "md-volume-off" },
  { label: "Relaxed", value: "relaxed", icon: "md-spa" },
  { label: "Energetic", value: "energetic", icon: "md-flash" },
  { label: "Cozy", value: "cozy", icon: "md-cafe" },
  { label: "Chic", value: "chic", icon: "md-shirt" },
  // Add more moods with corresponding icons
];

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMood, setSelectedMood] = useState(moodOptions[0].value); //For selected Mood

  navigation = useNavigation();

  // Function to filter places by mood
  const filterPlacesByMood = (places, selectedMood) => {
    // If "All" is selected, return all places
    if (selectedMood === "") {
      return places;
    }
    // Otherwise, filter by the selected mood
    return places.filter(
      (place) => place.mood.toLowerCase() === selectedMood.toLowerCase()
    );
  };

  const {
    data: places,
    isLoading,
    isError,
    refetch,
    isSuccess,
  } = useQuery({
    queryKey: ["searchPlaces", searchTerm],
    queryFn: () => searchPlaces(searchTerm),
  });

  // console.log({ HELORKJKSDJFKSJDKJSK: places });
  // Call refetch to execute the query when the user submits the search term
  const handleSearch = () => {
    refetch();
  };

  // Function to handle notification icon press
  const onNotificationPress = () => {
    navigation.navigate("notification");
    // Handle the press event, e.g., navigate to a notifications screen
    // navigation.navigate('NotificationsScreen');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white", // Dark blue background for the main view #023047
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Overall header view at the top */}
      <View style={{ width: "100%" }}>
        <Header navigation={navigation} title={"Home"} />
      </View>
      {/* Search Bar View */}
      <View
        style={{
          padding: 10,
          alignItems: "center",
          position: "absolute",
          top: 90,
          left: 50,
          width: "80%",
        }}
      >
        <View //this view to wrap the Ionicon for search and the textInput "search...."
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            borderRadius: 20,
            paddingHorizontal: 10,
            height: 40,
            width: "100%",
          }}
        >
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search..."
            style={{
              flex: 1,
              marginLeft: 4,
              fontSize: 16,
            }}
            placeholderTextColor="gray"
            value={searchTerm}
            onChangeText={setSearchTerm}
            // onSubmitEditing={handleSearch}
          />
        </View>
      </View>
      {/* Display loading state and error state */}
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error fetching data</Text>}

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          //backgroundColor: "purple",
          justifyContent: "center",
          gap: 8,
          flexDirection: "row",
        }}
      >
        {/* Drop-down menu */}
        {/* <Dropdown
          data={moodOptions}
          labelField="label"
          valueField="value"
          value={selectedMood}
          onChange={(item) => {
            setSelectedMood(item.value);
            // Add any additional logic for when a mood is selected
          }}
          style={{
            height: 40,
            width: "70%",
            //backgroundColor: "red",
            borderRadius: 20,
            paddingHorizontal: 10,
            borderWidth: 1,
          }}
        /> */}

        {/* Mood-selector componet to select the mood */}
        <Text
          style={{
            fontSize: 20,
            color: "purple",
            fontFamily: "Times New Roman",
          }}
        >
          Mood:
        </Text>
        <MoodSelector
          selectedMood={selectedMood}
          onSelectMood={setSelectedMood}
        />
      </View>

      {/* category list */}
      {/* <View
        style={{
          // height: 130,
          //backgroundColor: "green",
          width: "100%",
          alignItems: "center",
        }}
      >
        <CategoryList />
      </View> */}

      {/* Place List */}
      <View
        style={{
          width: "100%",
          height: "100%",
          //backgroundColor: "green",
          gap: 4,
        }}
      >
        <View
          style={{
            //backgroundColor: "red",
            justifyContent: "flex-start",
            width: "100%",
            paddingLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              //fontWeight: "bold",
              color: "black",
            }}
          >
            Nearby Cafes:
          </Text>
        </View>
        {/* {!isLoading && <PlacesList places={places} isSuccess={isSuccess} />} */}
        {!isLoading && (
          <PlacesList
            places={filterPlacesByMood(places, selectedMood)}
            isSuccess={isSuccess}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
