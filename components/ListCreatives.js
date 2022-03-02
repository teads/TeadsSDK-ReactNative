import React from 'react'
import { Text, View, Pressable } from 'react-native'
import ModalCustom from '../components/ModalCustom'
import styles from '../styles/styles'

const ListCreatives = ({ pid, onChangePid, modalVisible, setModalVisible, selectedCreative, setSelectedCreative }) => {
  const CreativesEnum = {
    landscape: 'Landscape',
    vertical: 'Vertical',
    square: 'Square',
    caroussel: 'Caroussel',
    custom: 'Custom'
  }
  return (
    <View>
      <Text style={styles.listText}>Creatives</Text>
      <View style={styles.containerRow}>
        <View>
          <Pressable
            style={selectedCreative == CreativesEnum.landscape ? styles.button : styles.buttonUnpressed}
            onPress={() => setSelectedCreative(CreativesEnum.landscape)}
          >
            <Text style={selectedCreative == CreativesEnum.landscape ? styles.text : styles.textUnpressed}>
              {CreativesEnum.landscape}
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={selectedCreative == CreativesEnum.vertical ? styles.button : styles.buttonUnpressed}
            onPress={() => setSelectedCreative(CreativesEnum.vertical)}
          >
            <Text style={selectedCreative == CreativesEnum.vertical ? styles.text : styles.textUnpressed}>
              {CreativesEnum.vertical}
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={selectedCreative == CreativesEnum.square ? styles.button : styles.buttonUnpressed}
            onPress={() => setSelectedCreative(CreativesEnum.square)}
          >
            <Text style={selectedCreative == CreativesEnum.square ? styles.text : styles.textUnpressed}>
              {CreativesEnum.square}
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={selectedCreative == CreativesEnum.caroussel ? styles.button : styles.buttonUnpressed}
            onPress={() => setSelectedCreative(CreativesEnum.caroussel)}
          >
            <Text style={selectedCreative == CreativesEnum.caroussel ? styles.text : styles.textUnpressed}>
              {CreativesEnum.caroussel}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Pressable
            style={selectedCreative == CreativesEnum.custom ? styles.button : styles.buttonUnpressed}
            onPress={() => {
              setSelectedCreative(CreativesEnum.custom), setModalVisible(true)
            }}
          >
            <Text style={selectedCreative == CreativesEnum.custom ? styles.text : styles.textUnpressed}>
              {CreativesEnum.custom}
            </Text>
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
