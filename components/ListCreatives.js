import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ModalCustom from "../components/ModalCustom";

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

  const listCreatives = () => {
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
      <View style={styles.containerRow}>{listCreatives()}</View>

      {/*custom component */}
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

const styles = StyleSheet.create({
  listText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: "#0818B3",
  },
  buttonUnpressed: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: "white",
    borderColor: "#0818B3",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
  },
  textUnpressed: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#0818B3",
  },
  containerRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    paddingBottom: 10,
    alignContent: "space-around",
  },
});

export default ListCreatives;
