// src/screens/Login.js
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/Usercontext";

const Login = () => {
  const [user,setUser]=useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  // const mutation = useMutation(login, {
  //   onSuccess: (data) => {
  //     navigation.navigate("HomePage");
  //     // Handle successful login
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     // Handle login error
  //     console.error(error);
  //   },
  // });

  const {mutate} = useMutation({
    mutationFn: () => login({username, password}),
    mutationKey: ["login"],
    onSuccess: () => {

      setUser(true)
      // navigation.navigate("HomeScreen")
    }
    })

  const handleLogin = () => {
   mutate();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your image source
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  showPasswordButton: {
    padding: 10,
  },
  forgotText: {
    color: "#6E6E6E",
    marginVertical: 10,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4F4F4F",
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default Login;
