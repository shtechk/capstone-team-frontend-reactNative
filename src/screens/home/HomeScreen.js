import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import CategoryList from "../../components/CategoryList";
import PlacesList from "../../components/PlacesList";
import { useQuery } from "@tanstack/react-query";
import { searchPlaces } from "../../apis/places";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

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

  // Call refetch to execute the query when the user submits the search term
  const handleSearch = () => {
    refetch();
  };

  // Function to handle notification icon press
  const onNotificationPress = () => {
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
      <View
        style={{
          width: "100%",
          height: 120,
          backgroundColor: "#fb8500", // Orange background for the header
          overflow: "hidden",
        }}
      >
        {/* Upper Header view that is below clock and battery icons on the screen */}
        <View style={{ flex: 50, backgroundColor: "#219ebc" }}></View>
        {/* lower header*/}
        <View
          style={{
            flex: 70,
            backgroundColor: "#219ebc", // yellow background for the lower header
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          {/* Drawer Icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              //backgroundColor: "#219ebc", // orange background for the drawer button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>

          {/* Title "Home" */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#023047", // Dark blue text for the title
              }}
            >
              Home
            </Text>
          </View>
          {/* Notification Icon */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              // backgroundColor: "#fb8500", // orange background for the notification button
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onNotificationPress}
          >
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
          height: 130,
          //backgroundColor: "green",
          width: 400,
          alignItems: "center",
        }}
      >
        <CategoryList />
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          //backgroundColor: "red",
        }}
      >
        {!isLoading && <PlacesList places={places} isSuccess={isSuccess} />}
      </View>
    </View>
  );
};

export default HomeScreen;
