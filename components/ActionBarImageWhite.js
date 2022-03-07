import React from 'react'
import { View, Image } from 'react-native'
import TeadsSampleAppWhite from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-white.png'

const ActionBarImageWhite = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image style={{ width: 150, height: 30, resizeMode: 'cover' }} source={TeadsSampleAppWhite} />
    </View>
  )
}

export default ActionBarImageWhite
