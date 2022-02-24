import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const ListFormats = () => {
  return (
    <View>
      {/* List Of Formats */}
      <Text style={styles.listText}>Formats</Text>
      <View style={styles.containerRow}>
        <View style={{ flex: 0.48 }}>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("setState to InRead")}
          >
            <Text style={styles.text}>InRead</Text>
          </Pressable>
        </View>

        <View style={{ flex: 0.48 }}>
          <Pressable
            style={styles.buttonUnpressed}
            onPress={() => Alert.alert("Available soon")}
          >
            <Text style={styles.textUnpressed}>Native</Text>
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

export default ListFormats;
