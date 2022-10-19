import React from 'react'
import { View, Image } from 'react-native'
import TeadsSampleAppWhite from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-white.png'
import styleActionBarImageWhite from '../styles/styleActionBarImageWhite'

const ActionBarImageWhite = () => {
  return (
    <View style={styleActionBarImageWhite.viewRow}>
      <Image style={styleActionBarImageWhite.logoTeads} source={TeadsSampleAppWhite} />
    </View>
  )
}

export default ActionBarImageWhite
