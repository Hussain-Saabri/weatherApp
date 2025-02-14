import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const KeyGenerationScreen = () => {
  const [generatedKey, setGeneratedKey] = useState('');

  const generateKey = () => {
    const key = Math.random().toString(36).substring(2, 10).toUpperCase();
    setGeneratedKey(key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Key Generation</Text>
      <Text style={styles.generatedKey}>{generatedKey || 'No Key Generated'}</Text>
      
      <TouchableOpacity style={styles.generateButton} onPress={generateKey}>
        <Text style={styles.generateButtonText}>Generate Key</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 20,
  },
  generatedKey: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
  generateButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default KeyGenerationScreen;
