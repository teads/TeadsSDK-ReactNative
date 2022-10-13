import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from '../styles/styles'
import { NATIVESCREEN } from '../constants'

const ListFormats = ({ navigation }) => {
  function navigateToNative(navigation) {
    return navigation.navigate(NATIVESCREEN)
  }

  return (
    <View>
      <Text style={styles.listText}>Formats</Text>
      <View style={styles.containerRow}>
        <View style={styles.formatContainerRow}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>InRead</Text>
          </Pressable>
        </View>

        <View style={styles.formatContainerRow}>
          <Pressable style={styles.buttonUnpressed} onPress={() => navigateToNative(navigation)}>
            <Text style={styles.textUnpressed}>Native</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ListFormats
