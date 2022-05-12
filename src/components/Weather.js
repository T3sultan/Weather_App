import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { haze, rainy, snow, sunny } from "../../assets";
import Search from "./Search";

const Weather = ({ weatherData }) => {
  //   console.log(weatherData);
  const {
    weather,
    name,
    main: { temp, humidity },
  } = weatherData;
  const [{ main }] = weather;
  //   console.log(main);

  const [image, setImage] = useState(null);

  useEffect(() => {
    //     console.log(main);
    setImage(getBackgroundImage(main));
  }, [weatherData]);

  function getBackgroundImage(weather) {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "Haze") return haze;
    return haze;
  }
  let textColor = image !== sunny ? "white" : "black";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImageStyle}
        resizeMode="cover"
      >
        <Search />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              ...styles.textStyle,
              color: textColor,
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              color: textColor,
              fontWeight: "bold",
            }}
          >
            {main}
          </Text>
          <Text style={{ ...styles.textStyle, color: textColor }}>
            {temp} °C
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  backgroundImageStyle: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  textStyle: {
    fontSize: 30,
  },
});
