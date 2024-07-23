import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <View
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}
