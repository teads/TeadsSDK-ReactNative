import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styleListFormats from '../styles/styleListFormats'
import { NATIVESCREEN } from '../constants'

const ListFormats = ({ navigation }) => {
  function navigateToNative(navigation) {
    return navigation.navigate(NATIVESCREEN)
  }

  return (
    <View>
      <Text style={styleListFormats.listText}>Formats</Text>
      <View style={styleListFormats.containerRow}>
        <View style={styleListFormats.formatContainerRow}>
          <Pressable style={styleListFormats.button}>
            <Text style={styleListFormats.text}>InRead</Text>
          </Pressable>
        </View>

        <View style={styleListFormats.formatContainerRow}>
          <Pressable style={styleListFormats.buttonUnpressed} onPress={() => navigateToNative(navigation)}>
            <Text style={styleListFormats.textUnpressed}>Native</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ListFormats
