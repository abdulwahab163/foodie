import React from "react";
import { StyleSheet } from "react-native";
import { getFontSize } from "../AppText";

import Text from "../Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: getFontSize(13),
    alignSelf: "flex-start",
  },
});

export default ErrorMessage;
