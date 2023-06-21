import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionBarImage from './components/ActionBarImage';
import Article from './pages/Article';
import { LinearGradient } from 'expo-linear-gradient';
import ActionBarImageWhite from './components/ActionBarImageWhite';
import styleApp from './styles/styleApp';
import HomeScreen from './pages/Homescreen';
import InFeed from './pages/InFeed';
import {
  HOMESCREEN,
  DEMOSCREEN,
  TEADSPINK,
  TEADSBLUE,
  NATIVESCREEN,
} from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOMESCREEN}
          component={HomeScreen}
          options={{
            headerTitle: () => <ActionBarImage />,
          }}
        />
        <Stack.Screen
          name={DEMOSCREEN}
          component={Article}
          options={{
            title: '',
            headerTitle: () => <ActionBarImageWhite />,
            headerBackground: () => (
              <LinearGradient
                // Background Linear Gradient
                colors={[TEADSPINK, TEADSBLUE]}
                style={styleApp.background}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name={NATIVESCREEN}
          component={InFeed}
          options={{
            title: '',
            headerTitle: () => <ActionBarImageWhite />,
            headerBackground: () => (
              <LinearGradient
                // Background Linear Gradient
                colors={[TEADSPINK, TEADSBLUE]}
                style={styleApp.background}
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
