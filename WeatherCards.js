import * as React from "react";
import {  View, StyleSheet, TextInput } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Text, Card, Button, Icon } from "@rneui/themed";
function WeatherCards() {
  const [zip, setZip] = useState("33180");
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
    const icon = json.weather[0].icon

    console.log(zip);

    setData({
      cod,
      message,
      temp,
      feelsLike,
      desc,
      icon
    });
  }
  // -----------------------------------

  function WeatherDisplay(props) {
    const { temp, feelsLike, desc, cod, message, icon } = props;

    if (cod !== 200) {
      return <Text>{message}</Text>;
    }
    return (
      <View>
        <Text style={styles.fonts} h2>
          Temperature: {temp}
        </Text>
        <Text style={styles.fonts} h3>
          Feels Like: {feelsLike}
        </Text>
        <Text style={styles.fonts} h4>
          Description: {desc}
        </Text>
        <Card.Image
          style={{ width:100, height: 100 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>Weather</Card.Title>
        <Card.Divider />
        {data && <WeatherDisplay {...data} />}
        <TextInput
          style={styles.search}
          placeholder="Enter Zip Code"
          onChangeText={setZip}
          value={zip}
        />
        <Button
          style={styles.buttons}
          onPress={fetchWeather}
          title="Get Weather"
          color="#841584"
        />
      </Card>
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

export default WeatherCards;
