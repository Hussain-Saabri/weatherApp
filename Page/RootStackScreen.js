import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./LoadingScreen";
import SignupScreen from "./SignUpScreen";
import SendOtpScreen from "./SendOtpScreen";
import VerifyOtpScreen from "./VerifyOtpScreen";
import LoginScreen from "./LoginScreen";
//import HomeScreen from "./Tenant/HomeScreen";
import TenantMainScreen from "./Tenant/TenantMainScreen";
import HomeScreen1 from "./Landlord/HomeScreen1"
import ForgotPassword from "./ForgotPassword";
//import TenantMainScreen from "./Tenant/TenantMainScreen";
//import LoginPage from "./LoginPage"; // Import your LoginPage
import LandlordStack from "./Landlord/LandlordStack";

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
        <Stack.Screen name="Tenant" component={TenantMainScreen} />
        <Stack.Screen name="LandlordStack" component={LandlordStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
