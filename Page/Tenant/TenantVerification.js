import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const TenantVerification = ({ route, navigation }) => {
  const { formData, documents } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Verification Pending...</Text>
      <Button title="Generate QR Code" onPress={() => navigation.navigate('QRcode', { formData })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TenantVerification;
