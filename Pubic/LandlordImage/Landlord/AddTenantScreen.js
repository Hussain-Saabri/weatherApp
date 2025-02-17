import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddTenantScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Tenant</Text>
      <TextInput style={styles.input} placeholder="Enter tenant name" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Enter tenant email" placeholderTextColor="#666" keyboardType="email-address" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e5f5ff', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default AddTenantScreen;

// import React from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const AddTenantScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add New Tenant</Text>
//       <TextInput style={styles.input} placeholder="Enter tenant name" />
//       <TextInput style={styles.input} placeholder="Enter tenant email" />
//       <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#e5f5ff', justifyContent: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20 },
//   button: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });

// export default AddTenantScreen;
