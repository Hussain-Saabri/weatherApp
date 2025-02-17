// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'; // Make sure to install this package

// // Dummy Data - Replace this with your API call
// const tenantData = [
//   { id: 1, name: 'John Doe', status: 'Verified' },
//   { id: 2, name: 'Jane Smith', status: 'Being Verified' },
//   { id: 3, name: 'Mike Johnson', status: 'Verified' },
//   { id: 4, name: 'Sarah Williams', status: 'Being Verified' },
//   { id: 5, name: 'Chris Evans', status: 'Verified' }
// ];

// const PendingVerificationScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const [pendingTenants, setPendingTenants] = useState([]);

//   useEffect(() => {
//     // Simulate API Call
//     setTimeout(() => {
//       const pending = tenantData.filter(tenant => tenant.status === 'Being Verified');
//       setPendingTenants(pending);
//       setLoading(false);
//     }, 1000); // Simulating network delay
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#3b5998" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#3b5998" />
//       {/* Header with Gradient */}
//       <LinearGradient colors={['#4e7ac7', '#3b5998']} style={styles.header}>
//         <Text style={styles.headerText}>Pending Verifications</Text>
//       </LinearGradient>

//       <View style={styles.content}>
//         {pendingTenants.length > 0 ? (
//           <FlatList
//             data={pendingTenants}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text style={styles.tenantName}>{item.name}</Text>
//                 <Text style={styles.tenantStatus}>Pending Verification</Text>
//               </View>
//             )}
//           />
//         ) : (
//           <Text style={styles.noPending}>No Pending Verifications</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eef2f7',
//   },
//   header: {
//     paddingTop: StatusBar.currentHeight + 15, // Ensure visibility with status bar
//     paddingBottom: 15,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     elevation: 5,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 28,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   listItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   tenantName: {
//     fontSize: 18,
//     color: '#333',
//     fontWeight: '600',
//   },
//   tenantStatus: {
//     fontSize: 16,
//     color: '#ffa41b',
//     fontWeight: 'bold',
//   },
//   noPending: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#888',
//     marginTop: 30,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default PendingVerificationScreen;


import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

// Dummy Data - Replace this with your API call
const tenantData = [
  { id: 1, name: 'John Doe', status: 'Verified' },
  { id: 2, name: 'Jane Smith', status: 'Being Verified' },
  { id: 3, name: 'Mike Johnson', status: 'Verified' },
  { id: 4, name: 'Sarah Williams', status: 'Being Verified' },
  { id: 5, name: 'Chris Evans', status: 'Verified' }
];

const PendingVerificationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [pendingTenants, setPendingTenants] = useState([]);

  useEffect(() => {
    // Simulate API Call
    setTimeout(() => {
      const pending = tenantData.filter(tenant => tenant.status === 'Being Verified');
      setPendingTenants(pending);
      setLoading(false);
    }, 1000); // Simulating network delay
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b5998" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Pending Verifications</Text>
      </View>

      <View style={styles.content}>
        {pendingTenants.length > 0 ? (
          <FlatList
            data={pendingTenants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.tenantName}>{item.name}</Text>
                <Text style={styles.tenantStatus}>Pending Verification</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noPending}>No Pending Verifications</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  header: {
    backgroundColor: '#3b5998',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    margin:30
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  tenantName: {
    fontSize: 18,
    color: '#333',
  },
  tenantStatus: {
    fontSize: 16,
    color: '#ffc107',
    fontWeight: 'bold',
  },
  noPending: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PendingVerificationScreen;
