import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import { Label10, Label14 } from "./AppText";
import theme from "../config/theme";
import ProductHeading from "./ProductHeading";

export default function ImageListItem({
  horizontal,
  resizeMode,
  title,
  rating,
  name,
  isLiked,
  category,
  totalRatings,
}) {
  return (
    <View
      style={[styles.container, { marginLeft: horizontal ? wp(5) : hp(0) }]}
    >
      <Image
        style={{
          height: horizontal ? hp(20) : hp(30),
          width: horizontal ? wp(60) : "100%",
          borderRadius: horizontal ? wp(3) : 0,
        }}
        resizeMode={horizontal ? "cover" : "contain"}
        source={require("./../assets/aurelien.png")}
      />
      <View
        style={{
          paddingVertical: wp(0.5),
          paddingHorizontal: !horizontal ? wp(4) : 0,
        }}
      >
        <ProductHeading
          horizontal={horizontal}
          title={title}
          rating={rating}
          name={name}
          isLiked={isLiked}
          category={category}
          totalRatings={totalRatings}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginBottom: wp(4),
  },
  image: {
    height: wp(55),
    width: "100%",
  },
  dot: {
    color: theme.custom.orange,
    fontWeight: "bold",
    fontSize: wp(4),
    marginHorizontal: wp(1.5),
  },
});
