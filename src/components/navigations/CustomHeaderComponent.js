import React from "react";

import { Platform, View } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

const CustomHeaderComponent = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <LinearGradient colors={["#3F51B5", "#303F9F"]}>
        <Header {...props} />
      </LinearGradient>
    </View>
  );
};

export default CustomHeaderComponent;
