import React from 'react'
import { Text, View, Pressable } from 'react-native'
import ModalCustom from '../components/ModalCustom'
import styles from '../styles/styles'
import { CREATIVETYPES, CUSTOM } from '../constants'

const ListCreatives = ({ pid, onChangePid, modalVisible, setModalVisible, selectedCreative, setSelectedCreative }) => {
  const listCreatives = () => {
    return CREATIVETYPES.map(creativeType => {
      return (
        <View key={creativeType}>
          <Pressable
            style={selectedCreative == creativeType ? styles.button : styles.buttonUnpressed}
            onPress={() => setSelectedCreative(creativeType)}
          >
            <Text style={selectedCreative == creativeType ? styles.text : styles.textUnpressed}>{creativeType}</Text>
          </Pressable>
        </View>
      )
    })
  }

  return (
    <View>
      <Text style={styles.listText}>Creatives</Text>
      <View style={styles.containerRow}>{listCreatives()}</View>

      <View style={styles.containerRow}>
        <View style={styles.centered}>
          <Pressable
            style={selectedCreative == CUSTOM ? styles.button : styles.buttonUnpressed}
            onPress={() => {
              setSelectedCreative(CUSTOM), setModalVisible(true)
            }}
          >
            <Text style={selectedCreative == CUSTOM ? styles.text : styles.textUnpressed}>{CUSTOM}</Text>
          </Pressable>
        </View>
      </View>
      <ModalCustom
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pid={pid}
        onChangePid={onChangePid}
      ></ModalCustom>
    </View>
  )
}

export default ListCreatives
