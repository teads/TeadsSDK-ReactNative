import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
  multiply,
  createInReadPlacement,
  bind,
} from 'react-native-teads-sdk-module';
import TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsAdRequestSettings from './teads-ad-request-settings';


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
    var testAdPlacementSetting = new TeadsAdPlacementSettings();
    testAdPlacementSetting.RNdisableCrashMonitoring();
    testAdPlacementSetting.RNdisableCrashMonitoring();
    testAdPlacementSetting.RNdisableTeadsAudioSessionManagement();
    testAdPlacementSetting.RNenableDebug();
    testAdPlacementSetting.RNuserConsent(
      'testAdPlacementSetting',
      'testAdPlacementSetting',
      1,
      11233323
    );
    testAdPlacementSetting.RNsetUsPrivacy('ok');
    testAdPlacementSetting.RNdisableBatteryMonitoring();
    testAdPlacementSetting.RNaddExtras(
      'testAdPlacementSetting',
      'testAdPlacementSetting'
    );
    testAdPlacementSetting.RNenableLocation();
    testAdPlacementSetting.RNuseLightEndScreen();
    testAdPlacementSetting.RNhideBrowserUrl();
    testAdPlacementSetting.RNtoolBarBackgroundColor(134);
    console.log('TeadsAdPlacementSettings', testAdPlacementSetting.mapValue);

    //tests AdRequestSettings et ses fonctions
    var testAdRequestSettings = new TeadsAdRequestSettings();
    testAdRequestSettings.RNenableValidationMode();
    testAdRequestSettings.RNpageUrl('www.example.com');
    testAdRequestSettings.RNaddExtras('test', 'test');
    console.log(testAdRequestSettings.mapValue);
  }, []);

  //test Teads

  //TODO

  function onPress() {
    multiply(6, 6).then(setResult);
    createInReadPlacement(123, map1);
    bind('');
  }

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Text>Result: {result}</Text>
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
