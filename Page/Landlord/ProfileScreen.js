import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "YOO",
    email: "@example.com",
    phone: "ooo",
    address: "123 Main Street, City",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (key, value) => setUser({ ...user, [key]: value });

  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile Details</Text>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../landlord/assets/landlordbackground.webp')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
      </View>

      {/* Personal Details Section */}
      <ScrollView style={styles.detailsContainer}>
        {[
          { key: 'name', label: 'Full Name', icon: 'person' },
          { key: 'email', label: 'Email', icon: 'mail' },
          { key: 'phone', label: 'Phone', icon: 'call' },
          { key: 'address', label: 'Address', icon: 'location' },
        ].map(({ key, label, icon }) => (
          <View key={key} style={styles.detailsRow}>
            <Ionicons name={icon} size={24} color="#007bff" />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user[key]}
                onChangeText={(text) => handleChange(key, text)}
                placeholder={label}
              />
            ) : (
              <>
                <Text style={styles.detailsLabel}>{label}</Text>
                <Text style={styles.detailsValue}>{user[key]}</Text>
              </>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Buttons */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
        <Ionicons
          name={isEditing ? "checkmark-outline" : "create-outline"}
          size={20}
          color="#fff"
        />
        <Text style={styles.editButtonText}>
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  // Header
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    marginBottom: 50, // Ensures the header is fully visible
    marginTop:30
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Profile Section
  profileContainer: {
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#ccc',
    marginBottom: 0,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },

  // Details Section
  detailsContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
    padding: 15,
    marginTop: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailsLabel: {
    fontSize: 16,
    color: '#777',
    flex: 1,
    marginLeft: 15,
  },
  detailsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#333',
  },

  // Buttons
  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginVertical: 10,
    alignSelf: 'center',
    elevation: 3,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignSelf: 'center',
    elevation: 3,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ProfileScreen;


// import Ionicons from '@expo/vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "Hannah Khan",
//     email: "hannahkhan@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, City",
//   });

//   const handleEditToggle = () => setIsEditing(!isEditing);
//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Profile Details</Text>
//       </View>

//       {/* Profile Info Section */}
//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/120' }}
//           style={styles.profileImage}
//         />
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

//       {/* Edit Button */}
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
//     marginBottom: 10,
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

//   // Edit Button
//   editButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//     marginVertical: 20,
//     alignSelf: 'center',
//     elevation: 3,
//   },
//   editButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

// export default ProfileScreen;


// import Ionicons from '@expo/vector-icons/Ionicons';
// import * as ImagePicker from 'expo-image-picker';
// import React, { useState } from 'react';
// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, City",
//     image: "https://via.placeholder.com/120"
//   });

//   const [backupUser, setBackupUser] = useState(user); // Backup state for cancel
//   const handleEditToggle = () => {
//     if (isEditing) {
//       setUser(backupUser); // Restore backup on cancel
//     } else {
//       setBackupUser(user); // Save backup before editing
//     }
//     setIsEditing(!isEditing);
//   };

//   const handleSaveChanges = () => {
//     setBackupUser(user); // Save current state
//     setIsEditing(false);
//     Alert.alert("Success", "Profile updated successfully!");
//   };

//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setUser({ ...user, image: result.uri });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Profile Image */}
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={isEditing ? pickImage : null}>
//           <Image source={{ uri: user.image }} style={styles.profileImage} />
//           {isEditing && <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />}
//         </TouchableOpacity>
//         <Text style={styles.profileName}>{user.name}</Text>
//       </View>

//       {/* Personal Details */}
//       <View style={styles.detailsContainer}>
//         {[
//           { key: 'name', label: 'Full Name', icon: 'person' },
//           { key: 'email', label: 'Email', icon: 'mail' },
//           { key: 'phone', label: 'Phone', icon: 'call' },
//           { key: 'address', label: 'Address', icon: 'location' },
//         ].map(({ key, label, icon }) => (
//           <View key={key} style={styles.inputGroup}>
//             <Ionicons name={icon} size={22} color="#555" />
//             <TextInput
//               style={[styles.input, isEditing && styles.editable]}
//               value={user[key]}
//               onChangeText={(text) => handleChange(key, text)}
//               editable={isEditing}
//               placeholder={label}
//             />
//           </View>
//         ))}
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.buttonContainer}>
//         {isEditing ? (
//           <>
//             <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
//               <Text style={styles.buttonText}>Save Changes</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.cancelButton} onPress={handleEditToggle}>
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
//             <Text style={styles.buttonText}>Edit Profile</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20, alignItems: "center" },

