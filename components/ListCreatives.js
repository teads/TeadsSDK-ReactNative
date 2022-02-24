import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ModalCustom from "../components/ModalCustom";

const ListCreatives = ({
  pid,
  onChangePid,
  modalVisible,
  setModalVisible,
  SelectedCreative,
  setSelectedCreative,
}) => {
  return (
    <View>
      <Text style={styles.listText}>Creatives</Text>
      <View style={styles.containerRow}>
        <View>
          <Pressable
            style={
              SelectedCreative == "Landscape"
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => setSelectedCreative("Landscape")}
          >
            <Text
              style={
                SelectedCreative == "Landscape"
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              Landscape
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={
              SelectedCreative == "Vertical"
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => setSelectedCreative("Vertical")}
          >
            <Text
              style={
                SelectedCreative == "Vertical"
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              Vertical
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={
              SelectedCreative == "Square"
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => setSelectedCreative("Square")}
          >
            <Text
              style={
                SelectedCreative == "Square"
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              Square
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={
              SelectedCreative == "Caroussel"
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => setSelectedCreative("Caroussel")}
          >
            <Text
              style={
                SelectedCreative == "Caroussel"
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              Caroussel
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Pressable
            style={
              SelectedCreative == "Custom"
                ? styles.button
                : styles.buttonUnpressed
            }
            onPress={() => {
              setSelectedCreative("Custom"), setModalVisible(true);
            }}
          >
            <Text
              style={
                SelectedCreative == "Custom"
                  ? styles.text
                  : styles.textUnpressed
              }
            >
              Custom
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
    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: "#0818B3",
  },
  buttonUnpressed: {
    alignItems: "stretch",
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
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    paddingBottom: 10,
  },
});

export default ListCreatives;
