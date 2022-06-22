import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import theme from "../config/theme";

function AppTextInput({ Icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {Icon && Icon}
      <TextInput
        style={{ width }}
        placeholderTextColor={theme.custom.gray}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.text.inputBackground,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppTextInput;
