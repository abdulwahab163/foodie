import React from "react";
import { SwipeablePanel } from "rn-swipeable-panel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import theme from "../config/theme";

function AppSwipeablePanel({
  isPanelActive,
  styles,
  barStyles,
  closeRootStyles,
  panelProps,
  children,
}) {
  return (
    <SwipeablePanel
      style={{
        height: wp(118),
        backgroundColor: theme.custom.white,
        ...styles,
      }}
      barStyle={{ width: 100, ...barStyles }}
      closeRootStyle={{
        backgroundColor: theme.custom.gray,
        marginTop: -5,
        ...closeRootStyles,
      }}
      {...panelProps}
      isActive={isPanelActive}
    >
      {children}
    </SwipeablePanel>
  );
}

export default AppSwipeablePanel;
