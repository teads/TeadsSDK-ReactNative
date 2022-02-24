import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const ListCreatives = () => {
  return (
    <View>
      <Text style={styles.listText}>Creatives</Text>
      <View style={styles.containerRow}>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Afficher pub Native sur nouvelle vue")}
          >
            <Text style={styles.text}>Landscape</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Afficher pub Native sur nouvelle vue")}
          >
            <Text style={styles.text}>Vertical</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Afficher pub Native sur nouvelle vue")}
          >
            <Text style={styles.text}>Square</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Afficher pub Native sur nouvelle vue")}
          >
            <Text style={styles.text}>Caroussel</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Afficher pub Native sur nouvelle vue")}
          >
            <Text style={styles.text}>Custom</Text>
          </Pressable>
        </View>
      </View>
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
    paddingHorizontal: 32,
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
