import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';

const API_KEY = '6296704bb8ae0c74d4e37ef7ad8d2129';

const Record = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(0);
    

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=${API_KEY}`,
      );
      const jsonData = await response.json();
      setWeatherData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
     {weatherData ? (
        <View>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
          <Text style={styles.weather}>{weatherData.weather[0].main}</Text>
          <Button title="Refresh" onPress={fetchWeatherData}/>
         
        </View>
      ) : (
        <ActivityIndicator size={"large"} color={"blue"}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weather: {
    fontSize: 18,
  },
});

export default Record;
