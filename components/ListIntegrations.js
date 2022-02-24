import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListIntegrations = (navigation, SelectedCreative) => {
  const test = SelectedCreative;
  return (
    <View>
      <Text style={styles.listText}>Integrations</Text>
      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Demo")}>
            <Image
              source={require("../assets/ScrollViewIcon.png")}
              style={styles.integrationsImages}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Demo")}>
            <Image
              source={require("../assets/RecyclerViewIcon.png")}
              style={styles.integrationsImages}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Demo")}>
            <Image
              source={require("../assets/RecyclerViewGridIcon.png")}
              style={styles.integrationsImages}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Demo")}>
            <Image
              source={require("../assets/WebviewIcon.png")}
              style={styles.integrationsImages}
            />
          </TouchableOpacity>
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
  integrationsItems: {
    flex: 0.49,
    borderWidth: 0.5,
    backgroundColor: "white",
    borderColor: "#A9BCD1",
    borderRadius: 10,
  },
  integrationsImages: { width: "100%", height: 150, resizeMode: "contain" },
});

export default ListIntegrations;
