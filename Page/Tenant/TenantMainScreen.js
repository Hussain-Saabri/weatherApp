import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TenantBottomNavigation from "../../Navigation/TenantBottomNavigation";
import HomeScreen from "./HomeScreen";
import TenantPaymentHistory from "./TenantPaymentHistory";
import TenantQRCode from "./TenantQRCode";
import TenantProfile from "./TenantProfile";
import TenantFormFill from "./TenantFormFill";
import TenantNotification from "./TenantNotification";
import TenantsDocUpload from "./TenantsDocUpload";
import TenantVerification from "./TenantVerification";



const Tab = createBottomTabNavigator();

const TenantMainScreen = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TenantBottomNavigation {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="PaymentHistory" component={TenantPaymentHistory} options={{ headerShown: false }} />
      <Tab.Screen name="QRcode" component={TenantQRCode} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={TenantProfile} options={{headerShown: false}}/>
      <Tab.Screen name="form" component={TenantFormFill} options={{headerShown: false}}/>
      <Tab.Screen name="notification" component={TenantNotification} options={{headerShown: false}}/>
      <Tab.Screen name="docUpload" component={TenantsDocUpload} options={{headerShown: false}}/>
      <Tab.Screen name="Verification" component={TenantVerification} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default TenantMainScreen;
