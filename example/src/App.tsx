import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Platform,
} from 'react-native';
import TeadsAdView from '../../src/teads-ad-view';
import Teads from '../../src/teads';
import TeadsAdPlacementSettings from '../../src/teads-ad-placement-settings';
import TeadsAdRequestSettings from '../../src/teads-ad-request-settings';
import TeadsAdRatio from '../../src/teads-ad-ratio';
import { Dimensions } from 'react-native';
import TeadsInReadAdPlacement from '../../src/teads-inread-ad-placement';
import { DeviceEventEmitter } from 'react-native';
//import TeadsAdViewEvents from '../../src/teads-ad-view-events';
import { NativeEventEmitter, NativeModules } from 'react-native';

export default function App() {
  //const testTeadsAdViewEvents = new TeadsAdViewEvents();

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
      await testAdRequestSettings.enableValidationMode();
      const awaitedVal = await Teads.createInReadPlacement(
        84242,
        testAdPlacementSetting
      );
      setPlacement(awaitedVal);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  async function getEvents() {
    if (Platform.OS === 'ios') {
      // Code specific to iOS events
      const eventEmitter = new NativeEventEmitter(
        NativeModules.RNHandlerEvents
      );
      // Subscribe to the event
      eventEmitter.addListener('didRecordImpression', (event) => {
        const { data } = event;
        console.log('Data received in React:', data);
      });
    } else if (Platform.OS === 'android') {
      // Code specific to Android events
      DeviceEventEmitter.addListener('didRecordImpression', (params) => {
        console.log(params); // Access the data sent from Android
      });
    }
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
