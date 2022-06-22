import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import { Label10, Label14 } from "./AppText";
import theme from "../config/theme";

function ProductHeading({
  horizontal,
  textColor,
  title,
  rating,
  name,
  isLiked,
  category,
  totalRatings,
}) {
  return (
    <View>
      <Label14
        style={{
          fontWeight: "bold",
          marginBottom: wp(0.6),
          color: textColor ? textColor : theme.custom.black,
        }}
      >
        {title}
      </Label14>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          name={isLiked ? "star" : "staro"}
          size={14}
          color={theme.custom.orange}
        />
        <Label10 style={{ marginLeft: wp(0.5), color: theme.custom.orange }}>
          {rating}
        </Label10>
        {!horizontal && (
          <Label10
            style={{
              marginLeft: wp(0.5),
              color: textColor ? textColor : theme.custom.black,
            }}
          >
            {`(${totalRatings} ratings)`}
          </Label10>
        )}
        <Label10
          style={{
            marginLeft: wp(0.5),
            color: textColor ? textColor : theme.custom.black,
          }}
        >
          {name}
        </Label10>
        <Label10 style={styles.dot}>&bull;</Label10>
        <Label10 style={{ color: textColor ? textColor : theme.custom.black }}>
          {category}
        </Label10>
      </View>
    </View>
  );
}

export default ProductHeading;

const styles = StyleSheet.create({
  dot: {
    color: theme.custom.orange,
    fontWeight: "bold",
    fontSize: wp(4),
    marginHorizontal: wp(1.5),
  },
});
