// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Button,
// } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Picker } from "@react-native-picker/picker";

// import { useNavigation } from "@react-navigation/native";
// import dayjs from "dayjs";
// import { useMutation } from "@tanstack/react-query";
// import { createBooking, deleteBooking, updateBooking } from "../apis/bookings";
// import { useQueryClient } from "@tanstack/react-query";
// import RNDateTimePicker from "@react-native-community/datetimepicker";

// const BookingCard = ({ _id, hideButton }) => {
//   console.log(_id);
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedTime, setSelectedTime] = useState("09:00");
//   const [persons, setPersons] = useState(1);
//   const [place, setPlace] = useState(_id);
//   const [specialInstructions, setSpecialInstructions] = useState("");
//   const navigation = useNavigation();

//   console.log("persons", persons);
//   const { mutate } = useMutation({
//     mutationKey: ["postBooking"],
//     mutationFn: () =>
//       createBooking(place, date, selectedTime, specialInstructions, persons),
//     onSuccess: () => {
//       navigation.navigate("Bookings");
//     },
//   });

//   const queryClient = useQueryClient();
//   const { mutate: mutateEdit } = useMutation({
//     mutationKey: ["editBooking"],
//     mutationFn: () =>
//       updateBooking(
//         _id,
//         place,
//         date,
//         selectedTime,
//         specialInstructions,
//         persons
//       ),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bookedPlaces"]);
//     },
//   });

//   const { mutate: mutateDelete } = useMutation({
//     mutationKey: ["deleteBooking"],
//     mutationFn: () => deleteBooking(_id),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bookedPlaces"]);
//     },
//   });

//   const setTimeOptions = () => {
//     const startHour = 9;
//     const endHour = 22;
//     const times = [];

//     for (let hour = startHour; hour <= endHour; hour++) {
//       const time = dayjs().hour(hour).minute(0).format("HH:mm");
//       times.push(time);
//     }

//     return times;
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Choose Your Date</Text>
//       <View>
//         <Text onPress={() => setShowCalendar(true)} style={styles.dateText}>
//           {date.toDateString()}
//         </Text>
//         {showCalendar && (
//           <RNDateTimePicker
//             value={date}
//             mode="date"
//             display="spinner"
//             onChange={(event, date) => {
//               setShowCalendar(false);
//               if (date) {
//                 setDate(date);
//               }
//             }}
//           />
//         )}
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Choose Your Perferred Time</Text>
//         <Picker
//           selectedValue={selectedTime}
//           onValueChange={(itemValue) => {
//             console.log(itemValue);
//             setSelectedTime(itemValue);
//           }}
//           style={styles.picker}
//         >
//           {setTimeOptions().map((time) => (
//             <Picker.Item key={time} label={time} value={time} />
//           ))}
//         </Picker>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label} onChangeText={(text) => setPersons(text)}>
//           Persons
//         </Text>
//         <Picker
//           selectedValue={persons}
//           onValueChange={(itemValue) => setPersons(itemValue)}
//           style={styles.picker}
//         >
//           {[...Array(10).keys()].map((i) => (
//             <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
//           ))}
//         </Picker>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Instructions</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="if you have any special requests"
//           value={specialInstructions}
//           onChangeText={setSpecialInstructions}
//           multiline
//         />
//       </View>

//       {!hideButton ? (
//         <View style={styles.inputContainer}>
//           <Button
//             title="Pay with Knet"
//             onPress={() => {
//               mutate();
//             }}
//           />
//         </View>
//       ) : (
//         <>
//           <View>
//             <Button
//               title="Modify"
//               onPress={() => {
//                 navigation.navigate("upcomingBookings");
//                 mutateEdit();
//               }}
//             />

//             <Button
//               title="Cancel"
//               onPress={() => {
//                 navigation.navigate("upcomingBookings");
//                 mutateDelete();
//               }}
//             />
//           </View>
//         </>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     marginTop: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   inputContainer: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//     // marginBottom: 5,
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#007BFF",
//     marginBottom: 10,
//   },
//   picker: {
//     // height: 50,
//     width: "100%",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     height: 100,
//     textAlignVertical: "top",
//   },
// });

// export default BookingCard;

// ////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Button,
// } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Picker } from "@react-native-picker/picker";

// import { useNavigation } from "@react-navigation/native";
// import dayjs from "dayjs";
// import { useMutation } from "@tanstack/react-query";
// import { createBooking, deleteBooking, updateBooking } from "../apis/bookings";
// import { useQueryClient } from "@tanstack/react-query";
// import RNDateTimePicker from "@react-native-community/datetimepicker";

// const BookingCard = ({ _id, hideButton }) => {
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedTime, setSelectedTime] = useState("09:00");
//   const [persons, setPersons] = useState(1);
//   const [place, setPlace] = useState(_id);
//   const [specialInstructions, setSpecialInstructions] = useState("");
//   const navigation = useNavigation();

//   const queryClient = useQueryClient();
//   const { mutate: mutateEdit } = useMutation({
//     mutationKey: ["editBooking"],
//     mutationFn: () =>
//       updateBooking(
//         _id,
//         place,
//         date,
//         selectedTime,
//         specialInstructions,
//         persons
//       ),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bookedPlaces"]);
//     },
//   });

