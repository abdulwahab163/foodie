import { Platform } from "react-native";

import theme from "./theme";

export default {
  text: {
    color: theme.custom.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "100%",
  },
};
