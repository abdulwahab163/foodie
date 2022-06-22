import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Label12 } from "../components/AppText";

function OrderRow({
  leftItem,
  leftItemStyles,
  rightItem,
  rightItemStyles,
  containerStyles,
  onRightItemPess,
  Icon,
}) {
  return (
    <View style={[styles.orderItemContainer, { ...containerStyles }]}>
      {leftItem && (
        <Label12 style={{ fontWeight: "bold", ...leftItemStyles }}>
          {leftItem}
        </Label12>
      )}
      {!onRightItemPess && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {Icon && Icon}
          {rightItem && (
            <Label12 style={{ fontWeight: "bold", ...rightItemStyles }}>
              {rightItem}
            </Label12>
          )}
        </View>
      )}
      {onRightItemPess && (
        <TouchableOpacity onPress={onRightItemPess}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {Icon && Icon}
            {rightItem && (
              <Label12 style={{ fontWeight: "bold", ...rightItemStyles }}>
                {rightItem}
              </Label12>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
export default OrderRow;

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
