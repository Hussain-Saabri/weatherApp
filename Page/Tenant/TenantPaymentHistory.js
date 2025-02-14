import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const payments = [
  { month: 'Jan 2025', amount: 1200, status: 'Paid' },
  { month: 'Dec 2024', amount: 1200, status: 'Paid' },
  { month: 'Nov 2024', amount: 1200, status: 'Unpaid' },
  { month: 'Oct 2024', amount: 1200, status: 'Paid' },
];

const TenantPaymentHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment History</Text>

      <FlatList
        data={payments}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => (
          <View style={styles.paymentCard}>
            <View style={styles.cardContent}>
              <Icon
                name={item.status === 'Paid' ? 'check-circle' : 'cancel'}
                size={24}
                color={item.status === 'Paid' ? '#2ECC71' : '#E74C3C'}
                style={styles.icon}
              />
              <Text style={styles.month}>{item.month}</Text>
              <Text style={styles.amount}>${item.amount}</Text>
              <Text style={[styles.status, { color: item.status === 'Paid' ? '#2ECC71' : '#E74C3C' }]}>
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  month: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2980B9',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TenantPaymentHistory;
