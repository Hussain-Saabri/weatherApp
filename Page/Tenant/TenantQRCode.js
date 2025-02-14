import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Feather';

const TenantQRCode = ({ route, navigation }) => {
  const formData = route?.params?.formData || {}; // Handle undefined params safely

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tenant QR Code</Text>
      </View>

      {/* Tenant Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.name}>{formData.name || 'John Doe'}</Text>
        <Text style={styles.phone}>{formData.phone || '+1 111 467 378 399'}</Text>
      </View>

      {/* QR Code Display */}
      <View style={styles.qrContainer}>
        {Object.keys(formData).length > 0 ? (
          <QRCode value={JSON.stringify(formData)} size={200} />
        ) : (
          <Text style={styles.noData}>No Data Available</Text>
        )}
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="download" size={20} color="white" />
        <Text style={styles.downloadText}>Download QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E2C20',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoCard: {
    backgroundColor: '#F5E0C3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2C20',
  },
  phone: {
    fontSize: 14,
    color: '#6A4D3B',
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  noData: {
    fontSize: 16,
    color: '#6A4D3B',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D88C47',
    padding: 12,
    borderRadius: 25,
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
  },
  downloadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default TenantQRCode;
