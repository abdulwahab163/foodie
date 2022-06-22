import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import theme from "../config/theme";
import ProductHeading from "./ProductHeading";

function MenuItem({
  textColor,
  title,
  isLiked,
  rating,
  totalRatings,
  name,
  category,
}) {
  return (
    <View style={{ flex: 1, marginBottom: wp(1) }}>
      <ImageBackground
        source={require("./../assets/brownies.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ paddingLeft: wp(4), position: "absolute", top: wp(25) }}>
          <ProductHeading
            textColor={textColor}
            title={title}
            isLiked={isLiked}
            rating={rating}
            totalRatings={totalRatings}
            name={name}
            category={category}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: hp(22),
    width: "100%",
    justifyContent: "center",
  },
});
