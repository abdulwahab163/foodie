import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { Label22, Label20, Label12 } from "../components/AppText";

function ScreenHeader({
  title,
  userName,
  subtitle,
  navIcon,
  onNavIconPress,
  cart,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.firstRowContainer}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {navIcon && (
            <TouchableOpacity onPress={() => onNavIconPress()}>
              <AntDesign
                style={{ marginRight: wp(3.5) }}
                name="left"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          )}
          {title && <Label20>{title}</Label20>}
          {userName && (
            <Label22
              style={{ marginLeft: wp(2), fontWeight: "bold" }}
            >{`${userName}!`}</Label22>
          )}
        </View>
        {cart && (
          <View style={{ width: wp(5.5) }}>
            <Ionicons name="cart" size={25} color="black" />
          </View>
        )}
      </View>
      {subtitle && (
        <Label12 style={{ marginVertical: wp(3) }}>{subtitle}</Label12>
      )}
    </View>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(4),
  },
  firstRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
