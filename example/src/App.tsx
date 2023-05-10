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
  const [height, setHeight] = React.useState<number>();

  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  var testAdRequestSettings = new TeadsAdRequestSettings();
  var testAdRatio = new TeadsAdRatio(Dimensions.get('window').width);
  //witdh of the ad insert by the user
  //more optimal height is calculate by adRatio function

  async function onPress(this: any) {
    await testAdPlacementSetting.enableDebug();
    await testAdPlacementSetting.disableCrashMonitoring();
    await testAdRequestSettings.pageUrl('www.example.com');
    await testAdPlacementSetting.enableDebug();
    await testAdPlacementSetting.setUsPrivacy('consent');

    var placement1 = await Teads.createInReadPlacement(
      84242,
      testAdPlacementSetting
    );

    await placement1?.requestAd(testAdRequestSettings).then(setAdId);
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="Click to request an ad with RN!"
          color="#841584"
          onPress={onPress}
        />
        <Text>adId: {adId}</Text>
        <Button title="show ad" color="#841584" onPress={onPressAd} />
        {ad}
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
