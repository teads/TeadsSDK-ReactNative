import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ScrollView from "../assets/ScrollView.imageset/ScrollView150.png";
import TableView from "../assets/TableView.imageset/TableView150.png";
import CollectionView from "../assets/CollectionView.imageset/CollectionView150.png";
import WebView from "../assets/ScrollView.imageset/ScrollView150.png";
import styles from "../styles/styles";

const ListIntegrations = ({ navigation }) => {
  function navigateToDemo(navigation) {
    return navigation.navigate("Demo");
  }

  const tabIntegrationTypes = [
    "ScrollView",
    "TableView",
    "CollectionView",
    "WebView",
  ];

  const tabIntegrationImages = [ScrollView, TableView, CollectionView, WebView];

  const listIntegrations = () => {
    return tabIntegrationTypes.map((integrationType, index) => {
      return (
        <View key={integrationType} style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image
                  source={tabIntegrationImages[index]}
                  style={styles.integrationsImages}
                />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integrationType}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <View>
      <Text style={styles.listText}>Integrations</Text>
      <View style={styles.containerRow}>{listIntegrations()}</View>
    </View>
  );
};

export default ListIntegrations;
