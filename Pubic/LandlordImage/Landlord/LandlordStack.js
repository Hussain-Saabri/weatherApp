// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
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
   
// <Stack.Navigator tabBar={(props) => <TenantBottomNavigation {...props} />}>
// {/* <Stack.Screen name="HomeScreen" component={HomeScreen} option={{headerShown: false }} /> */}
// {/* <Stack.Screen name="LandlordHome" component={LandlordHome} option={{headerShown: false }} /> */}
// <Stack.Screen name="LandHomeScreen " component={LandHomeScreen } option={{headerShown: false }}/>
// <Stack.Screen name=" PaymentScreen" component={ PaymentScreen} option={{headerShown: false }}/>
// <Stack.Screen name="ProfileScreen " component={ProfileScreen } option={{headerShown: false }}/>
// <Stack.Screen name=" VerifiedTenantsScreen" component={ VerifiedTenantsScreen} option={{headerShown: false }}/>
//  {/* <Stack.Screen name="AddTenantScreen" component={AddTenantScreen} option={{headerShown: false }}/> */}
//  <Stack.Screen name="FormFillingScreen " component={FormFillingScreen } option={{headerShown: false }}/>
//  <Stack.Screen name="KeyGenerationScreen " component={KeyGenerationScreen } option={{headerShown: false }} />


//  <Stack.Screen name="NotificationLandlord" component={NotificationLandlord} option={{headerShown: false }}/>

//  <Stack.Screen name="PendingVerificationScreen" component={PendingVerificationScreen} option={{headerShown: false }}/>

//  <Stack.Screen name="TenantStatusScreen" component={TenantStatusScreen} option={{headerShown: false }} />

//      </Stack.Navigator>
//   );
// }


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LandlordBottomNavigation from "../../Navigation/LandlordBottomNavigation";
import FormFillingScreen from "./FormFillingScreen";
import LandHomeScreen from "./LandHomeScreen";
import PaymentScreen from "./PaymentScreen";
import ProfileScreen from "./ProfileScreen";
import TenantStatusScreen from "./TenantStatusScreen";
//import AddTenantScreen from "./AddTenantScreen";
import KeyGenerationScreen from "./KeyGenerationScreen";
import NotificationLandlord from "./NotificationLandlord";
import PendingVerificationScreen from "./PendingVerificationScreen";
//import TenantStatusScreen from "./TenantStatusScreen";
import TenantDetailScreen from "./TenantDetailScreen";
import VerifiedTenantsScreen from "./VerifiedTenantsScreen";
// import CardCarousel from "./CardCarousel";



const BottomTab = createBottomTabNavigator();

export default function LandlordTabs() {
  return (
    <BottomTab.Navigator tabBar={(props) => <LandlordBottomNavigation {...props} />}>
      <BottomTab.Screen name="Home" component={LandHomeScreen} options={{ headerShown: false }} />
     
      <BottomTab.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Status" component={TenantStatusScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="FormFillingScreen" component={FormFillingScreen } options={{headerShown: false }}/>
      <BottomTab.Screen name="KeyGenerationScreen" component={KeyGenerationScreen } options={{headerShown: false }} />


      <BottomTab.Screen name="NotificationLandlord" component={NotificationLandlord} options={{headerShown: false }}/>

      <BottomTab.Screen name="PendingVerificationScreen" component={PendingVerificationScreen} options={{headerShown: false }}/>
      <BottomTab.Screen name="TenantStatusScreen" component={TenantStatusScreen} options={{headerShown: false }} />
      <BottomTab.Screen name="VerifiedTenantsScreen" component={VerifiedTenantsScreen} options={{headerShown: false }} />
      <BottomTab.Screen name="TenantDetailScreen" component={TenantDetailScreen} options={{ headerShown: false }} />
      {/* <BottomTab.Screen name=" CardCarousel" component={ CardCarousel} options={{ headerShown: false }} /> */}
     

      </BottomTab.Navigator>
  );
}
