// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import PlaceDetails from "../../components/PlaceDetails";
// import BookingCard from "../../components/BookingCard";
// import { useRoute } from "@react-navigation/native";
// import { useQuery } from "@tanstack/react-query";
// import { getPlaceById } from "../../apis/places";
// import { SafeAreaView } from "react-native-safe-area-context";

// const CreateBooking = () => {
//   const route = useRoute();
//   const { _id } = route.params;

//   return (
//     <View style={{ flex: 1, backgroundColor: "lightgray" }}>
//       {/* // header */}

//       <PlaceDetails _id={_id} />
//       {/* // Place card details */}
//       <ScrollView
//         contentContainerStyle={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       ></ScrollView>
//       {/* // booking field inputs */}
//       <ScrollView>
//         <BookingCard _id={_id} />
//       </ScrollView>
//       {/* // "book" button here */}
//       <View></View>
//       {/* end */}
//     </View>
//   );
// };

// export default CreateBooking;

// const styles = StyleSheet.create({});

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceDetails from "../../components/PlaceDetails";
import BookingCard from "../../components/BookingCard";
import { useRoute } from "@react-navigation/native";

const CreateBooking = () => {
  const route = useRoute();
  const { _id } = route.params;

  return (
    <View style={styles.container}>
      <PlaceDetails _id={_id} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BookingCard _id={_id} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollViewContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default CreateBooking;
