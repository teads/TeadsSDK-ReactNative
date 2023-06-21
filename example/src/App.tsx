import * as React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import TeadsAdView from '../../src/teads-ad-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import TeadsAdRatio from '../../src/teads-ad-ratio';
import { Dimensions } from 'react-native';
import TeadsInReadAdPlacement from '../../src/teads-inread-ad-placement';
import { NativeEventEmitter, NativeModules } from 'react-native';

export default function App() {
  const [showAd, setShowAd] = React.useState<boolean>(true);
  const [adId, setAdId] = React.useState<String>();
  const [height, setHeight] = React.useState<number>();
  const [placement, setPlacement] = React.useState<
    TeadsInReadAdPlacement | undefined
  >();

  const AdPlacementSetting = new TeadsAdPlacementSettings();
  const AdRequestSettings = new TeadsAdRequestSettings();
  const AdRatio = new TeadsAdRatio(Dimensions.get('window').width);

  React.useEffect(() => {
    (async () => {
      await AdPlacementSetting.enableDebug();
      await AdRequestSettings.enableValidationMode();
      const placementCreation = await Teads.createInReadPlacement(
        84242,
        AdPlacementSetting
      );
      setPlacement(placementCreation);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onPress() {
    const resultId = await placement?.requestAd(AdRequestSettings);
    setAdId(resultId);

    if (resultId) {
      AdRatio.calculateHeight(AdRatio.width, resultId).then(setHeight);
    }
  }

  async function toggleDisplay() {
    setShowAd(!showAd);
  }

  async function getEvents() {
    const eventEmitter = new NativeEventEmitter(
      NativeModules.TeadsAdLifecycleEvents
    );
    // Subscribe to the event
    eventEmitter.addListener('didRecordImpression', (event) => {
      const { adId } = event;
      console.log('Id received in React on didRecordImpression:', adId);
    });
  }

  let ad;
  showAd
    ? (ad = (
        <>
          <Text>adId: {adId}</Text>
          <Text>H: {height}</Text>
          <Text>W: {AdRatio.width}</Text>
          <TeadsAdView
            style={{
              height: height,
              width: AdRatio.width,
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
        <Button title="listen the event" color="pink" onPress={getEvents} />
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
