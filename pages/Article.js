import { Text, View, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as React from 'react'
import styles from '../styles/styles'

{
  /* fake article where we display the ad */
}

export default function Article() {
  return (
    <ScrollView style={styles.mainScrollView}>
      <View style={styles.mainView}>
        <ImageBackground source={require('../assets/coffee_bg.png')} resizeMode="cover" style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(171, 65, 149, 0.7)', '#215798']}
            style={styles.background}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={styles.viewFullWidth}>
            <Text style={styles.title}>Article Demo </Text>
            <Text style={styles.subtitle}>Scroll down to see your creative</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.viewCollumn}>
        <View>
          <Text style={styles.titleBody}>Creative that cuts through the noise…but respects the user.</Text>
        </View>
        <View style={styles.viewWithMargin}>
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
