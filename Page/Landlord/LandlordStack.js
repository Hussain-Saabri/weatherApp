// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import AddTenantScreen from "./AddTenantScreen";
// import FormFillingScreen from "./FormFillingScreen";
// import KeyGenerationScreen from "./KeyGenerationScreen";
// import LandHomeScreen from "./LandHomeScreen";
// import LandlordHome from "./LandlordHome";
// import NotificationLandlord from "./NotificationLandlord";
// import PaymentScreen from "./PaymentScreen";
// import PendingVerificationScreen from "./PendingVerificationScreen";
// import ProfileScreen from "./ProfileScreen";
// import TenantStatusScreen from "./TenantStatusScreen";
// import VerifiedTenantsScreen from "./VerifiedTenantsScreen";

// const Stack = createStackNavigator();

// export default function RootStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="AddTenantScreen" component={AddTenantScreen} />
//       <Stack.Screen name="FormFillingScreen" component={FormFillingScreen} />
//       <Stack.Screen name="KeyGenerationScreen" component={KeyGenerationScreen} />
//       <Stack.Screen name="LandHomeScreen" component={LandHomeScreen} />
//       <Stack.Screen name="LandlordHome" component={LandlordHome} />
//       <Stack.Screen name="NotificationLandlord" component={NotificationLandlord} />
//       <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
//       <Stack.Screen name="PendingVerificationScreen" component={PendingVerificationScreen} />
//       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//       <Stack.Screen name="TenantStatusScreen" component={TenantStatusScreen} />
//       <Stack.Screen name="VerifiedTenantsScreen" component={VerifiedTenantsScreen} />
//     </Stack.Navigator>
//   );
// }



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
    <BottomTab.Navigator tabBar={(props) => <LandlordBottomNavigation {...props} />}>
      <BottomTab.Screen name="Home" component={LandHomeScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Status" component={TenantStatusScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="FormFillingScreen" component={FormFillingScreen} options={{ headerShown: false }} />


      <BottomTab.Screen name="KeyGenerationScreen " component={KeyGenerationScreen} options={{headerShown: false }} />


      <BottomTab.Screen name="NotificationLandlord" component={NotificationLandlord} options={{headerShown: false }}/>

      <BottomTab.Screen name="PendingVerificationScreen" component={PendingVerificationScreen} options={{headerShown: false }}/>
      <BottomTab.Screen name="TenantStatusScreen" component={TenantStatusScreen} options={{headerShown: false }} />
      <BottomTab.Screen name="VerifiedTenantsScreen" component={VerifiedTenantsScreen} options={{headerShown: false }} />
      </BottomTab.Navigator>
  );
}