import { View, Text } from "react-native";
import React from "react";
import { removeToken } from "../../api/storage";
import { useFocusEffect } from "@react-navigation/native";

const LogoutScreen = () => {
  removeToken();

  return null;
};

export default LogoutScreen;

// const LogoutScreen = ({ navigation }) => {
//     const [user, setUser] = useContext(UserContext);

//     const handleLogout = () => {
//       setUser(false); // Update the user state to false
//       navigation.navigate("Secondview");
//     };

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Are you sure you want to logout?</Text>
//         <Button title="Logout" onPress={handleLogout} />
//       </View>
//     );
//   };
