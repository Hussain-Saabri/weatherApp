import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// Dummy Data - Replace this with your API call
const tenantData = [
  { id: 1, name: 'John Doe', status: 'Verified' },
  { id: 2, name: 'Jane Smith', status: 'Being Verified' },
  { id: 3, name: 'Mike Johnson', status: 'Verified' },
  { id: 4, name: 'Sarah Williams', status: 'Being Verified' },
  { id: 5, name: 'Chris Evans', status: 'Verified' }
];

const TenantStatusScreen = () => {
  const [loading, setLoading] = useState(true);
  const [verifiedCount, setVerifiedCount] = useState(0);
  const [beingVerifiedCount, setBeingVerifiedCount] = useState(0);

  useEffect(() => {
    // Simulate API Call
    setTimeout(() => {
      const verified = tenantData.filter(tenant => tenant.status === 'Verified').length;
      const beingVerified = tenantData.filter(tenant => tenant.status === 'Being Verified').length;

      setVerifiedCount(verified);
      setBeingVerifiedCount(beingVerified);
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
        <Text style={styles.headerText}>Tenant Verification Status</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={styles.statusCount}>{verifiedCount}</Text>
            <Text style={styles.statusLabel}>Verified Tenants</Text>
          </View>

          <View style={styles.statusBox}>
            <Text style={styles.statusCount}>{beingVerifiedCount}</Text>
            <Text style={styles.statusLabel}>Being Verified</Text>
          </View>
        </View>

        <Text style={styles.listHeading}>Tenant Details:</Text>
        <FlatList
          data={tenantData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.tenantName}>{item.name}</Text>
              <Text style={styles.tenantStatus(item.status)}>{item.status}</Text>
            </View>
          )}
        />
      </ScrollView>
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
    marginTop:20
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  statusCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  statusLabel: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  listHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b5998',
    marginVertical: 15,
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
  tenantStatus: (status) => ({
    fontSize: 16,
    color: status === 'Verified' ? '#28a745' : '#ffc107',
    fontWeight: 'bold',
  }),
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TenantStatusScreen;


// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

// // Dummy Data - Replace this with your API call
// const tenantData = [
//   { id: 1, name: 'John Doe', status: 'Verified' },
//   { id: 2, name: 'Jane Smith', status: 'Being Verified' },
//   { id: 3, name: 'Mike Johnson', status: 'Verified' },
//   { id: 4, name: 'Sarah Williams', status: 'Being Verified' },
//   { id: 5, name: 'Chris Evans', status: 'Verified' }
// ];

// const TenantStatusScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const [verifiedCount, setVerifiedCount] = useState(0);
//   const [beingVerifiedCount, setBeingVerifiedCount] = useState(0);

//   useEffect(() => {
//     // Simulate API Call
//     setTimeout(() => {
//       const verified = tenantData.filter(tenant => tenant.status === 'Verified').length;
//       const beingVerified = tenantData.filter(tenant => tenant.status === 'Being Verified').length;

//       setVerifiedCount(verified);
//       setBeingVerifiedCount(beingVerified);
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
//       <Text style={styles.heading}>Tenant Verification Status</Text>
      
//       <View style={styles.statusContainer}>
//         <View style={styles.statusBox}>
//           <Text style={styles.statusCount}>{verifiedCount}</Text>
//           <Text style={styles.statusLabel}>Verified Tenants</Text>
//         </View>

//         <View style={styles.statusBox}>
//           <Text style={styles.statusCount}>{beingVerifiedCount}</Text>
//           <Text style={styles.statusLabel}>Being Verified</Text>
//         </View>
//       </View>

//       <Text style={styles.listHeading}>Tenant Details:</Text>
//       <FlatList
//         data={tenantData}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <Text style={styles.tenantName}>{item.name}</Text>
//             <Text style={styles.tenantStatus}>{item.status}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#3b5998',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   statusBox: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     width: '45%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   statusCount: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#3b5998',
//   },
//   statusLabel: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//   },
//   listHeading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#3b5998',
//     marginBottom: 10,
//   },
//   listItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   tenantName: {
//     fontSize: 18,
//     color: '#333',
//   },
//   tenantStatus: {
//     fontSize: 16,
//     color: '#007bff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default TenantStatusScreen;
