// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import BookedPlace from "../../components/BookedPlace";
// import BookingCard from "../../components/BookingCard";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getOneBooking, updateBooking } from "../../apis/bookings";

// const ManageBooking = () => {
//   const route = useRoute();

//   const { _id } = route.params;

//   const { data } = useQuery({
//     queryKey: ["booking", _id],
//     queryFn: () => getOneBooking(_id),
//   });
//   return (
//     <View style={{ flex: 90, paddingVertical: 5 }}>
//       {/* frame inputs begin here */}
//       {/* // header */}
//       <View></View>
//       {/* // BookedPlace card details */}
//       <ScrollView
//         contentContainerStyle={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>Manage Booking</Text>
//         <BookedPlace _id={_id} hideButton={true} booking={data} />
//       </ScrollView>
//       {/* // booking field inputs */}
//       <ScrollView>
//         <BookingCard _id={_id} hideButton={true} />
//       </ScrollView>
//       {/* // 2 buttons */}

//       {/* end */}
//     </View>
//   );
// };

// export default ManageBooking;

// const styles = StyleSheet.create({});

import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BookedPlace from "../../components/BookedPlace";
import BookingCard from "../../components/BookingCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOneBooking, updateBooking } from "../../apis/bookings";

const ManageBooking = () => {
  const route = useRoute();

  const { _id } = route.params;

  const { data } = useQuery({
    queryKey: ["booking", _id],
    queryFn: () => getOneBooking(_id),
  });

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#219ebc" }}>
      {/* Header /}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Manage Booking</Text>
      </View>

      {/ BookedPlace Card Details /}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BookedPlace _id={_id} hideButton={true} booking={data} />
      </ScrollView>

      {/ Booking Field Inputs */}
      <ScrollView style={styles.cardContainer}>
        <BookedPlace _id={_id} hideButton={true} booking={data} />

        <BookingCard _id={_id} hideButton={true} />
      </ScrollView>
    </View>
  );
};

export default ManageBooking;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  scrollViewContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
