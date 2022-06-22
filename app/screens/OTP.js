import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { Heading3, Label13, Label14, getFontSize } from "../components/AppText";
import Button from "../components/Button";

import theme from "../config/theme";

function OTPScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Heading3 style={styles.otpText}>
        We have sent an OTP to your Mobile
      </Heading3>
      <Label14 style={styles.subText}>
        Please check your mobile number +333*****00 continue to reset your
        password
      </Label14>

      <Button
        title="Next"
        fontSize={getFontSize(18)}
        bgColor={theme.custom.orange}
        onPress={() => navigation.navigate(routes.NEW_PASSWORD)}
      />

      <Label13 style={styles.clickHere}>
        Didn't Receive?&nbsp;
        <Label13 style={{ color: theme.custom.orange }}>Click Here</Label13>
      </Label13>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    width: "100%",
  },
  container1: {
    alignItems: "center",
    width: "100%",
  },
  otpText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  subText: {
    color: theme.text.secondaryLabel,
    textAlign: "center",
    marginBottom: wp(6),
  },
  clickHere: {
    marginTop: hp(2),
    color: theme.custom.gray,
    textAlign: "center",
  },
});

export default OTPScreen;
