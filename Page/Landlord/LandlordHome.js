import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FormFillingScreen from "../Pages/FormFillingScreen";
import LandHomeScreen from "../Pages/LandHomeScreen";
import PaymentScreen from "../Pages/PaymentScreen";
import ProfileScreen from "../Pages/ProfileScreen";
import VerifiedTenantsScreen from "../Pages/VerifiedTenantsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ✅ Bottom Tabs Component
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tenants") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Payment") {
            iconName = focused ? "card" : "card-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={LandHomeScreen} />
      <Tab.Screen name="Tenants" component={VerifiedTenantsScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// ✅ Landlord Stack Navigator
const LandlordHome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandlordTabs" component={BottomTabs} />
      <Stack.Screen name="FormFillingScreen" component={FormFillingScreen} />
    </Stack.Navigator>
  );
};

export default LandlordHome;

// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import FormFillingScreen from "../Landlord/FormFillingScreen";
// import LandHomeScreen from "../Landlord/LandHomeScreen";
// import PaymentScreen from "../Landlord/PaymentScreen";
// import ProfileScreen from "../Landlord/ProfileScreen";
// import VerifiedTenantsScreen from "../Landlord/VerifiedTenantsScreen";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// // ✅ Bottom Tabs Component
// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Tenants") {
//             iconName = focused ? "people" : "people-outline";
//           } else if (route.name === "Profile") {
//             iconName = focused ? "person-circle" : "person-circle-outline";
//           } else if (route.name === "Payment") {
//             iconName = focused ? "card" : "card-outline";
//           }

//           return <Ionicons name={iconName} size={24} color={color} />;
//         },
//         tabBarActiveTintColor: "#007bff",
//         tabBarInactiveTintColor: "gray",
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Home" component={LandHomeScreen} />
//       <Tab.Screen name="Tenants" component={VerifiedTenantsScreen} />
//       <Tab.Screen name="Payment" component={PaymentScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// // ✅ Landlord Stack Navigator
// const LandlordHome = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="LandlordTabs" component={BottomTabs} />
//       <Stack.Screen name="FormFillingScreen" component={FormFillingScreen} />
//     </Stack.Navigator>
//   );
// };

// export default LandlordHome;

// // import { Ionicons } from "@expo/vector-icons";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import React from "react";
// // import FormFillingScreen from "../Pages/FormFillingScreen"; // Import the FormFillingScreen
// // import LandHomeScreen from "../Pages/LandHomeScreen";
// // import PaymentScreen from "../Pages/PaymentScreen";
// // import ProfileScreen from "../Pages/ProfileScreen";
// // import VerifiedTenantsScreen from "../Pages/VerifiedTenantsScreen";

// // const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// // // ✅ Bottom Tabs Component
// // const BottomTabs = () => {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color }) => {
// //           let iconName;

// //           if (route.name === "Home") {
// //             iconName = focused ? "home" : "home-outline";
// //           } else if (route.name === "Tenants") {
// //             iconName = focused ? "people" : "people-outline";
// //           } else if (route.name === "Profile") {
// //             iconName = focused ? "person-circle" : "person-circle-outline";
// //           } else if (route.name === "Payment") {
// //             iconName = focused ? "card" : "card-outline";
// //           }

// //           return <Ionicons name={iconName} size={24} color={color} />;
// //         },
// //         tabBarActiveTintColor: "#007bff",
// //         tabBarInactiveTintColor: "gray",
// //         headerShown: false,
// //       })}
// //     >
// //       <Tab.Screen name="Home" component={LandHomeScreen} />
// //       <Tab.Screen name="Tenants" component={VerifiedTenantsScreen} />
// //       <Tab.Screen name="Payment" component={PaymentScreen} />
// //       <Tab.Screen name="Profile" component={ProfileScreen} />
// //     </Tab.Navigator>
// //   );
// // };

// // // ✅ Landlord Stack Navigator
// // const LandlordHome = () => {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="LandlordTabs" component={BottomTabs} />
// //       <Stack.Screen name="FormFilling" component={FormFillingScreen} />
// //     </Stack.Navigator>
// //   );
// // };

// // export default LandlordHome;

// // import { Ionicons } from "@expo/vector-icons";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import LandHomeScreen from "../Pages/LandHomeScreen";
// // import PaymentScreen from "../Pages/PaymentScreen";
// // import ProfileScreen from "../Pages/ProfileScreen";
// // import VerifiedTenantsScreen from "../Pages/VerifiedTenantsScreen";

// // const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// // // ✅ Bottom Tabs Component
// // const BottomTabs = () => {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color }) => {
// //           let iconName;

// //           if (route.name === "Home") {
// //             iconName = focused ? "home" : "home-outline";
// //           } else if (route.name === "Tenants") {
// //             iconName = focused ? "people" : "people-outline";
// //           } else if (route.name === "Profile") {
// //             iconName = focused ? "person-circle" : "person-circle-outline";
// //           } else if (route.name === "Payment") {
// //             iconName = focused ? "card" : "card-outline";
// //           }

// //           return <Ionicons name={iconName} size={24} color={color} />;
// //         },
// //         tabBarActiveTintColor: "#007bff",
// //         tabBarInactiveTintColor: "gray",
// //         headerShown: false,
// //       })}
// //     >
// //       <Tab.Screen name="Home" component={LandHomeScreen} />
// //       <Tab.Screen name="Tenants" component={VerifiedTenantsScreen} />
// //       <Tab.Screen name="Payment" component={PaymentScreen} />
// //       <Tab.Screen name="Profile" component={ProfileScreen} />
      
// //     </Tab.Navigator>
// //   );
// // };

// // // ✅ Landlord Stack Navigator
// // const LandlordHome = () => {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="LandlordTabs" component={BottomTabs} />
// //     </Stack.Navigator>
// //   );
// // };

// // export default LandlordHome;


