import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Sample data for tenants and payment methods
const tenants = [
  { id: '1', name: 'John Doe', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Jane Smith', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Mark Johnson', image: 'https://via.placeholder.com/150' },
];

const paymentMethods = [
  { id: 'credit', label: 'Credit Card', icon: 'card-outline' },
  { id: 'gpay', label: 'gpay', icon: 'logo-paypal' },
  { id: 'bank', label: 'Bank Transfer', icon: 'wallet-outline' },
];

const PaymentScreen = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulated payment processing function
  const processPayment = async () => {
    if (!selectedTenant) {
      Alert.alert('Selection Required', 'Please select a tenant.');
      return;
    }
    if (!selectedMethod) {
      Alert.alert('Selection Required', 'Please select a payment method.');
      return;
    }
    setLoading(true);
    try {
      // Simulate a 2-second delay for payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      Alert.alert(
        'Payment Successful',
        `Payment via ${selectedMethod.label} for ${selectedTenant.name} was successful!`
      );
      // Optionally, reset selections after successful payment
      setSelectedTenant(null);
      setSelectedMethod(null);
    } catch (error) {
      Alert.alert('Payment Error', 'There was an error processing your payment.');
    } finally {
      setLoading(false);
    }
  };

  // Render a tenant card
  const renderTenantItem = ({ item }) => {
    const isSelected = selectedTenant?.id === item.id;
    return (
      <TouchableOpacity
        style={[styles.tenantCard, isSelected && styles.tenantCardSelected]}
        onPress={() => setSelectedTenant(item)}
      >
        {/* <Image source={require('../Landlord/assets/landlordbackground.webp')} style={styles.tenantImage} /> */}
        <Text style={[styles.tenantName, isSelected && styles.tenantNameSelected]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  // Render a payment method card
  const renderMethodItem = ({ item }) => {
    const isSelected = selectedMethod?.id === item.id;
    return (
      <TouchableOpacity
        style={[styles.methodButton, isSelected && styles.methodButtonSelected]}
        onPress={() => setSelectedMethod(item)}
      >
        <Ionicons
          name={item.icon}
          size={24}
          color={isSelected ? '#fff' : '#007bff'}
        />
        <Text
          style={[
            styles.methodLabel,
            isSelected && styles.methodLabelSelected,
          ]}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Gradient Background */}
      <LinearGradient
        colors={['#007bff', '#0056b3']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Payment Module</Text>
      </LinearGradient>

      <Text style={styles.subtitle}>
        Select a tenant verification fee to pay
      </Text>

      {/* Tenant Selection Section */}
      <Text style={styles.sectionTitle}>Select Tenant</Text>
      <FlatList
        horizontal
        data={tenants}
        keyExtractor={(item) => item.id}
        renderItem={renderTenantItem}
        contentContainerStyle={styles.tenantList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Payment Method Section */}
      <Text style={styles.sectionTitle}>Select Payment Method</Text>
      <FlatList
        horizontal
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={renderMethodItem}
        contentContainerStyle={styles.methodList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Pay Now Button */}
      <TouchableOpacity
        style={[styles.payButton, loading && styles.payButtonDisabled]}
        onPress={processPayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.payButtonText}>Pay Now</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // Header styling with gradient
  header: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 5,
  },
  // Tenant list styles
  tenantList: {
    paddingVertical: 10,
    marginBottom: 20,
    
  },
  tenantCard: {
    alignItems: 'center',
    marginRight: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  tenantCardSelected: {
    backgroundColor: '#007bff',
  },
  tenantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    backgroundColor:"black"
  },
  tenantName: {
    fontSize: 14,
    color: '#007bff',
  },
  tenantNameSelected: {
    color: '#fff',
  },
  // Payment method list styles
  methodList: {
    paddingVertical: 10,
    marginBottom: 200,
    height:"100",
  
  },
  methodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  methodButtonSelected: {
    backgroundColor: '#007bff',
  },
  methodLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#007bff',
  },
  methodLabelSelected: {
    color: '#fff',
  },
  // Pay button styles
  payButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  payButtonDisabled: {
    backgroundColor: '#6c757d',
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;

