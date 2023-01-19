import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import TeadsAdView from '../../src/teads-ad-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import type TeadsInReadAdPlacement from 'src/teads-inread-ad-placement';

export default function App() {
  const [showAd, setShowAd] = React.useState<boolean>(false);
  const [adId, setAdId] = React.useState<String>('testid');
  const [adId2, setAdId2] = React.useState<String>('testid');

  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  var testAdRequestSettings = new TeadsAdRequestSettings();

  var placement1: TeadsInReadAdPlacement | undefined;
  //placement1 = new TeadsInReadAdPlacement();

  var placement2: TeadsInReadAdPlacement | undefined;
  //placement2 = new TeadsInReadAdPlacement();

  async function onPress(this: any) {
    await testAdPlacementSetting.disableCrashMonitoring();
    console.log(testAdPlacementSetting.mapValue);
    await testAdRequestSettings.pageUrl('www.example.com');
    await testAdPlacementSetting.enableDebug();

    // id de test
    placement1 = await Teads.createInReadPlacement(
      84242,
      testAdPlacementSetting
    );

    await placement1?.requestAd(testAdRequestSettings).then(setAdId);

    placement2 = await Teads.createInReadPlacement(
      128779,
      testAdPlacementSetting
    );

    await placement2?.requestAd(testAdRequestSettings).then(setAdId2);
  }

  function onPressAd(this: any) {
    setShowAd(!showAd);
  }

  let ad;
  showAd
    ? (ad = (
        <TeadsAdView
          style={{
            height: 300,
            width: 400,
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
            height: 300,
            width: 400,
          }}
          adId={adId2}
        ></TeadsAdView>
      ))
    : (ad2 = <></>);

  return (
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
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
