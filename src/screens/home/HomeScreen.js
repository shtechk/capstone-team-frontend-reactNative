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

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  navigation = useNavigation();

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

      {/* Render the list of places */}
      {/* <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      /> */}
      {/* category list */}
      <View
        style={{
          // height: 130,
          //backgroundColor: "green",
          width: "100%",
          alignItems: "center",
        }}
      >
        <CategoryList />
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {!isLoading && <PlacesList places={places} isSuccess={isSuccess} />}
      </View>
    </View>
  );
};

export default HomeScreen;
