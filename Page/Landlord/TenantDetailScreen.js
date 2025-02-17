import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TenantDetailScreen = ({ route }) => {
  const { name, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.tenantImage} />
      <Text style={styles.tenantName}>{name}</Text>
      <Text style={styles.tenantDetails}>
        This is where you can add more details about {name}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  tenantImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#444',
    marginBottom: 15,
  },
  tenantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  tenantDetails: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default TenantDetailScreen;
