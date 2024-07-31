// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import dayjs from "dayjs";
// import { BASE_URL } from "../apis";

// const BookedPlace = ({ booking, hideButton, _id }) => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: `${BASE_URL}/${booking?.place?.images}` }}
//           style={styles.image}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.title}>{booking?.place?.name}</Text>
//         <Text style={styles.detail}>
//           {dayjs(booking?.date).format("DD MMM YYYY")}
//         </Text>
//         <Text style={styles.detail}>{booking?.time}</Text>
//         <Text style={styles.detail}>{booking?.persons}</Text>
//       </View>

//       {!hideButton && (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() =>
//             navigation.navigate("manageBookings", { _id: booking._id })
//           }
//         >
//           <Text style={styles.buttonText}>Modify</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     padding: 10,
//     backgroundColor: "lightgray",
//     borderRadius: 20,
//     marginVertical: 5,
//     width: "90%",
//     alignItems: "center",
//   },
//   imageContainer: {
//     marginRight: 10,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   detail: {
//     fontSize: 14,
//   },
//   button: {
//     backgroundColor: "#219ebc",
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#ffffff",
//     fontSize: 14,
//   },
// });

// export default BookedPlace;

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { BASE_URL } from "../apis";

const BookedPlace = ({ booking, hideButton, _id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${BASE_URL}/${booking?.place?.images}` }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{booking?.place?.name}</Text>
        <Text style={styles.detail}>
          {dayjs(booking?.date).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.detail}>{booking?.time}</Text>
        <Text style={styles.detail}>{booking?.persons}</Text>
      </View>
      {!hideButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("manageBookings", { _id: booking._id })
          }
        >
          <Text style={styles.buttonText}>Modify</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#219ebc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default BookedPlace;
