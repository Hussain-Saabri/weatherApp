import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddTenantScreen from "./AddTenantScreen";
import FormFillingScreen from "./FormFillingScreen";
import KeyGenerationScreen from "./KeyGenerationScreen";
import LandHomeScreen from "./LandHomeScreen";
import LandlordHome from "./LandlordHome";
import NotificationLandlord from "./NotificationLandlord";
import PaymentScreen from "./PaymentScreen";
import PendingVerificationScreen from "./PendingVerificationScreen";
import ProfileScreen from "./ProfileScreen ";
import TenantStatusScreen from "./TenantStatusScreen";
import VerifiedTenantsScreen from "./VerifiedTenantsScreen";

const Stack = createStackNavigator();

export default function RootStackScreen() {
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
