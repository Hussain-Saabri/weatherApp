import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const VerifiedTenantsScreen = () => {
  // Static data for verified tenants
  const tenants = [
    { id: 1, name: "John Doe", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", contact: "987-654-3210" },
    { id: 3, name: "Michael Johnson", contact: "456-789-0123" },
    { id: 4, name: "Emily Davis", contact: "321-654-9870" },
  ];

  const renderTenant = ({ item }) => (
    <View style={styles.tenantItem}>
      <Text style={styles.tenantName}>{item.name}</Text>
      <Text style={styles.tenantDetails}>Contact: {item.contact}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verified Tenants</Text>
      <FlatList
        data={tenants}
        renderItem={renderTenant}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#007bff",
  },
  tenantItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  tenantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
  },
  tenantDetails: {
    color: "gray",
    marginTop: 5,
  },
});

export default VerifiedTenantsScreen;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

// const VerifiedTenantsScreen = () => {
//   const [tenants, setTenants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch verified tenants data from your backend API
//   useEffect(() => {
//     const fetchTenants = async () => {
//       try {
//         const response = await axios.get("YOUR_BACKEND_API_URL_HERE");
//         setTenants(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching tenants:", error);
//         setLoading(false);
//       }
//     };
//     fetchTenants();
//   }, []);

//   const renderTenant = ({ item }) => (
//     <View style={styles.tenantItem}>
//       <Text style={styles.tenantName}>{item.name}</Text>
//       <Text style={styles.tenantDetails}>Contact: {item.contact}</Text>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tenants}
//         renderItem={renderTenant}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   tenantItem: {
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   tenantName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   tenantDetails: {
//     color: "gray",
//     marginTop: 5,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default VerifiedTenantsScreen;
