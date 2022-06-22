import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import theme from "../config/theme";
import { Heading5, Label13 } from "../components/AppText";

function ListItemWithImages({
  imageBorderRadius,
  listTitle,
  listSubTitle,
  titleFontWeight,
  rightIconColor,
  LeftIcon,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width: LeftIcon ? "95%" : "103%",
          height: LeftIcon ? wp(18) : wp(21),
        },
      ]}
      onPress={onPress}
    >
      {!LeftIcon && (
        <View style={styles.leftImageContainer}>
          <Image
            style={[styles.leftImage, { borderRadius: imageBorderRadius }]}
            resizeMode={"cover"}
            source={require("./../assets/aurelien.png")}
          />
        </View>
      )}
      <View style={styles.cardContent}>
        <View style={{ flexDirection: LeftIcon ? "row" : "column" }}>
          {LeftIcon && <View style={styles.leftIcon}>{LeftIcon}</View>}

          <Heading5
            style={{
              marginLeft: LeftIcon ? wp(5) : wp(0),
              fontWeight: titleFontWeight ? titleFontWeight : "bold",
            }}
          >
            {listTitle}
          </Heading5>
        </View>
        {listSubTitle && <Label13>{listSubTitle}</Label13>}
      </View>
      <View style={styles.rightIconContainer}>
        <AntDesign
          style={styles.rightIcon}
          name="right"
          size={24}
          color={rightIconColor ? rightIconColor : theme.custom.black}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ListItemWithImages;

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: wp(6),
    borderBottomLeftRadius: wp(6),
    borderTopRightRadius: wp(3),
    borderBottomRightRadius: wp(3),
    marginTop: wp(5),
    backgroundColor: theme.custom.white,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
  },
  leftImageContainer: {
    justifyContent: "center",
    left: wp(-7),
    position: "absolute",
    height: 70,
    width: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    alignItems: "center",
  },
  leftImage: {
    height: "100%",
    width: "100%",
  },
  leftIcon: {
    height: wp(14),
    width: wp(14),
    borderRadius: wp(7),
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    left: wp(-13),
    top: wp(-4.5),
    position: "absolute",
  },
  rightIconContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    right: wp(-5),
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    alignItems: "center",
  },
  rightIcon: {
    fontWeight: "900",
  },

  cardContent: { paddingLeft: wp(18) },
});
