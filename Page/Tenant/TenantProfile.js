import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TenantProfile = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
      <Image source={require("../../Pubic/TenantsImage/house.jpeg")} style={styles.profileImage} />

        <TouchableOpacity style={styles.editIcon}>
          <Icon name="camera" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Tenant Name & Phone */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.phone}>+922367890</Text>

      {/* Profile Options */}
      <View style={styles.menu}>
        <MenuItem icon="user" text="Edit Profile" />
        <MenuItem icon="bell" text="Notification" />
        <MenuItem icon="credit-card" text="Payments Status" />
        <MenuItem icon="shopping-cart" text="Order" />
        <MenuItem icon="shield" text="Security" />
        <MenuItem icon="globe" text="Language" />
        <MenuItem icon="lock" text="Privacy Policy" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText} onPress={() => navigation.navigate("loadingScreen")}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={20} color="#333" />
    <Text style={styles.menuText}>{text}</Text>
    <Icon name="chevron-right" size={20} color="#333" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  profileContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0080FF',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  menu: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#800020',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TenantProfile;
