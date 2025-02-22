import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoadingScreen from "./LoadingScreen";


const Stack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,     // Hide headers
          gestureEnabled: true,  // ✅ Enable swipe gestures for navigation
        }}
      >
        <Stack.Screen name="loadingScreen" component={LoadingScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
