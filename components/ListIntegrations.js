import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import ScrollView from '../assets/ScrollView.imageset/ScrollView150.png'
import TableView from '../assets/TableView.imageset/TableView150.png'
import CollectionView from '../assets/CollectionView.imageset/CollectionView150.png'
import WebView from '../assets/ScrollView.imageset/ScrollView150.png'

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

const styles = StyleSheet.create({
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  textIntegrations: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#A9BCD1'
  },
  containerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignContent: 'space-around'
  },

  containerColumn: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  integrationsItems: {
    marginTop: 10,
    width: '48%',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#A9BCD1',
    borderRadius: 10
  },
  imageItems: {
    flex: 0.75,
    padding: 10
  },
  textItems: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  integrationsImages: { width: '100%', height: 120, resizeMode: 'contain' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  }
})

export default ListIntegrations
