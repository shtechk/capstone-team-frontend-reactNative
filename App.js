import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
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
