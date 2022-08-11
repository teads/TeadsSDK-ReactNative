import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import { multiply } from 'react-native-teads-sdk-module';
import MyView from './my-view';
import Teads from './teads';
import TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsAdRequestSettings from './teads-ad-request-settings';
import TeadsInReadAdPlacement from './teads-inread-ad-placement';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(1, 2).then(setResult);
  }, []);

  const map1 = new Map();

  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);

  React.useEffect(() => {
    //tests TeadsAdPlacementSettings et ses fonctions
  }, []);
  var testAdPlacementSetting = new TeadsAdPlacementSettings();
  var testAdRequestSettings = new TeadsAdRequestSettings();
  var placement: TeadsInReadAdPlacement | undefined;
  console.log(TeadsInReadAdPlacement);

  //mettre async/await
  async function onPress(this: any) {
    await testAdPlacementSetting.RNdisableCrashMonitoring();
    console.log('hello', testAdPlacementSetting.mapValue);
    /* await testAdPlacementSetting.RNdisableTeadsAudioSessionManagement();
    testAdPlacementSetting.RNenableDebug();
    testAdPlacementSetting.RNuserConsent(
      'testAdPlacementSetting',
      'testAdPlacementSetting',
      1,
      11233323
    );
    testAdPlacementSetting.RNsetUsPrivacy('ok');
    testAdPlacementSetting.RNaddExtras(
      'testAdPlacementSetting',
      'testAdPlacementSetting'
    );
    testAdPlacementSetting.RNenableLocation();
    testAdPlacementSetting.RNuseLightEndScreen();
    testAdPlacementSetting.RNhideBrowserUrl();
    testAdPlacementSetting.RNtoolBarBackgroundColor(134);*/
    console.log('TeadsAdPlacementSettings', testAdPlacementSetting.mapValue);

    //tests AdRequestSettings et ses fonctions

    //testAdRequestSettings.RNenableValidationMode();
    await testAdRequestSettings.RNpageUrl('www.example.com');
    console.log('TeadsAdRequestSettings', testAdRequestSettings.mapValue);

    //test Teads
    placement = await Teads.RNcreateInReadPlacement(
      84242,
      testAdPlacementSetting
    );
    console.log('TeadsPlacement', placement);

    placement?.RNrequestAd(testAdRequestSettings);

    //TODO implemente
    multiply(2, 2).then(setResult);

    const eventEmitter = new NativeEventEmitter(NativeModules.test);
    this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
      console.log('delegate?', event.eventProperty); // "someValue"
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Text>Result: {result}</Text>
      <MyView
        style={{
          // converts dpi to px, provide desired height
          height: 100,
          // converts dpi to px, provide desired width
          width: 200,
        }}
      ></MyView>
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
