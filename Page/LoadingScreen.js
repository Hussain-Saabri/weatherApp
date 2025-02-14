import { Button } from '@ui-kitten/components';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const LoadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to Smart Lease Application</Text>
      <TouchableOpacity >
        {/* <Image
          source={ require('../Public/slide3.jpg') } 
          style={styles.image}
        /> */}
      </TouchableOpacity>
      <Text style={styles.text}>Tenant Trust And Security</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('Login')}>Log In</Button>
      <Button style={styles.button} onPress={() => navigation.navigate('Signup')}>Sign Up</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF3F3',
  },
image: {
  width: 350,
  height: 400,
  resizeMode: 'cover',
},
text: {
  marginTop:20,
  textAlign:'center',
  color:'grey',
  fontSize:15
},

  title: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom:10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#a1045a',
    textAlign:'center'
  },
  button: {
    backgroundColor: '#800080',
    width:300,
    marginTop:10,
    borderColor: '#c4c4c4',
  },
});

export default LoadingScreen;
