import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Label14 } from "./AppText";

export default function ImageWithTitle({ horizontal, resizeMode }) {
  return (
    <View
      style={[styles.container, { marginLeft: horizontal ? wp(5) : hp(0) }]}
    >
      <Image
        style={{
          height: horizontal ? hp(15) : hp(30),
        }}
        resizeMode={resizeMode ? resizeMode : "contain"}
        source={require("./../assets/alireza.png")}
      />
      <Label14
        style={{
          fontWeight: "bold",
          marginBottom: wp(0.6),
        }}
      >
        Italian
      </Label14>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    marginBottom: wp(4),
  },
});
