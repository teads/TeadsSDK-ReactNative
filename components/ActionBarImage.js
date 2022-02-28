import React from "react";
import { View, Image } from "react-native";

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 70, height: 30, resizeMode: "cover" }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

export default ActionBarImage;
