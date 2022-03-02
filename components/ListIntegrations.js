import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import ScrollView from '../assets/ScrollView.imageset/ScrollView150.png'
import TableView from '../assets/TableView.imageset/TableView150.png'
import CollectionView from '../assets/CollectionView.imageset/CollectionView150.png'
import WebView from '../assets/ScrollView.imageset/ScrollView150.png'
import styles from '../styles/styles'

const ListIntegrations = ({ navigation }) => {
  function navigateToDemo(navigation) {
    return navigation.navigate('Demo')
  }

  const integrationStyle = {
    scrollview: 'ScrollView',
    tableview: 'TableView',
    collectionview: 'CollectionView',
    webview: 'WebView'
  }

  return (
    <View>
      <Text style={styles.listText}>Integrations</Text>

      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image source={ScrollView} style={styles.integrationsImages} />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integrationStyle.scrollview}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image source={TableView} style={styles.integrationsImages} />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integrationStyle.tableview}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image source={CollectionView} style={styles.integrationsImages} />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integrationStyle.collectionview}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image source={WebView} style={styles.integrationsImages} />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integrationStyle.webview}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ListIntegrations
