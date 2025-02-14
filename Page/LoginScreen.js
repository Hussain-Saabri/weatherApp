import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet,ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Layout, Input, Button } from "@ui-kitten/components";
import { RadioButton } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");  // Ensure email state is set
  const [password, setPassword] = useState("");  // Ensure password state is set
  const [role, setRole] = useState("tenant");  // Default role as tenant
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://192.168.43.162:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Role is not required for login
      });

      const data = await response.json();

      if (response.ok) {
        //await AsyncStorage.setItem("userRole", data.role); // Store role in AsyncStorage
        Alert.alert("Success", "Logged in successfully");

        if (data.role === "tenant") {
          navigation.navigate("Tenant"); // Tenant screen
        } else if (data.role === "landlord") {
          navigation.navigate("LandlordStack"); // Landlord screen
        } else {
          Alert.alert("Error", "Invalid user role");
        }
      } else {
        Alert.alert("Error", data.message || "Login failed");
      }
    } catch (error) {
      Alert.alert("Error", "Server error. Please try again later.");
    }
  };

  return (
    <ImageBackground
          source={require('../Pubic/TenantsImage/house4.jpg')}
          style={styles.container}
          resizeMode="cover"
        >
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to your smart lease account</Text>
      </View>

      <Text style={styles.label}>Enter Email Address</Text>
      <Input
        placeholder="Enter Email"
        style={styles.input}
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email}  // Set the value
        onChangeText={setEmail}  // Update the state when input changes
      />

      <Text style={styles.label}>Enter your Password</Text>
      <Input
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        textContentType="password"
        value={password}  // Set the value
        onChangeText={setPassword}  // Update the state when input changes
      />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Select Role:</Text>
      <RadioButton.Group onValueChange={(newRole) => setRole(newRole)} value={role}>
        <View style={styles.radioContainer}>
          <RadioButton value="tenant" />
          <Text>Tenant</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="landlord" />
          <Text>Landlord</Text>
        </View>
      </RadioButton.Group>

      

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
      </Text>
    </Layout></ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,paddingVertical:35, justifyContent: "center" },
  header: { alignItems: "center", marginBottom: 20 },
  welcomeText: { fontSize: 24, fontWeight: "bold",color:"#67032f"},
  subtitle: { fontSize: 14, color: "gray", textAlign: "center", marginTop: 5 },
  label: { marginTop: 10, fontWeight: "bold" },
  input: { marginBottom: 10 },
  radioContainer: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  forgotPassword: { color: "#67032f", marginTop: 10, textAlign: "right" },
  button: { backgroundColor: "#800080", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 20 },
  buttonText: { color: "white", fontWeight: "bold" },
  footerText: { marginTop: 20, textAlign: "center" },
  link: { color: "blue", fontWeight: "bold" },
});

export default LoginScreen;

