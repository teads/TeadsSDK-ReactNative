import React from 'react';
import { View, Image } from 'react-native';
import logo from '../assets/react.png';
import TeadsSampleAppBlack from '../assets/Teads-Sample-App.imageset/Teads-Sample-App-black.png';
import styleActionBarImage from '../styles/styleActionBarImage';

const ActionBarImage = () => {
  return (
    <View style={styleActionBarImage.viewRow}>
      <Image style={styleActionBarImage.logoImage} source={logo} />
      <Image
        style={styleActionBarImage.logoTeads}
        source={TeadsSampleAppBlack}
      />
    </View>
  );
};

export default ActionBarImage;
