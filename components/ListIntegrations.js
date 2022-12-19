import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styleListIntegrations from '../styles/styleListIntegrations'
import { DEMOSCREEN, TAB_INTEGRATIONS } from '../constants'

const ListIntegrations = ({ navigation }) => {
  function navigateToDemo(navigation) {
    return navigation.navigate(DEMOSCREEN)
  }

  const listIntegrations = () => {
    return TAB_INTEGRATIONS.map(integration => {
      return (
        <View key={integration.type} style={styleListIntegrations.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styleListIntegrations.containerColumn}>
              <View style={styleListIntegrations.imageItems}>
                <Image source={integration.image} style={styleListIntegrations.integrationsImages} />
              </View>
              <View style={styleListIntegrations.textItems}>
                <Text style={styleListIntegrations.textIntegrations}>{integration.type}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    })
  }

  return (
    <View>
      <Text style={styleListIntegrations.listText}>Integrations</Text>
      <View style={styleListIntegrations.containerRow}>{listIntegrations()}</View>
    </View>
  )
}

export default ListIntegrations
