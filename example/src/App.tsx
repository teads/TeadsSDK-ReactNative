import * as React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import TeadsAdView from '../../src/teads-ad-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import TeadsAdRatio from '../../src/teads-ad-ratio';
import { Dimensions } from 'react-native';
import TeadsInReadAdPlacement from '../../src/teads-inread-ad-placement';

export default function App() {
  const [showAd, setShowAd] = React.useState<boolean>(true);
  const [adId, setAdId] = React.useState<String>();
  const [height, setHeight] = React.useState<number>();
  const [placement, setPlacement] = React.useState<
    TeadsInReadAdPlacement | undefined
  >();

  const testAdPlacementSetting = new TeadsAdPlacementSettings();
  const testAdRequestSettings = new TeadsAdRequestSettings();
  const testAdRatio = new TeadsAdRatio(Dimensions.get('window').width);

  React.useEffect(() => {
    (async () => {
      await testAdPlacementSetting.enableDebug();
      const awaitedVal = await Teads.createInReadPlacement(
        84242,
        testAdPlacementSetting
      );
      setPlacement(awaitedVal);
    })();
  }, []);

  async function onPress() {
    const resultId = await placement?.requestAd(testAdRequestSettings);
    setAdId(resultId);

    if (resultId) {
      testAdRatio.calculateHeight(testAdRatio.width, resultId).then(setHeight);
    }
  }

  async function toggleDisplay() {
    setShowAd(!showAd);
  }

  let ad;
  showAd
    ? (ad = (
        <>
          <Text>adId: {adId}</Text>
          <Text>H: {height}</Text>
          <Text>W: {testAdRatio.width}</Text>
          <TeadsAdView
            style={{
              height: height,
              width: testAdRatio.width,
            }}
            adId={adId}
          ></TeadsAdView>
        </>
      ))
    : (ad = <></>);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>adId: {adId}</Text>
        <Button title="claim ad" color="#841584" onPress={onPress} />
        <Button title="show ad" color="#841584" onPress={toggleDisplay} />
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
