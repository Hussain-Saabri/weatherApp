import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Landlord Name',
    email: 'landlord@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, City',
  });

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (key, value) => setUser({ ...user, [key]: value });

  return (
    <ImageBackground
    source={require('../../Pubic/LandlordImage/photo2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        

        {/* Profile Card */}
        <View style={styles.card}>
          {/* Profile Image */}
          <View style={styles.profileContainer}>
            <Image
              source={require('../../Pubic/LandlordImage/photo2.jpg')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="camera" size={18} color="white" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>

          {/* Personal Details */}
          <View style={styles.detailsContainer}>
            {[
              { key: 'name', label: 'Full Name', icon: 'person' },
              { key: 'email', label: 'Email', icon: 'mail' },
              { key: 'phone', label: 'Phone', icon: 'call' },
              { key: 'address', label: 'Address', icon: 'location' },
            ].map(({ key, label, icon }) => (
              <View key={key} style={styles.detailsRow}>
                <Ionicons name={icon} size={24} color="#4A90E2" />
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    value={user[key]}
                    onChangeText={(text) => handleChange(key, text)}
                    placeholder={label}
                    placeholderTextColor="#999"
                  />
                ) : (
                  <>
                    <Text style={styles.detailsLabel}>{label}</Text>
                    <Text style={styles.detailsValue}>{user[key]}</Text>
                  </>
                )}
              </View>
            ))}
          </View>

          {/* Edit Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditToggle}
          >
            <Ionicons
              name={isEditing ? 'checkmark-outline' : 'create-outline'}
              size={20}
              color="#fff"
            />
            <Text style={styles.editButtonText}>
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Additional Settings */}
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>
          {[
            { label: 'Privacy', icon: 'lock-closed-outline' },
            { label: 'Security', icon: 'shield-checkmark-outline' },
            { label: 'Language', icon: 'globe-outline' },
          ].map(({ label, icon }) => (
            <TouchableOpacity key={label} style={styles.settingRow}>
              <Ionicons name={icon} size={24} color="#4A90E2" />
              <Text style={styles.settingLabel}>{label}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
 
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 90,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 6,
    shadowRadius: 10,
    elevation: 60,
    marginTop:30,
    
  },
  profileContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
   
    backgroundColor: '#4A90E2',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailsLabel: {
    fontSize: 16,
    color: '#555',
    flex: 1,
    marginLeft: 10,
  },
  detailsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#333',
    marginLeft: 10,
  },
  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  settingsContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 65,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
});

export default ProfileScreen;



// import Ionicons from '@expo/vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "YOO",
//     email: "@example.com",
//     phone: "ooo",
//     address: "123 Main Street, City",
//   });

//   const handleEditToggle = () => setIsEditing(!isEditing);
//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   const handleLogout = () => {
//     // Logic for logging out the user
//     console.log("User logged out");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Profile Details</Text>
//       </View>

//       {/* Profile Info Section */}
//       <View style={styles.profileContainer}>
//         {/* <Image
//            source={require('../landlord/assets/landlordbackground.webp')}
//           style={styles.profileImage}
//         /> */}
//         <Text style={styles.profileName}>{user.name}</Text>
//         <Text style={styles.profileEmail}>{user.email}</Text>
//       </View>

//       {/* Personal Details Section */}
//       <ScrollView style={styles.detailsContainer}>
//         {[
//           { key: 'name', label: 'Full Name', icon: 'person' },
//           { key: 'email', label: 'Email', icon: 'mail' },
//           { key: 'phone', label: 'Phone', icon: 'call' },
//           { key: 'address', label: 'Address', icon: 'location' },
//         ].map(({ key, label, icon }) => (
//           <View key={key} style={styles.detailsRow}>
//             <Ionicons name={icon} size={24} color="#007bff" />
//             {isEditing ? (
//               <TextInput
//                 style={styles.input}
//                 value={user[key]}
//                 onChangeText={(text) => handleChange(key, text)}
//                 placeholder={label}
//               />
//             ) : (
//               <>
//                 <Text style={styles.detailsLabel}>{label}</Text>
//                 <Text style={styles.detailsValue}>{user[key]}</Text>
//               </>
//             )}
//           </View>
//         ))}
//       </ScrollView>

//       {/* Buttons */}
//       <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
//         <Ionicons
//           name={isEditing ? "checkmark-outline" : "create-outline"}
//           size={20}
//           color="#fff"
//         />
//         <Text style={styles.editButtonText}>
//           {isEditing ? "Save Changes" : "Edit Profile"}
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Ionicons name="log-out-outline" size={20} color="#fff" />
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f4f8',
//   },

//   // Header
//   header: {
//     backgroundColor: '#007bff',
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     elevation: 4,
//     marginBottom: 50, // Ensures the header is fully visible
//     marginTop:30
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   // Profile Section
//   profileContainer: {
//     alignItems: 'center',
//     marginTop: -30,
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 4,
//     borderColor: '#fff',
//     backgroundColor: '#ccc',
//     marginBottom: 0,
//   },
//   profileName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   profileEmail: {
//     fontSize: 16,
//     color: '#777',
//   },

//   // Details Section
//   detailsContainer: {
//     marginHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     elevation: 5,
//     padding: 15,
//     marginTop: 10,
//   },
//   detailsRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   detailsLabel: {
//     fontSize: 16,
//     color: '#777',
//     flex: 1,
//     marginLeft: 15,
//   },
//   detailsValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     marginLeft: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     color: '#333',
//   },

//   // Buttons
//   editButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//     marginVertical: 10,
//     alignSelf: 'center',
//     elevation: 3,
//   },
//   editButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#dc3545',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//     alignSelf: 'center',
//     elevation: 3,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

// export default ProfileScreen;


