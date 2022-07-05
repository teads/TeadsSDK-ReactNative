import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
  multiply,
  enableDebug,
  userConsent,
  disableCrashMonitoring,
  disableTeadsAudioSessionManagement,
  setUsPrivacy,
  addExtras,
  enableLocation,
  RNuseLightEndScreen,
  hideBrowserUrl,
  toolBarBackgroundColor,
  disableBatteryMonitoring,
  enableValidationMode,
  addExtraSetting,
  pageUrl,
  createInReadPlacement,
  bind,
} from 'react-native-teads-sdk-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(1, 2).then(setResult);
  }, []);

  const map1 = new Map();

  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);

  function onPress() {
    multiply(6, 6).then(setResult);
    enableDebug();
    userConsent('test', 'test', 1, 11233323);
    disableCrashMonitoring();
    disableTeadsAudioSessionManagement();
    disableBatteryMonitoring();
    setUsPrivacy('ok');
    addExtras('test', 'test');
    enableLocation();
    RNuseLightEndScreen();
    hideBrowserUrl();
    toolBarBackgroundColor(134);
    enableValidationMode();
    pageUrl('www.example.com');
    addExtraSetting('test', 'test');
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
