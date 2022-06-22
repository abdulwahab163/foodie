import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Label10, Label14 } from "./AppText";
import theme from "../config/theme";

export default function ImageWithDescription({
  horizontal,
  resizeMode,
  address,
  image,
}) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: wp(20),
          width: wp(20),
          borderRadius: wp(4),
        }}
        resizeMode={resizeMode ? resizeMode : "cover"}
        source={image ? image : require("./../assets/clem.png")}
      />

      <View
        style={{
          flex: 1,
          paddingLeft: wp(5),
          paddingVertical: wp(1),
        }}
      >
        <Label14 style={{ fontWeight: "bold", marginBottom: wp(1) }}>
          Barita
        </Label14>

        <View
          style={{
            flexDirection: "row",
            marginBottom: wp(1),
            alignItems: "center",
          }}
        >
          <Label10 style={{ marginLeft: wp(0.5) }}>Cafe</Label10>
          <Label10 style={styles.dot}>&bull;</Label10>
          <Label10>Western Food</Label10>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: wp(1),
          }}
        >
          <AntDesign name="staro" size={14} color={theme.custom.orange} />
          <Label10 style={{ marginLeft: wp(0.5), color: theme.custom.orange }}>
            4.5
          </Label10>
          {!horizontal && (
            <Label10 style={{ marginLeft: wp(0.5) }}>(124 Ratings) </Label10>
          )}
        </View>
        {address && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="location-pin" size={14} color={theme.custom.orange} />
            <Label10>{address}</Label10>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: wp(1),
  },
  dot: {
    color: theme.custom.orange,
    fontWeight: "bold",
    fontSize: wp(4),
    marginHorizontal: wp(1.5),
  },
});
