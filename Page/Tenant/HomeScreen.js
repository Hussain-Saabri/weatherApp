import React from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image 
} from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";

// Correct image imports (Make sure images are inside the project directory)
const sliderImages = [
  require("../../Pubic/TenantsImage/image.png"),
  //require("../../Pubic/TenantsImage/house2.webp"),
  require("../../Pubic/TenantsImage/house.jpeg"),
];

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground 
      source={require("../../Pubic/TenantsImage/house2.webp")}
      style={styles.background}
    >
    <View style={styles.overlay}/>
      <ScrollView 
       contentContainerStyle={styles.contentContainer}
      >
        {/* Header with Profile & Notification Icon */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image 
              source={require("../../Pubic/TenantsImage/image.png")} 
              style={styles.profileImage} 
            />
            <Text style={styles.profileName}>Suchita</Text>
          </View>
          <Ionicons onPress={() => navigation.navigate("notification")}
          name="notifications-outline" size={28} color="black" />
        </View>

        {/* Title */}
        <Text style={styles.title}>Smart Lease Verify</Text>

        {/* Image Slider Using Swiper */}
        <View style={styles.swiperContainer}>
          <Swiper autoplay={true} showsPagination={true}>
            {sliderImages.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.carouselImage} />
              </View>
            ))}
          </Swiper>
        </View>

        {/* Form Filling Card */}
        <TouchableOpacity style={styles.formCard}>
  <Ionicons name="document-text-outline" size={24} color="black" style={styles.formIcon} />
  <Text style={styles.formCardText} onPress={() => navigation.navigate("form")}>Form Filling</Text>
</TouchableOpacity>

<View style={styles.infoCardsContainer}>
<Text style={styles.title1}>All About SmartLease Verification</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {/* Tenant Verification Importance Card */}
    <TouchableOpacity style={styles.infoCard}>
      <Ionicons name="shield-checkmark-outline" size={30} color="black" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Tenant Verification</Text>
      <Text style={styles.cardDescription}>
        Ensure a secure rental experience by verifying tenants before leasing your property.
      </Text>
    </TouchableOpacity>

    {/* Goa Police Verification Card */}
    <TouchableOpacity style={styles.infoCard}>
      <Ionicons name="business-outline" size={30} color="black" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Goa Police</Text>
      <Text style={styles.cardDescription}>
        Stay compliant with Goa Police guidelines for tenant verification and rental security.
      </Text>
    </TouchableOpacity>

    {/* Additional Goa Police Verification Card (Example) */}
    <TouchableOpacity style={styles.infoCard}>
      <Ionicons name="business-outline" size={30} color="black" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Goa Police Tenant Verification</Text>
      <Text style={styles.cardDescription}>
       user Stay connected with Goa Police guidelines for tenant verification and rental security.
      </Text>
    </TouchableOpacity>
  </ScrollView>
</View>




      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire background
    backgroundColor: "rgba(250, 246, 246, 0.1)", // Adjust the opacity (0.5 = 50%)
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    paddingTop:"30",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color:"#290916"
  },
  title1:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  swiperContainer: {
    height: 200,
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  formCard: {
    flexDirection: "row", // Ensures icon and text are side by side
    backgroundColor: "#ffcc00",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  formIcon: {
    marginRight: 10, // Adds spacing between the icon and text
  },
  formCardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cityCard: {
    backgroundColor: "#ddd",
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  infoCardsContainer: {
    marginTop: 20,
  },
  infoCard: {
    width: 250,  // Fixed width for cards to enable sliding effect
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15, // Adds space between cards
    elevation: 5, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});

export default HomeScreen;
