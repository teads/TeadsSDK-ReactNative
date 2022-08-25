import * as React from 'react';
import { StyleSheet, View, Text, Button, PanResponder } from 'react-native';
import { multiply } from 'react-native-teads-sdk-module';
import MyView from './my-view';
import Teads from './teads';
import TeadsAdPlacementSettings from './teads-ad-placement-settings';
import TeadsAdRequestSettings from './teads-ad-request-settings';
import TeadsInReadAdPlacement from './teads-inread-ad-placement';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [showAd, setShowAd] = React.useState<boolean | undefined>();
  const [adId, setAdId] = React.useState<String>('testid');

  React.useEffect(() => {
    multiply(1, 2).then(setResult);
    setShowAd(false);
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

    console.log('TeadsAdPlacementSettings', testAdPlacementSetting.mapValue);

    await testAdRequestSettings.RNpageUrl('www.example.com');
    console.log('TeadsAdRequestSettings', testAdRequestSettings.mapValue);

    //test Teads
    placement = await Teads.RNcreateInReadPlacement(
      128779,
      testAdPlacementSetting
    );

    await placement?.RNrequestAd(testAdRequestSettings).then(setAdId);
    console.log('TeadsPlacement requestAd', adId);

    //link ad avec la custom view
    //utiliser react prop avec uuid et utiliser fonction dans custom view
    //plus creer fonction et voir l'ad lol

    //TODO implemente
    multiply(2, 2).then(setResult);
  }
  async function onPressAd(this: any) {
    setShowAd(!showAd);
  }

  let ad;
  if (showAd) {
    ad = (
      <MyView
        //add en props l'id
        style={{
          height: 300,
          width: 300,
        }}
        adId={adId}
      ></MyView>
    );
  } else {
    ad = <></>;
  }

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Text>Result: {result}</Text>
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
