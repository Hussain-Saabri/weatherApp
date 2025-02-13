import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Page/Tenant/HomeScreen";  // Tenant Home
import HomeScreen1 from "../Page/Landlord/HomeScreen1"; // Landlord Home
import RootStackScreen from "../Page/RootStackScreen"; // Login/Register screens

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const role = await AsyncStorage.getItem("userRole"); // Fetch stored role
        if (role) {
          setUserRole(role);
        }
      } catch (error) {
        console.error("Error fetching login data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userRole === "tenant" ? (
        <HomeScreen />
      ) : userRole === "landlord" ? (
        <HomeScreen1 />
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

export default Routes;
