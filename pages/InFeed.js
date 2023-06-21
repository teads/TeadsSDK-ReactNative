import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import InFeedItem from '../components/InFeedItem';
import styleInFeed from '../styles/styleInFeed';
import CoffeImage from '../assets/coffee_bg.png';
import {
  COVER_RESIZING,
  TAB_NATIVE_ITEMS,
  TEADSBLUE,
  TEADSPINK,
} from '../constants';

export default function InFeed() {
  const listItems = () => {
    return TAB_NATIVE_ITEMS.map((item) => {
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
        />
      );
    });
  };

  return (
    <ScrollView style={styleInFeed.mainScrollView}>
      <View style={styleInFeed.mainView}>
        <ImageBackground
          source={CoffeImage}
          resizeMode={COVER_RESIZING}
          style={styleInFeed.image}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={[TEADSPINK, TEADSBLUE]}
            style={styleInFeed.background}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={styleInFeed.viewFullWidth}>
            <Text style={styleInFeed.title}>Native Demo InFeed </Text>
            <Text style={styleInFeed.subtitle}>
              Scroll down to see your creative
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styleInFeed.viewCollumn}>{listItems()}</View>
    </ScrollView>
  );
}
