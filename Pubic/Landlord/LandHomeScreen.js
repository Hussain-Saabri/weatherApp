import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CardCarousel from './CardCarousel';

const LandHomeScreen = () => {
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState(false);

  // Sample Tenant Data
  const tenants = [
    { id: '1', name: 'John Kumar', image: require('../../Pubic/LandlordImage/photo.jpg') },
    { id: '2', name: 'Jane Mohan', image: require('../../Pubic/LandlordImage/photo2.jpg') },
    { id: '3', name: 'Mark Man', image: require('../../Pubic/LandlordImage/photo3.jpg') },
    { id: '4', name: 'Lisa Mona', image: require('../../Pubic/LandlordImage/photo4.jpg') },
    { id: '5', name: 'Tom Halland', image: require('../../Pubic/LandlordImage/photo.jpg') },
    { id: '6', name: 'Emma Watson', image: require('../../Pubic/LandlordImage/photo3.jpg') },
  ];
  const sliderImages = [
    require('../../Pubic/LandlordImage/photo2.jpg'),
    require('../../Pubic/LandlordImage/photo3.jpg'),
    require('../../Pubic/LandlordImage/photo4.jpg'),
    require('../../Pubic/LandlordImage/photo.jpg')
  ];
  
  return (
    <ImageBackground source={require('../../Pubic/LandlordImage/photo2.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../Pubic/LandlordImage/photo.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Krishna</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
              <Ionicons name="search" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}>
              <Ionicons name="notifications" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* App Name or Search Bar */}
        <View style={styles.searchContainer}>

          <TextInput
            style={styles.searchInput}
            placeholder="Search tenants..."
            placeholderTextColor="black"
            autoFocus={true}
          />

        </View>

        {/* Horizontal ScrollView for Tenants */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {tenants.map((tenant) => (
            <TouchableOpacity
              key={tenant.id}
              style={styles.tenantItem}
              onPress={() => navigation.navigate('TenantDetailScreen', {
                name: tenant.name,
                image: tenant.image
              })}
            >
              <Image source={tenant.image} style={styles.tenantImage} />
              <Text style={styles.tenantName}>{tenant.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.carouselContainer}>
          <CardCarousel />
          <TouchableOpacity
            style={styles.formButton}
            onPress={() => navigation.navigate('FormFillingScreen')}
          >
            <Text style={styles.formButtonText}>Form Filling</Text>
          </TouchableOpacity>
        
        </View>
      

</View>


    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 15,
    paddingTop: 50
  },

  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15
  },

  // Profile Section
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },

  // App Name and Search Bar
  searchContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  appName: {
    fontSize: 42,
    backgroundColor: 'rgba(234, 241, 234, 0)',
    fontWeight: '900',
    color: "white",
    paddingBottom: 40
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    color: '#000'
  },

  // Horizontal ScrollView for Tenants
  tenantScroll: {
    marginTop: 20,
    paddingVertical: 10,
  },
  tenantItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  tenantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  tenantName: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  // Form Filling Button
  carouselContainer: {
    // Adjust this height as needed
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 20,
    // backgroundColor:"red",
    position: "relative"

  },
  formButton: {
    backgroundColor: '#578FCA',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '60%',
    // marginTop: 10, // Space above the button
    marginBottom: 200,
  },
  formButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  
  


});

export default LandHomeScreen;


// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <ImageBackground source={require('../../Pubic/LandlordImage/photo2.jpg')} style={styles.background}>
//       <View style={styles.overlay}>
//         <View style={styles.headerContainer}>
//           <View style={styles.profileContainer}>
//             <Image
//               source={require('../../Pubic/LandlordImage/photo.jpg')}
//               style={styles.profileImage}
//             />
//             <Text style={styles.profileName}>Krishna</Text>
//           </View>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//               <Ionicons name="search" size={22} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("NotificationLandlord")}>
//               <Ionicons name="notifications" size={22} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* App Name or Search Bar */}
//         <View style={styles.searchContainer}>
//           {showSearch ? (
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search tenants..."
//               placeholderTextColor="black"
//               autoFocus={true}
//             />
//           ) : (
//             <Text style={styles.appName}>SmartLease</Text>
//           )}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1 },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     paddingHorizontal: 15,
//     paddingTop: 50
//   },

//   // Header
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 15
//   },

//   // Profile Section
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10
//   },
//   profileName: {
//     fontSize: 18,
//     color: 'white',
//     fontWeight: 'bold'
//   },

//   // App Name and Search Bar
//   searchContainer: {
//     marginVertical: 10,
//     alignItems: 'center'
//   },
//   appName: {
//     fontSize: 42,
//    backgroundColor: 'rgba(234, 241, 234, 0)',
//     fontWeight: '900',
//     color:"white",
//     paddingBottom:40
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     width: '100%',
//     color: '#000'
//   },
// });

// export default LandHomeScreen;




// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   const verificationRequests = [
//     { id: '1', name: 'John Doe', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'Jane Smith', status: 'Completed', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '4', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '5', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//     { id: '6', name: 'Mark Johnson', status: 'Pending', image: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <ImageBackground source={require('../../Pubic/TenantsImage/house3.jpg')} style={styles.background}>
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
//         <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("TenantStatusScreen")}>
//     <Text style={styles.statLabel}>Total Tenants</Text>
//     <Text style={styles.statValue}>10</Text>
//   </TouchableOpacity>

//   <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("PendingVerificationScreen")}>
//     <Text style={styles.statLabel}>Pending Verifications</Text>
//     <Text style={styles.statValue}>2</Text>
//   </TouchableOpacity>

//   <TouchableOpacity style={styles.statBox} onPress={()=>navigation.navigate("VerifiedTenantsScreen")}>
//     <Text style={styles.statLabel}>Completed Verifications</Text>
//     <Text style={styles.statValue}>8</Text>
//   </TouchableOpacity>
//         </View>

//         {/* Verification Requests */}
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
//                 {/* <Image source={require('../Landlord/assets/landlordbackground.webp')} style={styles.cardImage} /> */}
//                 <Text style={styles.cardTitle}>{item.name}</Text>
//                 <Text style={styles.cardStatus}>{item.status}</Text>
//               </View>
//             )}
//           />
//         </View>
//         <TouchableOpacity
//   style={styles.formButton}
//   onPress={navigation.navigate("LandlordTabs", { screen: "FormFillingScreen" })}
//   // onPress={()=>navigation.navigate("FormFillingScreen")}
// >
//   <Text style={styles.formButtonText}>Form Filling</Text>
// </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1 },
//   overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 15, paddingTop: 50 },

//   // Header
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15
//   },
//   title: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'left' },
//   iconContainer: { flexDirection: 'row', gap: 15 },

//   // Search Bar
//   searchInput: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12, color: '#000' },

//   // Stats Section
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 ,backgroundColor:"black"},
//   statBox: { flex: 1, padding: 10, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center', marginHorizontal: 4 },
//   statLabel: { fontSize: 12, color: '#444' },
//   statValue: { fontSize: 16, fontWeight: 'bold', color: '#222' },

//   // Section Title
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 },

//   // FlatList Wrapper (Limits Height)
//   flatListWrapper: { height: 150, marginBottom: 10 }, // Ensures it doesn't take up too much space
//   flatListContainer: { paddingVertical: 5 },

//   // Card Design (Smaller)
//   card: { backgroundColor: 'white', borderRadius: 8, padding: 8, marginRight: 8, width: 100, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
//   cardImage: { width: 60, height: 60, borderRadius: 8, marginBottom: 5 }, // Reduced Image Size
//   cardTitle: { fontSize: 12, fontWeight: 'bold', color: '#333' },
//   cardStatus: { fontSize: 10, color: '#555' },
//   // Form Button
// formButton: {
//   backgroundColor: '#007bff',
//   padding: 15,
//   borderRadius: 8,
//   alignItems: 'center',
//   marginTop: 15,
// },
// formButtonText: {
//   color: 'white',
//   fontWeight: 'bold',
// },

// });

// export default LandHomeScreen;

