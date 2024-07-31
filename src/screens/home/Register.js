// src/screens/Register.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { register } from "../../api/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    phone_number: "",
    profile_image: null,
    isBusiness: false,
    business_name: "",
    business_time: "",
    business_date: "",
    business_location: "",
    business_description: "",
    business_mode: "",
    business_image: null,
  });

  const navigation = useNavigation();

  const { mutate: registerUser } = useMutation({
    mutationFn: (s) => register(s),
    onSuccess: () => {
      navigation.navigate("VerifyEmail", { email: userInfo.email });
    },
    onError: (error) => {
      if (error.response?.data?.message) {
        alert("Registration failed: " + error.response.data.message);
      } else {
        alert("Registration failed: " + error.message);
      }
    },
  });

  const pickImage = async (imageType) => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setUserInfo({ ...userInfo, [imageType]: result.assets[0].uri });
      }
    } catch (error) {
      console.error("Error picking image: ", error);
    }
  };

  const handleRegister = () => {
    if (
      !userInfo.email ||
      !userInfo.first_name ||
      !userInfo.last_name ||
      !userInfo.username ||
      !userInfo.password ||
      !userInfo.phone_number ||
      (userInfo.isBusiness &&
        (!userInfo.business_name ||
          !userInfo.business_time ||
          !userInfo.business_date ||
          !userInfo.business_location ||
          !userInfo.business_description ||
          !userInfo.business_mode))
    ) {
      alert("Please fill in all required fields");
      return;
    }

    registerUser(userInfo);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.imagePicker}
        onPress={() => pickImage("profile_image")}
      >
        {userInfo.profile_image ? (
          <Image
            source={{ uri: userInfo.profile_image }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.imagePickerText}>Select Profile Image</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={userInfo.email}
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={userInfo.first_name}
        onChangeText={(text) => setUserInfo({ ...userInfo, first_name: text })}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={userInfo.last_name}
        onChangeText={(text) => setUserInfo({ ...userInfo, last_name: text })}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userInfo.username}
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userInfo.password}
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        secureTextEntry
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={userInfo.phone_number}
        onChangeText={(text) =>
          setUserInfo({ ...userInfo, phone_number: text })
        }
      />

      <View style={styles.switchContainer}>
        <Text>Are you registering as a business?</Text>
        <Switch
          value={userInfo.isBusiness}
          onValueChange={(value) =>
            setUserInfo({ ...userInfo, isBusiness: value })
          }
        />
      </View>
      {userInfo.isBusiness && (
        <>
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={() => pickImage("business_image")}
          >
            {userInfo.business_image ? (
              <Image
                source={{ uri: userInfo.business_image }}
                style={styles.image}
              />
            ) : (
              <Text style={styles.imagePickerText}>Select Business Image</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.label}>Business Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Name"
            value={userInfo.business_name}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_name: text })
            }
          />
          <Text style={styles.label}>Business Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Time"
            value={userInfo.business_time}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_time: text })
            }
          />
          <Text style={styles.label}>Business Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Date"
            value={userInfo.business_date}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_date: text })
            }
          />
          <Text style={styles.label}>Business Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Location"
            value={userInfo.business_location}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_location: text })
            }
          />
          <Text style={styles.label}>Business Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Description"
            value={userInfo.business_description}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_description: text })
            }
          />
          <Text style={styles.label}>Business Mode</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Mode"
            value={userInfo.business_mode}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, business_mode: text })
            }
          />
        </>
      )}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  imagePicker: {
    width: 200,
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 100,
  },
  imagePickerText: {
    color: "#888",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.8,
  },
  registerButtonText: {
    color: "#fff",
  },
});

export default Register;
