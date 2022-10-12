import React from 'react'
import { Text, View, Pressable, Modal, TextInput } from 'react-native'
import styles from '../styles/styles'

export default function ModalCustom({ modalVisible, setModalVisible, pid, onChangePid }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredViewModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter your custom pid</Text>
            <TextInput style={styles.input} onChangeText={onChangePid} value={pid} />
            <Pressable style={styles.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}
