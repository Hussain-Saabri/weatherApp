import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const sendOTP = async () => {
        if (!email) {
            Alert.alert("Error", "Please enter your email");
            return;
        }

        try {
            const response = await axios.post("http://192.168.43.162:5000/forgot-password", { email });
            Alert.alert("Success", response.data.message);
            navigation.navigate("ResetPassword", { email }); // Navigate to OTP screen
        } catch (error) {
            Alert.alert("Error", error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={sendOTP}>
                <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15 },
    button: { backgroundColor: "#3498db", padding: 15, borderRadius: 5 },
    buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
});

export default ForgotPasswordScreen;
