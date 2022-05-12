import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Any City Name"
        value={cityName}
        onChangeText={text => setCityName(text)}
      />
      <EvilIcons
        name="search"
        size={24}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "lightgray",
    paddingHorizontal: 10,
  },
});
