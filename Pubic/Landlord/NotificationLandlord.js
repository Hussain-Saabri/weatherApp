import { Ionicons } from '@expo/vector-icons'; // Expo-compatible icons
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notifications = [
  { id: '1', message: 'New tenant verification request received.', time: '2m ago', type: 'alert' },
  { id: '2', message: 'Tenant Mark Johnson verification completed.', time: '1h ago', type: 'checkmark' },
  { id: '3', message: 'Payment reminder for Tenant John Doe.', time: '3h ago', type: 'warning' },
  { id: '4', message: 'New message from Tenant Jane Smith.', time: '5h ago', type: 'chatbubble' },
];

const NotificationLandlord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <Ionicons name={getIconName(item.type)} size={24} color="#007AFF" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const getIconName = (type) => {
  switch (type) {
    case 'alert': return 'alert-circle-outline';
    case 'checkmark': return 'checkmark-circle-outline';
    case 'warning': return 'warning-outline';
    case 'chatbubble': return 'chatbubble-outline';
    default: return 'notifications-outline';
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: { marginRight: 15 },
  textContainer: { flex: 1 },
  message: { fontSize: 16, fontWeight: '500', color: '#333' },
  time: { fontSize: 14, color: '#777', marginTop: 5 },
});

export default NotificationLandlord;


// import React from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';


// const notifications = [
//   { id: '1', message: 'New tenant verification request received.', time: '2m ago', type: 'alert' },
//   { id: '2', message: 'Tenant Mark Johnson verification completed.', time: '1h ago', type: 'checkmark' },
//   { id: '3', message: 'Payment reminder for Tenant John Doe.', time: '3h ago', type: 'warning' },
//   { id: '4', message: 'New message from Tenant Jane Smith.', time: '5h ago', type: 'chatbubble' },
// ];


// const NotificationLandlord = () => {
   
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>
//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.notificationItem} >
//             <Ionicons name={getIconName(item.type)} size={24} color="#007AFF" style={styles.icon} />
//             <View style={styles.textContainer}>
//               <Text style={styles.message}>{item.message}</Text>
//               <Text style={styles.time}>{item.time}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const getIconName = (type) => {
//   switch (type) {
//     case 'alert': return 'alert-circle-outline';
//     case 'checkmark': return 'checkmark-circle-outline';
//     case 'warning': return 'warning-outline';
//     case 'chatbubble': return 'chatbubble-outline';
//     default: return 'notifications-outline';
//   }
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: 'white' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
//   notificationItem: { flexDirection: 'row', padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 10, alignItems: 'center', elevation: 3 },
//   icon: { marginRight: 15 },
//   textContainer: { flex: 1 },
//   message: { fontSize: 16, fontWeight: '500', color: '#333' },
//   time: { fontSize: 14, color: '#777', marginTop: 5 },
// });

// export default NotificationLandlord;
