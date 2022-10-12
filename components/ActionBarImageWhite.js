import React from 'react'
import { View, Image } from 'react-native'
import TeadsSampleAppWhite from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-white.png'
import styles from '../styles/styles'

const ActionBarImageWhite = () => {
  return (
    <View style={styles.viewRow}>
      <Image style={styles.logoTeads} source={TeadsSampleAppWhite} />
    </View>
  )
}

export default ActionBarImageWhite
