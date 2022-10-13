import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/styles'
import { DEMOSCREEN, TAB_INTEGRATIONS } from '../constants'

const ListIntegrations = ({ navigation }) => {
  function navigateToDemo(navigation) {
    return navigation.navigate(DEMOSCREEN)
  }

  const listIntegrations = () => {
    return TAB_INTEGRATIONS.map(integration => {
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
