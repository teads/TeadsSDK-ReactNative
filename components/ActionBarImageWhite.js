import React from "react";
import { View, Image } from "react-native";

const ActionBarImageWhite = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 150, height: 30, resizeMode: "cover" }}
        source={require("../assets/Teads-Sample-App.imageset/Teads-Sample-App-white.png")}
      />
    </View>
  );
};

export default ActionBarImageWhite;
