import * as React from "react";
import { Image, Text, View, StyleSheet, FlatList, SafeAreaView, KeyboardAvoidingView, StatusBar, TextInput, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import memesData from "./memes";



function HomeScreen() {

const [search, setSearch] = useState("");
const renderItem = ({ item }) => <Item title={item.title} />;
let data = memesData.filter(item => item.name.includes(search))
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style="auto" />
        <View style={styles.listContainer}>
          <ScrollView>

            {data.map((meme) => (
              <View key={meme.id}>
                <Image
                  style={{ width: meme.width / 3, height: meme.height / 3 }}
                  source={{ uri: meme.url }}
                />
                <Text style={styles.item}>{meme.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <TextInput
          style={styles.search}
          placeholder="Search Meme"
          onChangeText={setSearch}
          value={search}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default HomeScreen


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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
