import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import LoginScreen from "./LoginScreen";

const VerifyOtpScreen = ({ route, navigation }) => {
  const { email, password, role } = route.params;
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const response = await fetch("http://192.168.43.162:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "OTP Verified. Account Created!");
        // Here, you can navigate to the login page
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Invalid OTP");
    }
  };

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Verify OTP</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter OTP"
    keyboardType="numeric"
    value={otp}
    onChangeText={setOtp}
  />

  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
    <Text style={styles.buttonText}>Verify OTP</Text>
  </TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", height: 50, borderWidth: 1, padding: 10, marginBottom: 15 },
  button: { width: "80%", height: 50, backgroundColor: "#007bff", justifyContent: "center", alignItems: "center" },
  buttonText: { color: "white", fontSize: 18 },
});

export default VerifyOtpScreen;