//   const { mutate: mutateDelete } = useMutation({
//     mutationKey: ["deleteBooking"],
//     mutationFn: () => deleteBooking(_id),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bookedPlaces"]);
//     },
//   });

//   const setTimeOptions = () => {
//     const startHour = 9;
//     const endHour = 22;
//     const times = [];

//     for (let hour = startHour; hour <= endHour; hour++) {
//       const time = dayjs().hour(hour).minute(0).format("HH:mm");
//       times.push(time);
//     }

//     return times;
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Calendar</Text>
//       <Text style={styles.dateText} onPress={() => setShowCalendar(true)}>
//         {dayjs(date).format("ddd MMM DD YYYY")}
//       </Text>
//       {showCalendar && (
//         <RNDateTimePicker
//           value={date}
//           mode="date"
//           display="spinner"
//           onChange={(event, date) => {
//             setShowCalendar(false);
//             if (date) {
//               setDate(date);
//             }
//           }}
//         />
//       )}

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Time</Text>
//         <Picker
//           selectedValue={selectedTime}
//           onValueChange={(itemValue) => setSelectedTime(itemValue)}
//           style={styles.picker}
//         >
//           {setTimeOptions().map((time) => (
//             <Picker.Item key={time} label={time} value={time} />
//           ))}
//         </Picker>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Persons</Text>
//         <Picker
//           selectedValue={persons}
//           onValueChange={(itemValue) => setPersons(itemValue)}
//           style={styles.picker}
//         >
//           {[...Array(10).keys()].map((i) => (
//             <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
//           ))}
//         </Picker>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Instructions</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="if you have any special requests"
//           value={specialInstructions}
//           onChangeText={setSpecialInstructions}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button
//           title="Modify"
//           onPress={() => {
//             navigation.navigate("upcomingBookings");
//             mutateEdit();
//           }}
//           color="#219ebc"
//         />
//         <Button
//           title="Cancel"
//           onPress={() => {
//             navigation.navigate("upcomingBookings");
//             mutateDelete();
//           }}
//           color="#219ebc"
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     marginTop: 10,
//     width: "90%",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   inputContainer: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#007BFF",
//     marginBottom: 10,
//   },
//   picker: {
//     width: "100%",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     height: 100,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
// });

// export default BookingCard;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { createBooking, updateBooking, deleteBooking } from "../apis/bookings";
import { useQueryClient } from "@tanstack/react-query";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

const BookingCard = ({ _id, hideButton }) => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [persons, setPersons] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["postBooking"],
    mutationFn: () =>
      createBooking(_id, date, selectedTime, specialInstructions, persons),
    onSuccess: () => {
      navigation.navigate("Bookings");
    },
  });

  const { mutate: mutateEdit } = useMutation({
    mutationKey: ["editBooking"],
    mutationFn: () =>
      updateBooking(_id, _id, date, selectedTime, specialInstructions, persons),
    onSuccess: () => {
      queryClient.invalidateQueries(["bookedPlaces"]);
    },
  });

  const { mutate: mutateDelete } = useMutation({
    mutationKey: ["deleteBooking"],
    mutationFn: () => deleteBooking(_id),
    onSuccess: () => {
      queryClient.invalidateQueries(["bookedPlaces"]);
    },
  });

  const setTimeOptions = () => {
    const startHour = 9;
    const endHour = 22;
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      const time = dayjs().hour(hour).minute(0).format("HH:mm");
      times.push(time);
    }
    return times;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Text style={styles.dateText} onPress={() => setShowCalendar(true)}>
        {dayjs(date).format("ddd MMM DD YYYY")}
      </Text>
      {showCalendar && (
        <RNDateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={(event, date) => {
            setShowCalendar(false);
            if (date) setDate(date);
          }}
        />
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time</Text>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
          style={styles.picker}
        >
          {setTimeOptions().map((time) => (
            <Picker.Item key={time} label={time} value={time} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Persons</Text>
        <Picker
          selectedValue={persons}
          onValueChange={(itemValue) => setPersons(itemValue)}
          style={styles.picker}
        >
          {[...Array(10).keys()].map((i) => (
            <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Instructions</Text>
        <TextInput
          style={styles.input}
          placeholder="if you have any special requests"
          value={specialInstructions}
          onChangeText={setSpecialInstructions}
          multiline
        />
      </View>

      {!hideButton ? (
        <View
          style={[
            styles.buttonContainer,
            { marginLeft: "auto", marginRight: "auto" },
          ]}
        >
          <Button
            title="Pay with Knet"
            onPress={() => {
              mutate();
            }}
            color="#219ebc"
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title="Modify"
            onPress={() => {
              navigation.navigate("upcomingBookings");
              mutateEdit();
            }}
            color="#219ebc"
          />
          <Button
            title="Cancel"
            onPress={() => {
              navigation.navigate("upcomingBookings");
              mutateDelete();
            }}
            color="#219ebc"
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 10,
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 10,
  },
  picker: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default BookingCard;
