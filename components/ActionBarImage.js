import React from "react";
import { View, Image } from "react-native";

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 150, height: 30, resizeMode: "cover" }}
        source={require("../assets/Teads-Sample-App.imageset/Teads-Sample-App-black.png")}
      />
    </View>
  );
};

export default ActionBarImage;