//   // Profile Section
//   profileContainer: { alignItems: "center", marginBottom: 20 },
//   profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: "#007bff" },
//   cameraIcon: { position: "absolute", bottom: 0, right: 5, backgroundColor: "#007bff", padding: 5, borderRadius: 50 },

//   profileName: { fontSize: 20, fontWeight: "bold", color: "#333", marginTop: 10 },

//   // Input Fields
//   detailsContainer: { width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 12, elevation: 4 },
//   inputGroup: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 10, marginBottom: 15 },
//   input: { flex: 1, fontSize: 16, marginLeft: 12, color: "#333" },
//   editable: { backgroundColor: "#f0f0f0" },

//   // Buttons
//   buttonContainer: { flexDirection: "row", marginTop: 20, width: "100%", justifyContent: "space-evenly" },
//   editButton: { backgroundColor: "#007bff", padding: 14, borderRadius: 10, width: "85%", alignItems: "center" },
//   saveButton: { backgroundColor: "#28a745", padding: 14, borderRadius: 10, flex: 1, marginHorizontal: 5, alignItems: "center" },
//   cancelButton: { backgroundColor: "#dc3545", padding: 14, borderRadius: 10, flex: 1, marginHorizontal: 5, alignItems: "center" },

//   buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
// });

// export default ProfileScreen;


// import Ionicons from '@expo/vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, City",
//   });

//   const handleEditToggle = () => setIsEditing(!isEditing);
//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   return (
//     <View style={styles.container}>
//       {/* Profile Image */}
//       <View style={styles.profileContainer}>
//         <Image source={{ uri: "https://via.placeholder.com/120" }} style={styles.profileImage} />
//         <Text style={styles.profileName}>{user.name}</Text>
//       </View>

//       {/* Personal Details */}
//       <View style={styles.detailsContainer}>
//         {[
//           { key: 'name', label: 'Full Name', icon: 'person' },
//           { key: 'email', label: 'Email', icon: 'mail' },
//           { key: 'phone', label: 'Phone', icon: 'call' },
//           { key: 'address', label: 'Address', icon: 'location' },
//         ].map(({ key, label, icon }) => (
//           <View key={key} style={styles.inputGroup}>
//             <Ionicons name={icon} size={22} color="#555" />
//             <TextInput 
//               style={[styles.input, isEditing && styles.editable]} 
//               value={user[key]} 
//               onChangeText={(text) => handleChange(key, text)}
//               editable={isEditing}
//               placeholder={label}
//             />
//           </View>
//         ))}
//       </View>

//       {/* Action Button */}
//       <TouchableOpacity style={styles.button} onPress={handleEditToggle}>
//         <Text style={styles.buttonText}>{isEditing ? "Save Changes" : "Edit Profile"}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20, alignItems: "center" },

//   // Profile Section
//   profileContainer: { alignItems: "center", marginBottom: 20 },
//   profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10, borderWidth: 2, borderColor: "#007bff" },
//   profileName: { fontSize: 20, fontWeight: "bold", color: "#333" },

//   // Input Fields
//   detailsContainer: { width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 12, elevation: 4 },
//   inputGroup: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 10, marginBottom: 15 },
//   input: { flex: 1, fontSize: 16, marginLeft: 12, color: "#333" },
//   editable: { backgroundColor: "#f0f0f0" },

//   // Button
//   button: { backgroundColor: "#007bff", padding: 14, borderRadius: 10, width: "85%", alignItems: "center", marginTop: 20 },
//   buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
// });

// export default ProfileScreen;


// import Ionicons from '@expo/vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, City",
//     image: "https://via.placeholder.com/100",
//   });

//   const [originalUser, setOriginalUser] = useState(user); // Store original data

//   const handleEditToggle = () => {
//     if (isEditing) {
//       if (JSON.stringify(user) !== JSON.stringify(originalUser)) {
//         Alert.alert("Success", "Profile details updated!");
//         setOriginalUser(user); // Update stored details
//       }
//     }
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Profile Details</Text>
//         <TouchableOpacity>
//           <Ionicons name="settings" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Section */}
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={() => Alert.alert("Feature coming soon!", "Profile image update is not available yet.")}>
//           <Image source={{ uri: user.image }} style={styles.profileImage} />
//           <Ionicons name="camera" size={20} color="#fff" style={styles.cameraIcon} />
//         </TouchableOpacity>
//         <Text style={styles.profileName}>{user.name}</Text>
//       </View>

