import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState, useRef } from "react";

function SettingsScreen() {


  const [zip, setZip] = useState("33180");
  const [unit, setUnit] = useState("metric");
  const [data, setData] = useState(null);

  // -----------------------------------
  async function fetchWeather() {
    const apikey = "7e247499e6bbed93c3bd35baf2018838";
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=metric`;
    const res = await fetch(path);
    const json = await res.json();
    const cod = json.cod;
    const message = json.message;

    if (cod !== 200) {
      setData({ cod, message });
      return;
    }
    const temp = json.main.temp;
    const feelsLike = json.main.feels_like;
    const desc = json.weather[0].description;

    console.log(zip)

    setData({
      cod,
      message,
      temp,
      feelsLike,
      desc,
    });
  }
  // -----------------------------------


  function WeatherDisplay(props) {
    const { temp, feelsLike, desc, cod, message } = props;

    if (cod !== 200) {
      return <Text>{message}</Text>;
    }
    return (
      <View>
        <Text>{temp}</Text>
        <Text>Feels Like: {feelsLike}</Text>
        <Text>{desc}</Text>
      </View>
    );
  }


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Weather!</Text>
      {data && <WeatherDisplay {...data} />}
      <TextInput
        style={styles.search}
        placeholder="Enter Zip Code"
        onChangeText={setZip}
        value={zip}
      />
      <Button
        onPress={fetchWeather}
        title="Get Weather"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    color: "red",
    fontWeight: "bold",
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
  },
  kav: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    margin: 30,
  },
});


export default SettingsScreen