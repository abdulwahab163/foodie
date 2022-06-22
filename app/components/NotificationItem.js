import React from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import theme from "../config/theme";
import { Label11, Label15, Label9, Label10 } from "./AppText";

function NotificationItem({ title, subTitle, bodySubText, bgColor }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: bgColor ? bgColor : theme.custom.white,
        paddingBottom: wp(4),
      }}
    >
      <View style={{ width: wp(10), marginLeft: wp(4) }}>
        <Label10
          style={{
            color: theme.custom.orange,
            fontWeight: "bold",
            fontSize: wp(10),
          }}
        >
          &bull;
        </Label10>
      </View>
      <View style={{ flex: 1, marginTop: wp(4), marginRight: wp(4) }}>
        <Label15 numberOfLines={1}>{title}</Label15>
        {subTitle && <Label11 numberOfLines={1}>{subTitle} </Label11>}
        {bodySubText && <Label9>{bodySubText}</Label9>}
      </View>
    </View>
  );
}

export default NotificationItem;
