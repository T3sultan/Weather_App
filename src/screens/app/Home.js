import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Weather from "../../components/Weather";
import Search from "../../components/Search";

const API_KEY = "0d931a97409e61ebe2d94c1c67085563";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData("Dhaka");
    console.log(weatherData);
  }, []);
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={36} />
      </View>
    );
  }
  if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Search fetchWeatherData={fetchWeatherData} />
        <Text style={{ margin: 10, fontSize: 20, color: "red" }}>
          City Not Found ! Try Different City
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
