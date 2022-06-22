import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import theme from "../config/theme";

function NavHomeButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{ zIndex: 300 }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: focused ? theme.custom.orange : theme.custom.gray,
          },
        ]}
      >
        <Ionicons name="home-sharp" color={theme.custom.white} size={26} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(13),
    bottom: wp(-3),
    height: wp(15),
    width: wp(15),
  },
});

export default NavHomeButton;
