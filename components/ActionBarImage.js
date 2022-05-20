import React from 'react'
import { View, Image } from 'react-native'
import logo from '../assets/react.png'
import TeadsSampleAppBlack from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-black.png'

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image style={{ width: 30, height: 28, resizeMode: 'cover' }} source={logo} />
      <Image style={{ width: 150, height: 30, resizeMode: 'cover' }} source={TeadsSampleAppBlack} />
    </View>
  )
}

export default ActionBarImage
