import React from "react";
import { Text, View, Pressable } from "react-native";
import ModalCustom from "../components/ModalCustom";
import styles from "../styles/styles";

const ListCreatives = ({
  pid,
  onChangePid,
  modalVisible,
  setModalVisible,
  selectedCreative,
  setSelectedCreative,
}) => {
  const CreativesEnum = {
    custom: "Custom",
  };
  const creativeTypes = ["Landscape", "Vertical", "Square", "Caroussel"];

  const list = () => {
    return creativeTypes.map((creativeType) => {
      return (
        <View key={creativeType}>
          <Pressable
            style={
              selectedCreative == creativeType
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => setSelectedCreative(creativeType)}
          >
            <Text
              style={
                selectedCreative == creativeType
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              {creativeType}
            </Text>
          </Pressable>
        </View>
      );
    });
  };

  return (
    <View>
      <Text style={styles.listText}>Creatives</Text>
      <View style={styles.containerRow}>{list()}</View>

      <View style={styles.containerRow}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Pressable
            style={
              selectedCreative == CreativesEnum.custom
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => {
              setSelectedCreative(CreativesEnum.custom), setModalVisible(true);
            }}
          >
            <Text
              style={
                selectedCreative == CreativesEnum.custom
                  ? styles.text
                  : styles.textUnpressed
              }
            >
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
  );
};

export default ListCreatives;
