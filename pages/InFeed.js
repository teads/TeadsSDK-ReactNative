import { Text, View, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as React from 'react'
import InFeedItem from '../components/InFeedItem'
import styles from '../styles/styles'
import CoffeImage from '../assets/coffee_bg.png'
import { COVER_RESIZING, TAB_NATIVE_ITEMS, TEADSBLUE, TEADSPINK } from '../constants'

export default function InFeed() {
  const listItems = () => {
    return TAB_NATIVE_ITEMS.map(item => {
      return (
        <InFeedItem
          key={item.source}
          source={item.source}
          icon={item.icon}
          text={item.text}
          title={item.title}
          media={item.media}
          time={item.time}
          textButton={item.textButton}
        ></InFeedItem>
      )
    })
  }

  return (
    <ScrollView style={styles.mainScrollView}>
      <View style={styles.mainView}>
        <ImageBackground source={CoffeImage} resizeMode={COVER_RESIZING} style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            colors={[TEADSPINK, TEADSBLUE]}
            style={styles.background}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={styles.viewFullWidth}>
            <Text style={styles.title}>Native Demo InFeed </Text>
            <Text style={styles.subtitle}>Scroll down to see your creative</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.viewCollumn}>{listItems()}</View>
    </ScrollView>
  )
}
