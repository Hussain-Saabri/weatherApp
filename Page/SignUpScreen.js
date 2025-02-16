import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground,Button } from "react-native";
import { RadioButton } from "react-native-paper";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState(""); // Fixed typo (setNmae -> setName)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant");

  const handleNext = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://192.168.43.162:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }), // Sending all required fields
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "User registered successfully");

        // Navigate to OTP screen after successful registration
        navigation.navigate("SendOtp", { email, password, role });
      } else {
        Alert.alert("Error", data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Server error. Please try again later.");
    }
  };

  return (
    <ImageBackground
      source={require('../Pubic/TenantsImage/house4.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
<View style={styles.card}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Sign up to get started with our services!</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#6c757d"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6c757d"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#6c757d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
         <Text>Select Role:</Text>
                      <RadioButton.Group onValueChange={setRole} value={role}>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <RadioButton value="tenant" />
                   <Text>Tenant</Text>
                </View>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <RadioButton value="landlord" />
                     <Text>Landlord</Text>
                </View>
            </RadioButton.Group>
            
            <TouchableOpacity style={styles.button} onPress={handleNext}>

  <Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
      

      
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  signupButton: {
    backgroundColor: '#800020',
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#800020',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal:100,
    //color:"#800020"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default SignupScreen;