//       {/* Personal Details */}
//       <View style={styles.detailsContainer}>
//         <View style={styles.inputGroup}>
//           <Ionicons name="person" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.name} 
//             onChangeText={(text) => handleChange("name", text)}
//             editable={isEditing} 
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="mail" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.email} 
//             onChangeText={(text) => handleChange("email", text)}
//             editable={isEditing} 
//             keyboardType="email-address"
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="call" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.phone} 
//             onChangeText={(text) => handleChange("phone", text)}
//             editable={isEditing} 
//             keyboardType="phone-pad"
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="location" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.address} 
//             onChangeText={(text) => handleChange("address", text)}
//             editable={isEditing} 
//           />
//         </View>
//       </View>

//       {/* Action Button */}
//       <TouchableOpacity style={styles.button} onPress={handleEditToggle}>
//         <Text style={styles.buttonText}>{isEditing ? "Save Details" : "Edit Details"}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },

//   // Header Section
//   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#007bff", paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10 },
//   headerTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },

//   // Profile Section
//   profileContainer: { alignItems: "center", marginBottom: 20 },
//   profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
//   cameraIcon: { position: "absolute", bottom: 5, right: 5, backgroundColor: "#007bff", padding: 5, borderRadius: 20 },
//   profileName: { fontSize: 18, fontWeight: "bold", color: "#333" },

//   // Input Fields
//   detailsContainer: { width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 10, elevation: 3 },
//   inputGroup: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 8, marginBottom: 12 },
//   input: { flex: 1, fontSize: 16, marginLeft: 10, color: "#333" },
//   editable: { backgroundColor: "#f0f0f0" },

//   // Button
//   button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, width: "80%", alignItems: "center", marginTop: 20, alignSelf: "center" },
//   buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
// });

// export default ProfileScreen;

// import Ionicons from '@expo/vector-icons/Ionicons';
// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const ProfileScreen = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, City",
//   });

//   const handleEditToggle = () => setIsEditing(!isEditing);

//   const handleChange = (key, value) => setUser({ ...user, [key]: value });

//   return (
//     <View style={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileContainer}>
//         <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.profileImage} />
//         <Text style={styles.profileName}>{user.name}</Text>
//       </View>

//       {/* Personal Details */}
//       <View style={styles.detailsContainer}>
//         <View style={styles.inputGroup}>
//           <Ionicons name="person" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.name} 
//             onChangeText={(text) => handleChange("name", text)}
//             editable={isEditing} 
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="mail" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.email} 
//             onChangeText={(text) => handleChange("email", text)}
//             editable={isEditing} 
//             keyboardType="email-address"
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="call" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.phone} 
//             onChangeText={(text) => handleChange("phone", text)}
//             editable={isEditing} 
//             keyboardType="phone-pad"
//           />
//         </View>
//         <View style={styles.inputGroup}>
//           <Ionicons name="location" size={20} color="#777" />
//           <TextInput 
//             style={[styles.input, isEditing && styles.editable]} 
//             value={user.address} 
//             onChangeText={(text) => handleChange("address", text)}
//             editable={isEditing} 
//           />
//         </View>
//       </View>

//       {/* Action Button */}
//       <TouchableOpacity style={styles.button} onPress={handleEditToggle}>
//         <Text style={styles.buttonText}>{isEditing ? "Save Details" : "Edit Details"}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20, alignItems: "center" },

//   // Profile Section
//   profileContainer: { alignItems: "center", marginBottom: 20 },
//   profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
//   profileName: { fontSize: 18, fontWeight: "bold", color: "#333" },

//   // Input Fields
//   detailsContainer: { width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 10, elevation: 3 },
//   inputGroup: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 8, marginBottom: 12 },
//   input: { flex: 1, fontSize: 16, marginLeft: 10, color: "#333" },
//   editable: { backgroundColor: "#f0f0f0" },

//   // Button
//   button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, width: "80%", alignItems: "center", marginTop: 20 },
//   buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
// });

// export default ProfileScreen;


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require()} style={styles.profileImage} />
//       <Text style={styles.title}>Personal Details</Text>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Name:</Text>
//         <Text style={styles.value}>Landlord Name</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Email:</Text>
//         <Text style={styles.value}>landlord@example.com</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Phone:</Text>
//         <Text style={styles.value}>+123 456 7890</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#f5eef5', justifyContent: 'center', alignItems: 'center' },
//   profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   infoContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 10 },
//   label: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   value: { fontSize: 16, color: '#555' },
// });

// export default ProfileScreen;


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Personal Details</Text>
//       <Text>Name: Landlord Name</Text>
//       <Text>Email: landlord@example.com</Text>
//       <Text>Phone: +123 456 7890</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#f5eef5', justifyContent: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
// });

// export default ProfileScreen;
