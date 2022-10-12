import React from 'react'
import { Text, View, Pressable, Alert } from 'react-native'
import styles from '../styles/styles'

const ListFormats = ({ navigation }) => {
  function navigateToNative(navigation) {
    return navigation.navigate('Native')
  }

  return (
    <View>
      {/* List Of Formats */}
      <Text style={styles.listText}>Formats</Text>
      <View style={styles.containerRow}>
        <View style={{ flex: 0.48 }}>
          <Pressable style={styles.button} onPress={() => Alert.alert('setState to InRead')}>
            <Text style={styles.text}>InRead</Text>
          </Pressable>
        </View>

        <View style={{ flex: 0.48 }}>
          <Pressable style={styles.buttonUnpressed} onPress={() => navigateToNative(navigation)}>
            <Text style={styles.textUnpressed}>Native</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ListFormats
