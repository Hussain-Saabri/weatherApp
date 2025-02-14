import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LandHomeScreen = () => {
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState(false);

  const verificationRequests = [
    { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
  ];

  return (
    // <ImageBackground source={require('../Landlord/assets/landlordbackground.webp')} style={styles.background}>
      <View style={styles.overlay}> 
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Landlord Dashboard</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
              <Ionicons name="search" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}>
              <Ionicons name="notifications" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        {showSearch && (
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search tenants..." 
            placeholderTextColor="#777" 
          />
        )}

        {/* Stats Section */}
        <View style={styles.statsContainer}>
        <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("TenantStatusScreen")}>
    <Text style={styles.statLabel}>Total Tenants</Text>
    <Text style={styles.statValue}>10</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("PendingVerificationScreen")}>
    <Text style={styles.statLabel}>Pending Verifications</Text>
    <Text style={styles.statValue}>2</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("VerifiedTenantsScreen")}>
    <Text style={styles.statLabel}>Completed Verifications</Text>
    <Text style={styles.statValue}>8</Text>
  </TouchableOpacity>
        </View>

        {/* Verification Requests */}
        <Text style={styles.sectionTitle}>Verification Requests</Text>
        <View style={styles.flatListWrapper}> 
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={verificationRequests}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => (
              <View style={styles.card}>
                {/* <Image source={require('../Landlord/assets/landlordbackground.webp')} style={styles.cardImage} /> */}
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardStatus}>{item.status}</Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity 
  style={styles.formButton} 
  onPress={navigation.navigate("LandlordTabs", { screen: "FormFillingScreen" })

}
>
  <Text style={styles.formButtonText}>Form Filling</Text>
</TouchableOpacity>
      </View>
    //</ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 15, paddingTop: 50 },

  // Header
  headerContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'left' },
  iconContainer: { flexDirection: 'row', gap: 15 },

  // Search Bar
  searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12, color: '#000' },

  // Stats Section
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 ,backgroundColor:"black"},
  statBox: { flex: 1, padding: 10, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center', marginHorizontal: 4 },
  statLabel: { fontSize: 12, color: '#444' },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#222' },

  // Section Title
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 },

  // FlatList Wrapper (Limits Height)
  flatListWrapper: { height: 150, marginBottom: 10 }, // Ensures it doesn't take up too much space
  flatListContainer: { paddingVertical: 5 },

  // Card Design (Smaller)
  card: { backgroundColor: 'white', borderRadius: 8, padding: 8, marginRight: 8, width: 100, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
  cardImage: { width: 60, height: 60, borderRadius: 8, marginBottom: 5 }, // Reduced Image Size
  cardTitle: { fontSize: 12, fontWeight: 'bold', color: '#333' },
  cardStatus: { fontSize: 10, color: '#555' },
  // Form Button
formButton: {
  backgroundColor: '#007bff',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 15,
},
formButtonText: {
  color: 'white',
  fontWeight: 'bold',
},

});

export default LandHomeScreen;

// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require('../landlord/assets/landlordbackground.webp')} style={styles.background}>
//       <View style={styles.overlay}> 
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.title}>Landlord Dashboard</Text>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//               <Ionicons name="search" size={22} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}>
//               <Ionicons name="notifications" size={22} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         {showSearch && (
//           <TextInput 
//             style={styles.searchInput} 
//             placeholder="Search tenants..." 
//             placeholderTextColor="#777" 
//           />
//         )}

//         {/* Stats Section */}
//         <View style={styles.statsContainer}>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
//         </View>

//         {/* Verification Requests */}
//         <Text style={styles.sectionTitle}>Verification Requests</Text>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={verificationRequests}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.flatListContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image source={{ uri: item.image }} style={styles.cardImage} />
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardStatus}>{item.status}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1 },
//   overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 15, paddingTop: 50 }, // Increased paddingTop
  
//   // Header
//   headerContainer: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     marginBottom: 15 
//   },
//   title: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'left' }, // Increased font size
//   iconContainer: { flexDirection: 'row', gap: 15 },

//   // Search Bar
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12, color: '#000' },

//   // Stats Section
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
//   statBox: { flex: 1, padding: 10, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center', marginHorizontal: 4 },
//   statLabel: { fontSize: 12, color: '#444' },
//   statValue: { fontSize: 16, fontWeight: 'bold', color: '#222' },

//   // Section Title
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 },

//   // FlatList Container
//   flatListContainer: { paddingVertical: 5 },

//   // Card Design
//   card: { backgroundColor: 'white', borderRadius: 8, padding: 10, marginRight: 8, width: 120, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
//   cardImage: { width: '100%', height: 70, borderRadius: 8, marginBottom: 8 },
//   cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 12, color: '#555' },
// });

// export default LandHomeScreen;


