// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import React, { useCallback } from "react";
// import BookedPlace from "../../components/BookedPlace";
// import { useFocusEffect, useRoute } from "@react-navigation/native";
// import { useQuery } from "@tanstack/react-query";
// import { getAllBookings } from "../../apis/bookings";

// const UpcomingBookings = () => {
//   const {
//     data: bookings,
//     isLoading,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["bookedPlaces"],
//     queryFn: () => getAllBookings(),
//   });

//   useFocusEffect(
//     useCallback(() => {
//       refetch();
//     }, [refetch])
//   );
//   console.log("first");
//   //
//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>Error loading bookings</Text>;
//   }

//   return (
//     <View style={{ flex: 1, paddingVertical: 5 }}>

//       <View>
//         <Text style={styles.header}>My Bookings</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {bookings.map((booking) => (
//           <BookedPlace key={booking._id} _id={booking._id} booking={booking} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
// });

// export default UpcomingBookings;

import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import BookedPlace from "../../components/BookedPlace";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../apis/bookings";

const UpcomingBookings = () => {
  const {
    data: bookings,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bookedPlaces"],
    queryFn: () => getAllBookings(),
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading bookings</Text>;
  }

  return (
    <View style={{ flex: 1, paddingVertical: 5 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Bookings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {bookings.map((booking) => (
          <BookedPlace key={booking._id} _id={booking._id} booking={booking} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#219ebc",
    paddingVertical: 10,
    paddingTop: 120, // Add padding at the top to create space
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  scrollViewContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UpcomingBookings;
