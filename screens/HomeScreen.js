import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import TeadsAdView from "../TeadsAdView"

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <TeadsAdView style={styles.ad}/>


          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.developmentModeText}>Marshmallow oat cake icing. Bear claw macaroon dessert apple pie. Chocolate cake candy pie jujubes dessert. Soufflé carrot cake cheesecake cupcake macaroon. Pastry pastry lollipop halvah donut bear claw. Biscuit cookie candy cookie jelly-o. Candy cotton candy cheesecake muffin jelly beans oat cake. Gingerbread tart cookie chupa chups chocolate cake. Bonbon gingerbread pie chocolate cake carrot cake toffee tart sesame snaps marzipan. Icing brownie pudding soufflé lemon drops macaroon oat cake. Danish bear claw caramels apple pie oat cake chocolate cake bonbon candy canes. Tootsie roll cotton candy gummi bears cupcake donut cupcake wafer. Sweet gummies sweet liquorice candy canes sugar plum pudding caramels.</Text>
          <Text style={styles.developmentModeText}>Cookie sweet apple pie sugar plum halvah gummies powder ice cream. Toffee donut tiramisu jelly-o cheesecake pastry gummies jujubes marzipan. Oat cake chocolate bar candy canes pastry cake dragée. Oat cake gummi bears sesame snaps oat cake. Chocolate cake macaroon bonbon biscuit halvah toffee. Croissant macaroon caramels oat cake icing cotton candy brownie chocolate. Lemon drops wafer dessert sesame snaps tiramisu. Lemon drops carrot cake danish lemon drops pie sugar plum. Fruitcake liquorice powder. Chupa chups macaroon brownie chocolate bar sugar plum cotton candy tiramisu oat cake apple pie. Chocolate cake wafer gummi bears dragée. Cupcake dragée jelly-o chupa chups jelly beans.

          </Text>
          <Text style={styles.developmentModeText}>Gummi bears cotton candy fruitcake carrot cake jelly carrot cake jelly beans apple pie marzipan. Marshmallow tiramisu cotton candy icing danish tootsie roll gummi bears chocolate bar pie. Cheesecake lollipop gummi bears. Carrot cake tart pastry cake. Cookie jujubes gingerbread lemon drops carrot cake topping sweet roll chocolate. Brownie marzipan marshmallow oat cake caramels powder sweet. Jujubes danish macaroon jelly beans dessert. Danish chocolate gingerbread. Caramels apple pie topping fruitcake icing sesame snaps. Gummies biscuit wafer carrot cake biscuit tootsie roll. Cheesecake caramels wafer bear claw tart macaroon muffin donut. Tootsie roll macaroon candy cake sweet roll chocolate croissant jelly chocolate. Jelly-o cheesecake icing tiramisu. Cookie fruitcake candy candy canes danish gummies.</Text>


          <Text style={styles.developmentModeText}>Marshmallow oat cake icing. Bear claw macaroon dessert apple pie. Chocolate cake candy pie jujubes dessert. Soufflé carrot cake cheesecake cupcake macaroon. Pastry pastry lollipop halvah donut bear claw. Biscuit cookie candy cookie jelly-o. Candy cotton candy cheesecake muffin jelly beans oat cake. Gingerbread tart cookie chupa chups chocolate cake. Bonbon gingerbread pie chocolate cake carrot cake toffee tart sesame snaps marzipan. Icing brownie pudding soufflé lemon drops macaroon oat cake. Danish bear claw caramels apple pie oat cake chocolate cake bonbon candy canes. Tootsie roll cotton candy gummi bears cupcake donut cupcake wafer. Sweet gummies sweet liquorice candy canes sugar plum pudding caramels.</Text>
          <Text style={styles.developmentModeText}>Cookie sweet apple pie sugar plum halvah gummies powder ice cream. Toffee donut tiramisu jelly-o cheesecake pastry gummies jujubes marzipan. Oat cake chocolate bar candy canes pastry cake dragée. Oat cake gummi bears sesame snaps oat cake. Chocolate cake macaroon bonbon biscuit halvah toffee. Croissant macaroon caramels oat cake icing cotton candy brownie chocolate. Lemon drops wafer dessert sesame snaps tiramisu. Lemon drops carrot cake danish lemon drops pie sugar plum. Fruitcake liquorice powder. Chupa chups macaroon brownie chocolate bar sugar plum cotton candy tiramisu oat cake apple pie. Chocolate cake wafer gummi bears dragée. Cupcake dragée jelly-o chupa chups jelly beans.

          </Text>
          <Text style={styles.developmentModeText}>Gummi bears cotton candy fruitcake carrot cake jelly carrot cake jelly beans apple pie marzipan. Marshmallow tiramisu cotton candy icing danish tootsie roll gummi bears chocolate bar pie. Cheesecake lollipop gummi bears. Carrot cake tart pastry cake. Cookie jujubes gingerbread lemon drops carrot cake topping sweet roll chocolate. Brownie marzipan marshmallow oat cake caramels powder sweet. Jujubes danish macaroon jelly beans dessert. Danish chocolate gingerbread. Caramels apple pie topping fruitcake icing sesame snaps. Gummies biscuit wafer carrot cake biscuit tootsie roll. Cheesecake caramels wafer bear claw tart macaroon muffin donut. Tootsie roll macaroon candy cake sweet roll chocolate croissant jelly chocolate. Jelly-o cheesecake icing tiramisu. Cookie fruitcake candy candy canes danish gummies.</Text>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    margin: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  ad: {
    flexShrink: 0,
    width:"100%",
    height:100,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
