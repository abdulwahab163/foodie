import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import theme from "../config/theme";
import { getFontSize } from "./AppText";

function AppButton({
  title,
  onPress,
  bgColor,
  fontSize = getFontSize(12),
  Icon,
  textColor = theme.custom.white,
  border,
  width,
  disabled,
  height,
  _styles,
}) {
  return (
    <>
      {!disabled ? (
        <TouchableOpacity
          style={[
            styles.button,

            {
              width: width ? width : "100%",
              borderColor: border ? border : "",
              borderWidth: border ? 1 : 0,
              backgroundColor: border ? "tranparent" : bgColor,
            },
            { ..._styles },
          ]}
          onPress={onPress}
        >
          {Icon && Icon}
          <Text style={[styles.text, { fontSize, color: textColor }]}>
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.button,

            {
              width: width ? width : "100%",
              borderColor: border ? border : "",
              borderWidth: border ? 1 : 0,
              backgroundColor: border ? "tranparent" : theme.custom.gray,
            },
            { ..._styles },
          ]}
          onPress={onPress}
        >
          {Icon && Icon}
          <Text
            style={[styles.text, { fontSize, color: theme.custom.light_grey }]}
          >
            {title}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.custom.white,
    fontWeight: "bold",
  },
});

export default AppButton;
