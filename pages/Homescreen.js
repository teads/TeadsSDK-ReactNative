import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import ListFormats from "../components/ListFormats";
import ListCreatives from "../components/ListCreatives";
import ListIntegrations from "../components/ListIntegrations";

export default function HomeScreen({ navigation }) {
  //state for variables custom Pid,  openning of the modal and selection of creative style
  const [pid, onChangePid] = useState("84242");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCreative, setSelectedCreative] = useState("Landscape");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        {/* Component List Of Formats */}
        <ListFormats />

        {/* List Of choice for Creatives with selector using the State */}
        <ListCreatives
          pid={pid}
          onChangePid={onChangePid}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedCreative={selectedCreative}
          setSelectedCreative={setSelectedCreative}
        />

        {/* List Of Intégrations redirecting to the demo pages */}
        <ListIntegrations navigation={navigation} />
      </View>
    </ScrollView>
  );
}
