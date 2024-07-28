import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import MainNavigation from "./src/navigations/MainNavigation"; // Ensure the correct path
import AuthNavigation from "./src/navigations/AuthNavigation"; // Ensure the correct path
import UserContext from "./src/context/Usercontext";
import { getToken } from "./src/api/storage";

// Initialize the QueryClient outside of the component
const queryClient = new QueryClient();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setLocation(location);
      } catch (error) {
        setErrorMsg("Error getting location: " + error.message);
      }
    })();

    (async () => {
      const token = await getToken();
      if (token) {
        setUser(true);
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[user, setUser]}>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            {user ? <MainNavigation /> : <AuthNavigation />}
          </NavigationContainer>
        </View>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
