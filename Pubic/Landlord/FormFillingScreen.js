import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FormFillingScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    propertyDetails: [''],
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handlePropertyChange = (index, value) => {
    const updatedProperties = [...formData.propertyDetails];
    updatedProperties[index] = value;
    setFormData({ ...formData, propertyDetails: updatedProperties });
  };

  const addPropertyField = () => {
    setFormData({ ...formData, propertyDetails: [...formData.propertyDetails, ''] });
  };

  const handleSubmit = () => {
    Alert.alert('Form Submitted', 'Your form has been successfully submitted!');
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const dob = selectedDate.toISOString().split('T')[0];
      setFormData({ ...formData, dob });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>LANDLORD FORM</Text>

      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            onChangeText={(value) => handleInputChange('fullName', value)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputContainer}>
          <Icon name="calendar" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Date of Birth"
            value={formData.dob}
            editable={false}
            style={styles.input}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <View style={styles.inputContainer}>
          <Icon name="map-pin" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Address"
            onChangeText={(value) => handleInputChange('address', value)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Contact Number"
            keyboardType="phone-pad"
            onChangeText={(value) => handleInputChange('contactNumber', value)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(value) => handleInputChange('email', value)}
            style={styles.input}
          />
        </View>

        <Text style={styles.subTitle}>Property Details:</Text>
        {formData.propertyDetails.map((property, index) => (
          <View key={index} style={styles.inputContainer}>
            <Icon name="home" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder={`Property ${index + 1} Details`}
              value={property}
              onChangeText={(value) => handlePropertyChange(index, value)}
              style={styles.input}
            />
          </View>
        ))}

        <TouchableOpacity onPress={addPropertyField} style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Another Property</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <LinearGradient colors={["#800080", "#4b0082"]} style={styles.gradient}>
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("KeyGenerationScreen")}>
          <LinearGradient colors={["#4b0082", "#800080"]} style={styles.gradient}>
            <Text style={styles.buttonText}>Generate Key</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
    marginTop: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#800080',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b0082',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
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
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#800080',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FormFillingScreen;

// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useState } from 'react';
// import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

// const FormFillingScreen = ({ navigation }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     address: '',
//     contactNumber: '',
//     email: '',
//     propertyDetails: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     Alert.alert('Form Submitted', 'Your form has been successfully submitted!');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <Text style={styles.title}>LANDLORD FORM</Text>

//       <View style={styles.inputContainer}>
//         <Icon name="user" size={20} color="#555" style={styles.icon} />
//         <TextInput
//           placeholder="Full Name"
//           onChangeText={(value) => handleInputChange('fullName', value)}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="map-pin" size={20} color="#555" style={styles.icon} />
//         <TextInput
//           placeholder="Address"
//           onChangeText={(value) => handleInputChange('address', value)}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="phone" size={20} color="#555" style={styles.icon} />
//         <TextInput
//           placeholder="Contact Number"
//           keyboardType="phone-pad"
//           onChangeText={(value) => handleInputChange('contactNumber', value)}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="mail" size={20} color="#555" style={styles.icon} />
//         <TextInput
//           placeholder="Email"
//           keyboardType="email-address"
//           onChangeText={(value) => handleInputChange('email', value)}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="home" size={20} color="#555" style={styles.icon} />
//         <TextInput
//           placeholder="Property Details"
//           onChangeText={(value) => handleInputChange('propertyDetails', value)}
//           style={[styles.input, styles.textArea]}
//           multiline
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <LinearGradient colors={["#800080", "#4b0082"]} style={styles.gradient}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: '#F8F8F8',
//     padding: 30,
//     marginTop:20
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#800080',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     paddingHorizontal: 15,
//     marginBottom: 15,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: '#333',
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   button: {
//     borderRadius: 25,
//     overflow: 'hidden',
//     marginTop: 20,
//   },
//   gradient: {
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default FormFillingScreen;

