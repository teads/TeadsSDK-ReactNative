import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as React from 'react'

export default function Article({ route, navigation }) {
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        <ImageBackground source={require('../assets/coffee_bg.png')} resizeMode="cover" style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(171, 65, 149, 0.7)', '#215798']}
            style={styles.background}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={{ width: '100%' }}>
            <Text style={styles.title}>Article Demo </Text>
            <Text style={styles.subtitle}>Scroll down to see your creative</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, padding: 10, flexDirection: 'column' }}>
        <View>
          <Text style={styles.titleBody}>Creative that cuts through the noise…but respects the user.</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subtitleBody}>
            Holding attention in a mobile driven world is no easy challenge. At Teads, we embrace the swipes, the
            scrolls, the pinches and the taps to build ad experiences that delight the user and deliver business results
            for brands.
          </Text>
        </View>

        {[...Array(20)].map((e, i) => (
          <Text key={i} style={styles.fakeArticle}></Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    textAlign: 'center'
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 84,
    textAlign: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 170
  },
  titleBody: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  subtitleBody: {
    color: 'black',
    fontSize: 20,
    textAlign: 'justify'
  },
  fakeArticle: {
    height: 10,
    width: '100%',
    backgroundColor: '#cfcfcf',
    opacity: 0.32,
    borderRadius: 10,
    marginTop: 10
  }
})
