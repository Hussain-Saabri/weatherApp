import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";

const ResetPasswordScreen = ({ route, navigation }) => {
    const { email } = route.params;
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const resetPassword = async () => {
        if (!otp || !newPassword) {
            Alert.alert("Error", "Please enter OTP and new password");
            return;
        }

        try {
            const response = await axios.post("http://192.168.43.162:5000/reset-password", {
                email,
                otp,
                newPassword,
            });
            Alert.alert("Success", response.data.message);
            navigation.navigate("Login"); // Navigate back to login screen
        } catch (error) {
            Alert.alert("Error", error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                keyboardType="numeric"
                value={otp}
                onChangeText={setOtp}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter new password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TouchableOpacity style={styles.button} onPress={resetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15 },
    button: { backgroundColor: "#2ecc71", padding: 15, borderRadius: 5 },
    buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
});

export default ResetPasswordScreen;
