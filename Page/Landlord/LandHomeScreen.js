import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

  return (
    <ScrollView>
    {/* <ImageBackground source={require('../../Pubic/LandlordImage/photo4.jpg')} style={styles.background}> */}
     
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

        {/* Cards and Form Filling Button */}
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PendingVerificationScreen')}
          >
            <ImageBackground
              source={require('../../Pubic/LandlordImage/photo4.jpg')}
              style={styles.cardBackground}
            >
              <Text style={styles.cardTitle}>Card 1</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TenantStatusScreen')}
          >
            <ImageBackground
              source={require('../../Pubic/LandlordImage/photo3.jpg')}
              style={styles.cardBackground}
            >
              <Text style={styles.cardTitle}>Card 2</Text>
            </ImageBackground>
           
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("VerifiedTenantsScreen")}
          >
            <ImageBackground
              source={require('../../Pubic/LandlordImage/photo2.jpg')}
              style={styles.cardBackground}
            >
              <Text style={styles.cardTitle}>Card 3</Text>
            </ImageBackground>
          
          </TouchableOpacity>

          {/* Form Filling Button */}
          <TouchableOpacity
            style={styles.formButton}
            onPress={() => navigation.navigate('FormFillingScreen')}
          >
            <Text style={styles.formButtonText}>Form Filling</Text>
          </TouchableOpacity>
        </View>

      </View>
     
    {/* </ImageBackground> */}
    </ScrollView>
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
  horizontalScroll: {
    marginTop: 20,
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

  // Card Container (vertical cards)
  cardContainer: {
    marginTop: 20,
    flexDirection: 'column', // Stack cards vertically
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 100, // To prevent the form button from overlapping tenant section
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    // padding: 20,
    // marginVertical: 10,
    borderRadius: 20,
   
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    marginVertical:15,
    overflow:"hidden",
    shadowColor: 'white',
    transform: [{ scale: 1 }],
  },
  cardBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 28,
  fontWeight: 'bold',
  color: 'white',
  textShadowColor: 'rgba(0,0,0,0.7)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 5,
  zIndex: 2,
  },
  cardContent: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    zIndex: 1,
  },

  // Form Filling Button
  formButton: {
    backgroundColor: '#578FCA',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '60%',
    marginTop: 20,
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
// import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   // Sample Tenant Data
//   const tenants = [
//     { id: '1', name: 'John Kumar', image: require('../../Pubic/LandlordImage/photo.jpg') },
//     { id: '2', name: 'Jane Mohan', image: require('../../Pubic/LandlordImage/photo2.jpg') },
//     { id: '3', name: 'Mark Man', image: require('../../Pubic/LandlordImage/photo3.jpg') },
//     { id: '4', name: 'Lisa Mona', image: require('../../Pubic/LandlordImage/photo4.jpg') },
//     { id: '5', name: 'Tom Halland', image: require('../../Pubic/LandlordImage/photo.jpg') },
//     { id: '6', name: 'Emma Watson', image: require('../../Pubic/LandlordImage/photo3.jpg') },
//   ];
  
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
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search tenants..."
//             placeholderTextColor="black"
//             autoFocus={true}
//           />
//         </View>

//         {/* Horizontal ScrollView for Tenants */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//           {tenants.map((tenant) => (
//             <TouchableOpacity
//               key={tenant.id}
//               style={styles.tenantItem}
//               onPress={() => navigation.navigate('TenantDetailScreen', {
//                 name: tenant.name,
//                 image: tenant.image
//               })}
//             >
//               <Image source={tenant.image} style={styles.tenantImage} />
//               <Text style={styles.tenantName}>{tenant.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Cards and Form Filling Button */}
//         <View style={styles.cardContainer}>
//           {/* Card 1 */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Card 1</Text>
//             <Text style={styles.cardContent}>Some content for card 1.</Text>
//           </View>

//           {/* Card 2 */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Card 2</Text>
//             <Text style={styles.cardContent}>Some content for card 2.</Text>
//           </View>

//           {/* Card 3 */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Card 3</Text>
//             <Text style={styles.cardContent}>Some content for card 3.</Text>
//           </View>

//           {/* Form Filling Button */}
//           <TouchableOpacity
//             style={styles.formButton}
//             onPress={() => navigation.navigate('FormFillingScreen')}
//           >
//             <Text style={styles.formButtonText}>Form Filling</Text>
//           </TouchableOpacity>
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
//     backgroundColor: 'rgba(234, 241, 234, 0)',
//     fontWeight: '900',
//     color: "white",
//     paddingBottom: 40
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     width: '100%',
//     color: '#000'
//   },

//   // Horizontal ScrollView for Tenants
//   horizontalScroll: {
//     marginTop: 20,
//   },
//   tenantItem: {
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   tenantImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   tenantName: {
//     color: 'white',
//     fontSize: 12,
//     marginTop: 5,
//   },

//   // Card Container (vertical cards)
//   cardContainer: {
//     marginTop: 20,
//     flexDirection: 'column', // Stack cards vertically
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 100, // To prevent the form button from overlapping tenant section
//   },
//   card: {
//     width: '90%',
//     backgroundColor: '#fff',
//     padding: 20,
//     marginVertical: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   cardContent: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 10,
//   },

//   // Form Filling Button
//   formButton: {
//     backgroundColor: '#578FCA',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '60%',
//     marginTop: 20,
//   },
//   formButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

// });

// export default LandHomeScreen;

// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import CardCarousel from './CardCarousel';

// const LandHomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSearch, setShowSearch] = useState(false);

//   // Sample Tenant Data
//   const tenants = [
//     { id: '1', name: 'John Kumar', image: require('../../Pubic/LandlordImage/photo.jpg') },
//     { id: '2', name: 'Jane Mohan', image: require('../../Pubic/LandlordImage/photo2.jpg') },
//     { id: '3', name: 'Mark Man', image: require('../../Pubic/LandlordImage/photo3.jpg') },
//     { id: '4', name: 'Lisa Mona', image: require('../../Pubic/LandlordImage/photo4.jpg') },
//     { id: '5', name: 'Tom Halland', image: require('../../Pubic/LandlordImage/photo.jpg') },
//     { id: '6', name: 'Emma Watson', image: require('../../Pubic/LandlordImage/photo3.jpg') },
//   ];
//   const sliderImages = [
//     require('../../Pubic/LandlordImage/photo2.jpg'),
//     require('../../Pubic/LandlordImage/photo3.jpg'),
//     require('../../Pubic/LandlordImage/photo4.jpg'),
//     require('../../Pubic/LandlordImage/photo.jpg')
//   ];
  
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

//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search tenants..."
//             placeholderTextColor="black"
//             autoFocus={true}
//           />

//         </View>

//         {/* Horizontal ScrollView for Tenants */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//           {tenants.map((tenant) => (
//             <TouchableOpacity
//               key={tenant.id}
//               style={styles.tenantItem}
//               onPress={() => navigation.navigate('TenantDetailScreen', {
//                 name: tenant.name,
//                 image: tenant.image
//               })}
//             >
//               <Image source={tenant.image} style={styles.tenantImage} />
//               <Text style={styles.tenantName}>{tenant.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//         <View style={styles.carouselContainer}>
//           <CardCarousel />
//           <TouchableOpacity
//             style={styles.formButton}
//             onPress={() => navigation.navigate('FormFillingScreen')}
//           >
//             <Text style={styles.formButtonText}>Form Filling</Text>
//           </TouchableOpacity>
        
//         </View>
      

// </View>


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
//     backgroundColor: 'rgba(234, 241, 234, 0)',
//     fontWeight: '900',
//     color: "white",
//     paddingBottom: 40
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     width: '100%',
//     color: '#000'
//   },

//   // Horizontal ScrollView for Tenants
//   tenantScroll: {
//     marginTop: 20,
//     paddingVertical: 10,
//   },
//   tenantItem: {
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   tenantImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   tenantName: {
//     color: 'white',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   // Form Filling Button
//   carouselContainer: {
//     // Adjust this height as needed
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     // marginTop: 20,
//     // backgroundColor:"red",
//     position: "relative"

//   },
//   formButton: {
//     backgroundColor: '#578FCA',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '60%',
//     // marginTop: 10, // Space above the button
//     marginBottom: 200,
//   },
//   formButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
 
  
  


// });

// export default LandHomeScreen;


