import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { Button } from '@ui-kitten/components';

const API_KEY = '6200a6a9ebd14206844210304252102';

const LandingScreen = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    if (!location) {
      alert('Please enter a location.');
      return;
    }
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&hours=12`
      );
      const data = await response.json();
      if (data.error) {
        alert('Location not found.');
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      alert('Error fetching weather data.');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://st.depositphotos.com/1005091/2380/v/450/depositphotos_23803903-stock-illustration-sky-and-clouds-theme-image.jpg' }} 
      style={styles.background}
      imageStyle={{ opacity: 0.8 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            placeholderTextColor="#aaa"
            value={location}
            onChangeText={setLocation}
          />
          <Button style={styles.searchButton} onPress={fetchWeather}>
            Search
          </Button>
        </View>

        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={styles.city}>
              {weatherData.location.name}, {weatherData.location.country}
            </Text>
            <Image
              source={{ uri: `https:${weatherData.current.condition.icon}` }}
              style={styles.icon}
            />
            <Text style={styles.temperature}>Min: {weatherData.current.temp_c}°C</Text>
            <Text style={styles.temperature}>Max: {weatherData.forecast.forecastday[0].day.maxtemp_c}°C</Text>
            <Text style={styles.subText}>Last updated: {weatherData.current.last_updated}</Text>

            <View style={styles.separator} />

            <Text style={styles.forecastHeading}>Today's weather forecast</Text>

            <View style={styles.forecastContainer}>
              {weatherData.forecast.forecastday[0].hour
                .filter((hour) => [6, 9, 12].includes(new Date(hour.time).getHours()))
                .map((hourData, index) => (
                  <View key={index} style={styles.forecastItem}>
                    <Text style={styles.forecastTime}>
                      {new Date(hourData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                    <Image
                      source={{ uri: `https:${hourData.condition.icon}` }}
                      style={styles.forecastIcon}
                    />
                    <Text style={styles.forecastTemp}>{hourData.temp_c}°C</Text>
                  </View>
                ))}
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#10b981',
    borderRadius: 8,
  },
  weatherContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 12,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  icon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f97316',
    marginVertical: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 15,
  },
  forecastHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  forecastItem: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  forecastTime: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  forecastIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  forecastTemp: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LandingScreen;
