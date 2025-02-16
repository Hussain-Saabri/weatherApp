import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const SendOtpScreen = ({ route, navigation }) => {
  const { email, password, role } = route.params;
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      const response = await fetch("http://192.168.1.6:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", data.message);
        setOtpSent(true);
        navigation.navigate("VerifyOtp", { email, password, role });
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send OTP</Text>
      <Text>Email: {email}</Text>

      <TouchableOpacity style={styles.button} onPress={sendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  button: { width: "80%", height: 50, backgroundColor: "#007bff", justifyContent: "center", alignItems: "center" },
  buttonText: { color: "white", fontSize: 18 },
});

export default SendOtpScreen;
