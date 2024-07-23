import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: "High",
      });
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <View
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <Text>Open up App.js to start working on your app!</Text>
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}
