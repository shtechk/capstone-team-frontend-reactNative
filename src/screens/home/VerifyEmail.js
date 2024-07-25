import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useMutation } from "react-query";
import { verifyEmail } from "../../api/auth";
import { useNavigation, useRoute } from "@react-navigation/native";

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const route = useRoute();
  const navigation = useNavigation();
  const email = route.params?.email;

  useEffect(() => {
    if (!email) {
      alert("No email provided. Please register again.");
      navigation.navigate("Register");
    }
  }, [email]);

  const {
    mutate: verifyEmailMutate,
    isLoading,
    isError,
    error,
  } = useMutation(verifyEmail, {
    onSuccess: () => {
      alert("Verification successful");
      navigation.navigate("Login");
    },
    onError: (error) => {
      alert("Verification failed: " + error.message);
    },
  });

  const handleVerify = () => {
    if (!verificationCode) {
      alert("Please enter the verification code.");
      return;
    }
    verifyEmailMutate({ email, verification_code: verificationCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      {email ? (
        <>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.emailText}>{email}</Text>
          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
          {isLoading && <Text>Verifying...</Text>}
          {isError && <Text>{error.message}</Text>}
        </>
      ) : (
        <Text style={styles.errorText}>No email provided. Please register again.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  emailText: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.8,
  },
  verifyButtonText: {
    color: "#fff",
  },
  errorText: {
    color: "red",
    marginTop: 20,
  },
});

export default VerifyEmail;
