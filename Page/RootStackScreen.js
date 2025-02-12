import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./LoadingScreen";
import SignupScreen from "./SignUpScreen";
import SendOtpScreen from "./SendOtpScreen";
import VerifyOtpScreen from "./VerifyOtpScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import HomeScreen1 from "./HomeScreen1"
import ForgotPassword from "./ForgotPassword";
//import LoginPage from "./LoginPage"; // Import your LoginPage


const Stack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false, // Hides the header for all screens
      }}>
      <Stack.Screen name="loadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SendOtp" component={SendOtpScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home1" component={HomeScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
