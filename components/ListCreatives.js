import React from 'react'
import { Text, View, Pressable } from 'react-native'
import ModalCustom from '../components/ModalCustom'
import styleListCreatives from '../styles/styleListCreatives'
import { CREATIVETYPES, CUSTOM } from '../constants'

const ListCreatives = ({ pid, onChangePid, modalVisible, setModalVisible, selectedCreative, setSelectedCreative }) => {
  const listCreatives = () => {
    return CREATIVETYPES.map(creativeType => {
      return (
        <View key={creativeType}>
          <Pressable
            style={selectedCreative == creativeType ? styleListCreatives.button : styleListCreatives.buttonUnpressed}
            onPress={() => setSelectedCreative(creativeType)}
          >
            <Text style={selectedCreative == creativeType ? styleListCreatives.text : styleListCreatives.textUnpressed}>
              {creativeType}
            </Text>
          </Pressable>
        </View>
      )
    })
  }

  return (
    <View>
      <Text style={styleListCreatives.listText}>Creatives</Text>
      <View style={styleListCreatives.containerRow}>{listCreatives()}</View>

      <View style={styleListCreatives.containerRow}>
        <View style={styleListCreatives.centered}>
          <Pressable
            style={selectedCreative == CUSTOM ? styleListCreatives.button : styleListCreatives.buttonUnpressed}
            onPress={() => {
              setSelectedCreative(CUSTOM), setModalVisible(true)
            }}
          >
            <Text style={selectedCreative == CUSTOM ? styleListCreatives.text : styleListCreatives.textUnpressed}>
              {CUSTOM}
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
