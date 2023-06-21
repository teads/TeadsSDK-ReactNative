import {
  View,
  ScrollView,
  NativeModules,
  Button,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import ListFormats from '../components/ListFormats';
import ListCreatives from '../components/ListCreatives';
import ListIntegrations from '../components/ListIntegrations';
import styleHomescreen from '../styles/styleHomescreen';
import { DEFAULT_CREATIVE, DEFAULT_MODAL, TEST_PID } from '../constants';

export default function HomeScreen({ navigation }) {
  const [pid, onChangePid] = useState(TEST_PID);
  const [modalVisible, setModalVisible] = useState(DEFAULT_MODAL);
  const [selectedCreative, setSelectedCreative] = useState(DEFAULT_CREATIVE);
  const OS = Platform.OS;

  const { InReadModule } = NativeModules;
  const onPress = () => {
    InReadModule.createInRead('testName', 'testLocation');
  };
  // On press on the button you can see log on android studio or in the developper tools

  return (
    <ScrollView contentContainerStyle={styleHomescreen.mainScrollView}>
      <View>
        {/* Component List Of Formats */}
        <ListFormats navigation={navigation} />

        {/* Just for testing, not going to stay after merge with native_modules */}
        <Button
          title="Click to invoke your native module!"
          color="#841584"
          onPress={onPress}
        />

        {/* List Of choice for Creatives with selector using the State */}
        <ListCreatives
          pid={pid}
          onChangePid={onChangePid}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedCreative={selectedCreative}
          setSelectedCreative={setSelectedCreative}
        />

        {/* List Of Integrations redirecting to the demo pages */}
        <ListIntegrations navigation={navigation} />
      </View>
    </ScrollView>
  );
}
