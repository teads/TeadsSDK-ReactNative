import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import styleArticle from '../styles/styleArticle.js';
import CoffeImage from '../assets/coffee_bg.png';
import { COVER_RESIZING, TEADSBLUE, TEADSPINK } from '../constants';

export default function Article() {
  return (
    <ScrollView style={styleArticle.mainScrollView}>
      <View style={styleArticle.mainView}>
        <ImageBackground
          source={CoffeImage}
          resizeMode={COVER_RESIZING}
          style={styleArticle.image}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={[TEADSPINK, TEADSBLUE]}
            style={styleArticle.background}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={styleArticle.viewFullWidth}>
            <Text style={styleArticle.title}>Article Demo </Text>
            <Text style={styleArticle.subtitle}>
              Scroll down to see your creative
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styleArticle.viewCollumn}>
        <View>
          <Text style={styleArticle.titleBody}>
            Creative that cuts through the noise…but respects the user.
          </Text>
        </View>
        <View style={styleArticle.viewWithMargin}>
          <Text style={styleArticle.subtitleBody}>
            Holding attention in a mobile driven world is no easy challenge. At
            Teads, we embrace the swipes, the scrolls, the pinches and the taps
            to build ad experiences that delight the user and deliver business
            results for brands.
          </Text>
        </View>

        {[...Array(20)].map((e, i) => (
          <Text key={i} style={styleArticle.fakeArticle} />
        ))}
      </View>
    </ScrollView>
  );
}
