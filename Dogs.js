import * as React from "react";
import {  View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useEffect, useState} from 'react'
import { Text, Card, Button, Icon } from "@rneui/themed";

function Dogs() {

      const [
        data,
        setData,
      ] = useState()

    async function getDog() {
        const path = "https://dog.ceo/api/breeds/image/random";
        const res = await fetch(path)
        const json = await res.json()
        const image = json.message
        console.log(image)
        setData(image)
    }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
        <Card.Title>Random Pet</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, width: 300, height: 300 }}
          source={{ uri: data }}
        />
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Get Dog"
          onPress={getDog}
        />
      </Card>
    </View>
  );
}

export default Dogs;
