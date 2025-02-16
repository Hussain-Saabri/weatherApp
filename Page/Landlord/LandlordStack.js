import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandlordBottomNavigation from "../../Navigation/LandlordBottomNavigation";
import LandHomeScreen from "./LandHomeScreen";
import PaymentScreen from "./PaymentScreen";
import TenantStatusScreen from "./TenantStatusScreen";
import ProfileScreen from "./ProfileScreen";
import FormFillingScreen from "./FormFillingScreen";
//import AddTenantScreen from "./AddTenantScreen";
import KeyGenerationScreen from "./KeyGenerationScreen";
import NotificationLandlord from "./NotificationLandlord";
import PendingVerificationScreen from "./PendingVerificationScreen";
//import TenantStatusScreen from "./TenantStatusScreen";
import VerifiedTenantsScreen from "./VerifiedTenantsScreen"

const BottomTab = createBottomTabNavigator();

export default function LandlordTabs() {
  return (
   
<Stack.Navigator tabBar={(props) => <TenantBottomNavigation {...props} />}>
<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
 <Stack.Screen name="AddTenantScreen" component={AddTenantScreen} />
 <Stack.Screen name="FormFillingScreen " component={FormFillingScreen } />
 <Stack.Screen name="KeyGenerationScreen " component={KeyGenerationScreen } />
 <Stack.Screen name="LandHomeScreen " component={LandHomeScreen } />
 <Stack.Screen name="LandlordHome" component={LandlordHome} />
 <Stack.Screen name="NotificationLandlord" component={NotificationLandlord} />
 <Stack.Screen name=" PaymentScreen" component={ PaymentScreen} />
 <Stack.Screen name="PendingVerificationScreen" component={PendingVerificationScreen} />
 <Stack.Screen name="ProfileScreen " component={ProfileScreen } />
 <Stack.Screen name="TenantStatusScreen" component={TenantStatusScreen} />
 <Stack.Screen name=" VerifiedTenantsScreen" component={ VerifiedTenantsScreen} />
     </Stack.Navigator>
  );
}