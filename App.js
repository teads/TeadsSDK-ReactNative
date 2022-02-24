import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActionBarImage from "./components/ActionBarImage";
import Article from "./components/Article";
import ListFormats from "./components/ListFormats";
import ListProviders from "./components/ListProviders";
import ListCreatives from "./components/ListCreatives";
import ListIntegrations from "./components/ListIntegrations";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        {/* Component List Of Formats */}
        <ListFormats />

        {/* List Of Providers */}
        <ListProviders />

        {/* List Of choice for Creatives with selector using the State */}
        <ListCreatives />

        {/* List Of Intégrations redirecting to the demo pages */}
        <ListIntegrations {...navigation} />
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "SAMPLE APP",
            headerLeft: () => <ActionBarImage />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Article}
          options={{
            title: "Demo",
            headerRight: () => <ActionBarImage />,
            headerBackground: () => (
              <LinearGradient
                // Background Linear Gradient
                colors={["rgba(171, 65, 149, 0.7)", "#215798"]}
                style={styles.background}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 170,
  },
});
