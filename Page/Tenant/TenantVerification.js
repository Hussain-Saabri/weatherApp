import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install with: expo install @expo/vector-icons

const TenantVerification = ({ route, navigation }) => {
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Ionicons name="hourglass-outline" size={80} color="#ff9800" />
      <Text style={styles.title}>Verification Successfully</Text>
      <Text style={styles.subtitle}>Thankyou Tenant.We have verified your documents.</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('QRcode', { formData })}
      >
        <Ionicons name="qr-code-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default TenantVerification;
