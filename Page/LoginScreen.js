import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
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
          navigation.navigate("Home1"); // Landlord screen
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
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to your rental account</Text>
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

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  header: { alignItems: "center", marginBottom: 20 },
  welcomeText: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "gray", textAlign: "center", marginTop: 5 },
  label: { marginTop: 10, fontWeight: "bold" },
  input: { marginBottom: 10 },
  radioContainer: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  forgotPassword: { color: "blue", marginTop: 10, textAlign: "right" },
  button: { backgroundColor: "blue", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 20 },
  buttonText: { color: "white", fontWeight: "bold" },
  footerText: { marginTop: 20, textAlign: "center" },
  link: { color: "blue", fontWeight: "bold" },
});

export default LoginScreen;


// const styles = StyleSheet.create({
//   container: {
//     marginTop:100,
//     padding:20,
//     flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//     backgroundColor: "#f7f9fc",
//   },
//   header: {
//     // marginBottom: 3,
//     // flex: 1,
//     justifyContent: 'center', // Vertically center
//     alignItems: 'center',     // Horizontally center
//     paddingHorizontal: 30,    // Add some padding
//     // backgroundColor: '#fff'
//   },
//   subtitle: {
//   fontSize: 16,
//   color: '#6c757d',
//   textAlign: 'center',
//   marginBottom: 20,
// },
// welcomeText: {
//   fontSize: 24,
//   marginBottom: 10,
//   textAlign: 'center',
// },
// label: {
//   fontSize: 16,
  
//   textAlign: 'left', // Aligns the text to the left
//   marginBottom: 5, // Adds spacing below the label
// },
//   // title: {
//   //   fontSize: 28,
//   //   fontWeight: "bold",
//   //   marginBottom: 20,
//   // },
//   input: {
//     width: '100%',
//     marginBottom: 20,
//     borderRadius: 8, // Rounded corners
//     borderColor: '#d1d9e6', // Light border color
//   },
//   footerText: {
//     marginTop: 20,
//     color: '#8F9BB3', // Subtle text color
//     textAlign: 'center',
//   },
//   link: {
//     color: '#3366FF', // Primary link color
//     fontWeight: 'bold',
//   },
//   optionsContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginTop: 10,
// },
// radioContainer: {
//   flexDirection: 'row', // Align items in a row
//   alignItems: 'center', // Vertically center items
//   justifyContent: 'flex-start', // Ensure items start from the left
//   gap: 10, // Add spacing between elements (React Native 0.71+)
//   marginBottom: 10,
// },

// // forgotPassword: {
// //   fontSize: 14,
// //   color: '#800020',
// //   fontWeight: 'bold',
// //   textDecorationLine: 'underline',
// //   textAlign: 'right',
// // },

//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'left',
//     alignSelf: 'flex-start'
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#c4c4c4',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//   },
//   forgotPassword: {
//     color: '#800020',
//     fontSize: 15,
//     fontWeight: '700',
//     textAlign: 'right',
//     //marginTop: 10,
//     alignSelf: 'flex-end'
//   },

//  button: {
//   borderRadius: 5,
//   paddingVertical: 10,
//   paddingHorizontal: 15,
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginVertical: 10, // Adds spacing between buttons
//     width: '100%',
//     backgroundColor: '#3366FF', // Primary color
//     borderColor: 'transparent',
// },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default LoginScreen;
