import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

const TenantsDocUpload = ({ route, navigation }) => {
  const { formData } = route.params;
  const [documents, setDocuments] = useState([]);
  const [docDetails, setDocDetails] = useState({ country: '', passportNumber: '', expiryDate: '' });

  const handleUpload = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setDocuments([{ uri: response.assets[0].uri, name: 'Passport' }]);
      }
    });
  };

  const handleRemove = () => {
    setDocuments([]);
  };

  const handleNext = () => {
    navigation.navigate('Verification', { formData, documents, docDetails });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Documents</Text>
      <Text style={styles.subHeader}>Proof of Identity</Text>

      {/* Document Upload Section */}
      {documents.length === 0 ? (
        <View style={styles.uploadBox}>
          <Text style={styles.uploadText}>Upload a clear passport image</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
            <Icon name="camera" size={24} color="white" />
            <Text style={styles.uploadButtonText}>Upload Document</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.docContainer}>
          <Image source={{ uri: documents[0].uri }} style={styles.docImage} />
          <TouchableOpacity style={styles.replaceButton} onPress={handleUpload}>
            <Text style={styles.replaceText}>Replace photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleRemove}>
            <Icon name="trash" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}

      {/* Document Details */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Issuing Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter country"
          value={docDetails.country}
          onChangeText={(text) => setDocDetails({ ...docDetails, country: text })}
        />

        <Text style={styles.label}>Passport Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter passport number"
          value={docDetails.passportNumber}
          onChangeText={(text) => setDocDetails({ ...docDetails, passportNumber: text })}
        />

        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={docDetails.expiryDate}
          onChangeText={(text) => setDocDetails({ ...docDetails, expiryDate: text })}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.saveButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Save and Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  uploadBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  uploadText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#0080FF',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  docContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  docImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  replaceButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#0080FF',
    padding: 8,
    borderRadius: 5,
  },
  replaceText: {
    color: 'white',
    fontSize: 14,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 20,
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  saveButton: {
    backgroundColor: '#0080FF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TenantsDocUpload;
