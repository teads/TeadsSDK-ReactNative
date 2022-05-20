import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActionBarImage from './components/ActionBarImage'
import Article from './pages/Article'
import { LinearGradient } from 'expo-linear-gradient'
import ActionBarImageWhite from './components/ActionBarImageWhite'
import styles from './styles/styles'
import HomeScreen from './pages/Homescreen'
import InFeed from './pages/InFeed'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerTitle: () => <ActionBarImage />
          }}
        />
        <Stack.Screen
          name="Demo"
          component={Article}
          options={{
            title: '',
            headerTitle: () => <ActionBarImageWhite />,
            headerBackground: () => (
              <LinearGradient
                // Background Linear Gradient
                colors={['rgba(171, 65, 149, 0.7)', '#215798']}
                style={styles.background}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              />
            )
          }}
        />
        <Stack.Screen
          name="Native"
          component={InFeed}
          options={{
            title: '',
            headerTitle: () => <ActionBarImageWhite />,
            headerBackground: () => (
              <LinearGradient
                // Background Linear Gradient
                colors={['rgba(171, 65, 149, 0.7)', '#215798']}
                style={styles.background}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
