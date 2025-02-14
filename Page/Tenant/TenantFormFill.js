import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TenantFormFill = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '', dob: '', gender: '', maritalStatus: '', phone: '', email: '',
    currentAddress: '', permanentAddress: '', nationalID: '', panCard: '',
    driverLicense: '', occupation: '', employerName: '', employerAddress: '',
    monthlyIncome: '', employmentType: '', landlordName: '', landlordContact: '',
    prevRentalAddress: '', stayDuration: '', reasonForLeaving: '', evictions: '',
    reference1: '', reference1Relation: '', reference1Contact: '',
    reference2: '', reference2Relation: '', reference2Contact: '',
    convicted: '', convictionDetails: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    navigation.navigate('docUpload', { formData });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Full Name */}
      <Text style={styles.title1}>TENANTS INFORMATION</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Full Name"
          onChangeText={(value) => handleInputChange('fullName', value)}
          style={styles.input}
        />
      </View>

      {/* Date of Birth */}
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Date of Birth (DD/MM/YYYY)"
          onChangeText={(value) => handleInputChange('dob', value)}
          style={styles.input}
        />
      </View>

      {/* Gender */}
      <View style={styles.inputContainer}>
        <Icon name="user-check" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Gender"
          onChangeText={(value) => handleInputChange('gender', value)}
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Icon name="mail" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          onChangeText={(value) => handleInputChange('email', value)}
          style={styles.input}
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={(value) => handleInputChange('phone', value)}
          style={styles.input}
        />
      </View>

      {/* National ID */}
      <View style={styles.inputContainer}>
        <Icon name="credit-card" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="National ID / Aadhaar / SSN"
          onChangeText={(value) => handleInputChange('nationalID', value)}
          style={styles.input}
        />
      </View>

      {/* Occupation */}
      <View style={styles.inputContainer}>
        <Icon name="briefcase" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Occupation"
          onChangeText={(value) => handleInputChange('occupation', value)}
          style={styles.input}
        />
      </View>

      {/* Employer Name */}
      <View style={styles.inputContainer}>
        <Icon name="building" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Employer Name"
          onChangeText={(value) => handleInputChange('employerName', value)}
          style={styles.input}
        />
      </View>

      {/* Monthly Income */}
      <View style={styles.inputContainer}>
        <Icon name="dollar-sign" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Monthly Income"
          keyboardType="numeric"
          onChangeText={(value) => handleInputChange('monthlyIncome', value)}
          style={styles.input}
        />
      </View>

      {/* Landlord Name */}
      <View style={styles.inputContainer}>
        <Icon name="home" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Landlord Name"
          onChangeText={(value) => handleInputChange('landlordName', value)}
          style={styles.input}
        />
      </View>

      {/* References */}
      <View style={styles.inputContainer}>
        <Icon name="users" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Reference 1 Name"
          onChangeText={(value) => handleInputChange('reference1', value)}
          style={styles.input}
        />
      </View>

      {/* Conviction History */}
      <View style={styles.inputContainer}>
        <Icon name="alert-circle" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Have you been convicted? (Yes/No)"
          onChangeText={(value) => handleInputChange('convicted', value)}
          style={styles.input}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles with Icons and Rounded UI
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title1:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer:{
    paddingBottom:30,
  }
});

export default TenantFormFill;
