import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground 
} from "react-native";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Import Icon

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleNext = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.6:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "User registered successfully");
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
      source={require("../Pubic/TenantsImage/house4.jpg")}
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
          autoCapitalize="none"
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
            
            <TouchableOpacity style={styles.button} onPress={() => console.log('Next pressed')}>
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
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 5,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#800080",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#800020",
    marginTop: 10,
  },
});

export default SignupScreen;
