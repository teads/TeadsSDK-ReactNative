import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MyView from '../../src/my-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import TeadsInReadAdPlacement from '../../src/teads-inread-ad-placement';

export default function App() {
  const [showAd, setShowAd] = React.useState<boolean>(false);
  const [adId, setAdId] = React.useState<String>('testid');

  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  var testAdRequestSettings = new TeadsAdRequestSettings();

  var placement: TeadsInReadAdPlacement | undefined;
  placement = new TeadsInReadAdPlacement();

  async function onPress(this: any) {
    await testAdPlacementSetting.RNdisableCrashMonitoring();
    await testAdRequestSettings.RNpageUrl('www.example.com');
    await testAdPlacementSetting.RNenableDebug();

    // id de test
    placement = await Teads.RNcreateInReadPlacement(
      84242,
      testAdPlacementSetting
    );

    await placement?.RNrequestAd(testAdRequestSettings).then(setAdId);
  }

  function onPressAd(this: any) {
    setShowAd(!showAd);
  }

  let ad;
  showAd
    ? (ad = (
        <MyView
          style={{
            height: 400,
            width: 400,
          }}
          adId={adId}
        ></MyView>
      ))
    : (ad = <></>);

  return (
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
