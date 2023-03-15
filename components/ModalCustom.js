import React from 'react';
import { Text, View, Pressable, Modal, TextInput } from 'react-native';
import styleModalCustom from '../styles/styleModalCustom';

export default function ModalCustom({
  modalVisible,
  setModalVisible,
  pid,
  onChangePid,
}) {
  return (
    <View style={styleModalCustom.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styleModalCustom.centeredViewModal}>
          <View style={styleModalCustom.modalView}>
            <Text style={styleModalCustom.modalText}>
              Enter your custom pid
            </Text>
            <TextInput
              style={styleModalCustom.input}
              onChangeText={onChangePid}
              value={pid}
            />
            <Pressable
              style={styleModalCustom.buttonModal}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styleModalCustom.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
