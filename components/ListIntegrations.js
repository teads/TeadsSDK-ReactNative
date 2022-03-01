import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListIntegrations = ({ navigation }) => {
  function navigateToDemo(navigation) {
    return navigation.navigate("Demo");
  }

  return (
    <View>
      <Text style={styles.listText}>Integrations</Text>
      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image
                  source={require("../assets/ScrollView.imageset/ScrollView150.png")}
                  style={styles.integrationsImages}
                />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>ScrollView</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image
                  source={require("../assets/TableView.imageset/TableView150.png")}
                  style={styles.integrationsImages}
                />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>TableVie (w</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image
                  source={require("../assets/CollectionView.imageset/CollectionView150.png")}
                  style={styles.integrationsImages}
                />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>CollectionView</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.integrationsItems}>
          <TouchableOpacity onPress={() => navigateToDemo(navigation)}>
            <View style={styles.containerColumn}>
              <View style={styles.imageItems}>
                <Image
                  source={require("../assets/ScrollView.imageset/ScrollView150.png")}
                  style={styles.integrationsImages}
                />
              </View>
              <View style={styles.textItems}>
                <Text style={styles.textIntegrations}>WebView</Text>
              </View>
            </View>
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
  textIntegrations: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#A9BCD1",
  },
  containerRow: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  containerColumn: {
    flexDirection: "column",
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
  imageItems: {
    flex: 0.75,
    padding: 10,
  },
  textItems: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  integrationsImages: { width: "100%", height: 120, resizeMode: "contain" },
});

export default ListIntegrations;
