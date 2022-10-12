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

  const tabIntegrations = [
    { type: 'ScrollView', image: ScrollView },
    { type: 'TableView', image: TableView },
    { type: 'CollectionView', image: CollectionView },
    { type: 'WebView', image: WebView }
  ]

  const listIntegrations = () => {
    return tabIntegrations.map(integration => {
      return (
        <View key={integration.type} style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image source={integration.image} style={styles.integrationsImages} />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>{integration.type}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    })
  }

  return (
    <View>
      <Text style={styles.listText}>Integrations</Text>
      <View style={styles.containerRow}>{listIntegrations()}</View>
    </View>
  )
}

export default ListIntegrations
