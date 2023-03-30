import * as React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import TeadsAdView from '../../src/teads-ad-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import TeadsAdRatio from '../../src/teads-ad-ratio';
import { Dimensions } from 'react-native';

export default function App() {
  const [showAd, setShowAd] = React.useState<boolean>(false);
  const [adId, setAdId] = React.useState<String>();
  const [adId2, setAdId2] = React.useState<String>();
  const [height, setHeight] = React.useState<number>();

  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  var testAdRequestSettings = new TeadsAdRequestSettings();
  var testAdRatio = new TeadsAdRatio(Dimensions.get('window').width);
  //witdh of the ad is choose by the user
  //more optimal height is calculate by adRatio function

  async function onPress(this: any) {
    await testAdPlacementSetting.enableDebug();
    await testAdPlacementSetting.disableCrashMonitoring();
    await testAdRequestSettings.pageUrl('www.example.com');
    await testAdPlacementSetting.enableDebug();
    await testAdPlacementSetting.setUsPrivacy('consent');

    // id de test
    var placement1 = await Teads.createInReadPlacement(
      128779,
      testAdPlacementSetting
    );

    await placement1?.requestAd(testAdRequestSettings).then(setAdId);

    var placement2 = await Teads.createInReadPlacement(
      128779,
      testAdPlacementSetting
    );

    await placement2?.requestAd(testAdRequestSettings).then(setAdId2);
  }

  async function onPressAd() {
    if (adId) {
      await testAdRatio
        .calculateHeight(testAdRatio.width, adId)
        .then(setHeight);
    }
    setShowAd(!showAd);
  }

  let ad;
  showAd
    ? (ad = (
        <TeadsAdView
          style={{
            height: height,
            width: testAdRatio.width,
          }}
          adId={adId}
        ></TeadsAdView>
      ))
    : (ad = <></>);

  let ad2;
  showAd
    ? (ad2 = (
        <TeadsAdView
          style={{
            height: 400,
            width: '100%',
          }}
          adId={adId2}
        ></TeadsAdView>
      ))
    : (ad2 = <></>);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="Click to request an ad with RN!"
          color="#841584"
          onPress={onPress}
        />
        <Text>adId: {adId}</Text>
        <Text>adId: {adId2}</Text>
        <Button title="show ad" color="#841584" onPress={onPressAd} />

        {ad}
        {ad2}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
