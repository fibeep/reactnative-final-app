import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useEffect, useState} from 'react'

function Dogs() {

      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);

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
      
      <Image 
      style={{width: 100, height: 100}}
      source={{uri:data}}
      />
    
    <Button 
    title="Get Dog"
    onPress={getDog} />
    </View>
  );
}

export default Dogs;