// import Ionicons from '@expo/vector-icons/Ionicons'; // Updated for Expo
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require('../landlord/assets/landlordbackground.webp')} style={styles.background}>
//       <View style={styles.container}>
//         {/* Header Section */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.title}>Landlord Dashboard</Text>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//               <Ionicons name="search" size={24} color="white" style={styles.icon} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}> 
//               <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Input */}
//         {showSearch && (
//           <TextInput style={styles.searchInput} placeholder="Search tenants..." placeholderTextColor="#777" />
//         )}

//         {/* Stats Section */}
//         <View style={styles.statsContainer}>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
//         </View>

//         {/* Verification Requests */}
//         <Text style={styles.sectionTitle}>Verification Requests</Text>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={verificationRequests}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.flatListContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image source={{ uri: item.image }} style={styles.cardImage} />
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardStatus}>{item.status}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1, resizeMode: 'cover' },
//   container: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
//   headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', color: 'white' },
//   iconContainer: { flexDirection: 'row', gap: 15 },
//   icon: { padding: 5 },
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20, color: '#000' },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   statBox: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
//   statLabel: { fontSize: 14, color: '#444' },
//   statValue: { fontSize: 18, fontWeight: 'bold', color: '#222' },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
//   flatListContainer: { paddingVertical: 10 },
//   card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginRight: 10, width: 140, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
//   cardImage: { width: '100%', height: 80, borderRadius: 10, marginBottom: 10 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 14, color: '#555' },
// });

// export default LandHomeScreen;


// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require("./assets/landlordbackground.webp")} style={styles.background}>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <Text style={styles.title}>Landlord Dashboard</Text>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//               <Ionicons name="search" size={24} color="white" style={styles.icon} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}> 
//               <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {showSearch && (
//           <TextInput style={styles.searchInput} placeholder="Search tenants..." placeholderTextColor="#777" />
//         )}

//         <View style={styles.statsContainer}>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
//         </View>

//         <Text style={styles.sectionTitle}>Verification Requests</Text>

//         <View style={styles.flatListWrapper}>
//           <FlatList
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             data={verificationRequests}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={styles.flatListContainer}
//             renderItem={({ item }) => (
//               <View style={styles.card}>
//                 <Image source={{ uri: item.image }} style={styles.cardImage} />
//                 <Text style={styles.cardTitle}>{item.name}</Text>
//                 <Text style={styles.cardStatus}>{item.status}</Text>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1, resizeMode: 'cover' },
//   container: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
//   headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', color: 'white' },
//   iconContainer: { flexDirection: 'row', gap: 15 },
//   icon: { padding: 5 },
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20, color: '#000' },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   statBox: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
//   statLabel: { fontSize: 14, color: '#444' },
//   statValue: { fontSize: 18, fontWeight: 'bold', color: '#222' },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
//   flatListWrapper: { maxHeight: 160, marginBottom: 20, justifyContent: "center", alignItems: "center" },
//   flatListContainer: { paddingVertical: 10, alignItems: "center", justifyContent: "center" },
//   card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginRight: 10, width: 140, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
//   cardImage: { width: '100%', height: 80, borderRadius: 10, marginBottom: 10 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 14, color: '#555' },
// });

// export default HomeScreen;


// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require("./assets/landlordbackground.webp")} style={styles.background}>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <Text style={styles.title}>Landlord Dashboard</Text>
//           <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate("Notification")}>
//             <Text style={styles.notificationText}>🔔</Text>
//           </TouchableOpacity>
//         </View>

//         <TextInput style={styles.searchInput} placeholder="Search tenants..." placeholderTextColor="#777" />

//         <View style={styles.statsContainer}>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
//         </View>

//         <Text style={styles.sectionTitle}>Verification Requests</Text>
        
//         {/* Limit FlatList Height */}
//         <View style={styles.flatListWrapper}>
//           <FlatList
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             data={verificationRequests}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={styles.flatListContainer}
//             renderItem={({ item }) => (
//               <View style={styles.card}>
//                 <Image source={{ uri: item.image }} style={styles.cardImage} />
//                 <Text style={styles.cardTitle}>{item.name}</Text>
//                 <Text style={styles.cardStatus}>{item.status}</Text>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1, resizeMode: 'cover' },
//   container: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
//   headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', color: 'white' },
//   notificationButton: { backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5 },
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20, color: '#000' },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   statBox: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
//   statLabel: { fontSize: 14, color: '#444' },
//   statValue: { fontSize: 18, fontWeight: 'bold', color: '#222' },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
  
//   /* New Styles */
//   flatListWrapper: { maxHeight: 160, marginBottom: 20 , justifyContent:"center", alignItems:"center"},  // Limits FlatList height
//   flatListContainer: { paddingVertical: 10 , alignItems:"center",justifyContent:"center"},
//   card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginRight: 10, width: 140, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
//   cardImage: { width: '100%', height: 80, borderRadius: 10, marginBottom: 10 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 14, color: '#555' },
// });

// export default HomeScreen;


// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require("./assets/landlordbackground.webp")} style={styles.background}>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <Text style={styles.title}>Landlord Dashboard</Text>
//           <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate("Notification")}>
//             <Text style={styles.notificationText}>🔔</Text>
//           </TouchableOpacity>
//         </View>

//         <TextInput style={styles.searchInput} placeholder="Search tenants..." placeholderTextColor="#777" />

//         <View style={styles.statsContainer}>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
//           <View style={styles.statBox}><Text style={styles.statLabel}>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
//         </View>

//         <Text style={styles.sectionTitle}>Verification Requests</Text>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={verificationRequests}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.flatListContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image source={{ uri: item.image }} style={styles.cardImage} />
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardStatus}>{item.status}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1, resizeMode: 'cover' },
//   container: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
//   headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', color: 'white' },
//   notificationButton: { backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5 },
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20, color: '#000' },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   statBox: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
//   statLabel: { fontSize: 14, color: '#444' },
//   statValue: { fontSize: 18, fontWeight: 'bold', color: '#222' },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
//   flatListContainer: { paddingVertical: 10 },
//   card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginRight: 10, width: 140, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
//   cardImage: { width: '100%', height: 80, borderRadius: 10, marginBottom: 10 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 14, color: '#555' },
// });

// export default HomeScreen;


// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.title}>Landlord Dashboard</Text>
//         <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate("Notification")}>
//           <Text style={styles.notificationText}>🔔</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Search Bar */}
//       <TextInput style={styles.searchInput} placeholder="Search tenants..." placeholderTextColor="#888" />

//       {/* Stats Section */}
//       <View style={styles.statsContainer}>
//         <View style={styles.statBox}>
//           <Text style={styles.statLabel}>Total Tenants</Text>
//           <Text style={styles.statValue}>10</Text>
//         </View>
//         <View style={styles.statBox}>
//           <Text style={styles.statLabel}>Pending Verifications</Text>
//           <Text style={[styles.statValue, { color: 'orange' }]}>2</Text>
//         </View>
//         <View style={styles.statBox}>
//           <Text style={styles.statLabel}>Completed</Text>
//           <Text style={[styles.statValue, { color: 'green' }]}>8</Text>
//         </View>
//       </View>

//       {/* Verification Requests */}
//       <Text style={styles.sectionTitle}>Verification Requests</Text>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={verificationRequests}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.cardImage} />
//             <Text style={styles.cardTitle}>{item.name}</Text>
//             <Text style={[styles.cardStatus, item.status === 'Pending' ? styles.pending : styles.completed]}>
//               {item.status}
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   notificationButton: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 25,
//     elevation: 5,
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 20,
//     fontSize: 16,
//     elevation: 3,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   statBox: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     alignItems: 'center',
//     marginHorizontal: 5,
//     elevation: 4,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//   },
//   statValue: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     marginRight: 15,
//     width: 160,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   cardImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
//   cardStatus: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   pending: {
//     color: 'orange',
//   },
//   completed: {
//     color: 'green',
//   },
// });

// export default HomeScreen;


// // import { useNavigation } from '@react-navigation/native';
// // import React from 'react';
// // import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// // const HomeScreen = () => {
// //   const navigation = useNavigation();

// //   const verificationRequests = [
// //     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
// //     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
// //     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
// //   ];

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <Text style={styles.title}>Landlord Dashboard</Text>
// //         <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate("Notification")}>
// //           <Text style={styles.notificationText}>🔔</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TextInput style={styles.searchInput} placeholder="Search tenants..." />

// //       <View style={styles.statsContainer}>
// //         <View style={styles.statBox}><Text>Total Tenants</Text><Text style={styles.statValue}>10</Text></View>
// //         <View style={styles.statBox}><Text>Pending Verifications</Text><Text style={styles.statValue}>2</Text></View>
// //         <View style={styles.statBox}><Text>Completed Verifications</Text><Text style={styles.statValue}>8</Text></View>
// //       </View>

// //       <Text style={styles.sectionTitle}>Verification Requests</Text>
// //       <FlatList
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         data={verificationRequests}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.card}>
// //             <Image source={{ uri: item.image }} style={styles.cardImage} />
// //             <Text style={styles.cardTitle}>{item.name}</Text>
// //             <Text style={styles.cardStatus}>{item.status}</Text>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
// //   headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
// //   title: { fontSize: 24, fontWeight: 'bold' },
// //   notificationButton: { backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5 },
// //   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20 },
// //   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
// //   statBox: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' },
// //   statValue: { fontSize: 18, fontWeight: 'bold' },
// //   sectionTitle: { fontSize: 18, fontWeight: 'bold' },
// //   card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginRight: 10, width: 150, alignItems: 'center' },
// //   cardImage: { width: '100%', height: 100, borderRadius: 10 },
// //   cardTitle: { fontSize: 16, fontWeight: 'bold' },
// //   cardStatus: { fontSize: 14, color: '#555' },
// // });

// // export default HomeScreen;
