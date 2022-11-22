import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Dogs from "./Dogs";
import WeatherCards from "./WeatherCards";
import MemeCards from "./memeCards";
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Memes") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Weather") {
              iconName = focused ? "partly-sunny" : "partly-sunny-outline";
            } else if (route.name === "Hatch a Pet") {
              iconName = focused ? "egg" : "egg-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Weather" component={WeatherCards} />
        <Tab.Screen name="Memes" component={MemeCards} />
        <Tab.Screen name="Hatch a Pet" component={Dogs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
