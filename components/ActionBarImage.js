import React from 'react'
import { View, Image } from 'react-native'
import logo from '../assets/react.png'
import TeadsSampleAppBlack from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-black.png'
import styles from '../styles/styles'

const ActionBarImage = () => {
  return (
    <View style={styles.viewRow}>
      <Image style={styles.logoImage} source={logo} />
      <Image style={styles.logoTeads} source={TeadsSampleAppBlack} />
    </View>
  )
}

export default ActionBarImage
