

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormFillingScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    email: '',
    propertyDetails: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Form Submitted', 'Your form has been successfully submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Form Filling</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#888"
        value={formData.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={formData.contactNumber}
        onChangeText={(text) => handleInputChange('contactNumber', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Property Details"
        placeholderTextColor="#888"
        value={formData.propertyDetails}
        onChangeText={(text) => handleInputChange('propertyDetails', text)}
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradient}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.generateKeyButton} 
        onPress={() => navigation.navigate('KeyGenerationScreen')}
      >
        <Text style={styles.generateKeyButtonText}>Generate Key</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b5998',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    color: '#333',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 20,
  },
  gradient: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  generateKeyButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  generateKeyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FormFillingScreen;
