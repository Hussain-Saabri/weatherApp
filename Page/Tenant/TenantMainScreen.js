import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TenantBottomNavigation from "../../Navigation/TenantBottomNavigation";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const TenantMainScreen = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TenantBottomNavigation {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TenantMainScreen;
