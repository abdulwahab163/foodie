import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Label14 } from "../components/AppText";
import Button from "../components/Button";
import theme from "../config/theme";
import routes from "../navigation/routes";

function Welcome({ navigation }) {
  return (
    <>
      <Image
        style={styles.image}
        source={require("./../assets/shaped-subtraction.png")}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("./../assets/Logo.png")}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Label14 style={styles.discoverText}>
          Discover the best foods from over 1,000 restaurants and fast delivery
          to your doorstep
        </Label14>
        <Button
          title="Login"
          bgColor={theme.custom.orange}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Create an Account"
          textColor={theme.custom.orange}
          border={theme.custom.orange}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 40,
    width: "100%",
  },
  discoverText: {
    textAlign: "center",
    color: theme.text.secondaryLabel,
    marginTop: hp(4),
    marginBottom: hp(6),
  },
  image: {
    height: hp(40),
    width: "100%",
    shadowColor: theme.custom.gray,
    shadowOffset: { height: 5 },
    shadowOpacity: 0.7,
  },
  logo: {
    width: hp(30),
    marginTop: wp(-18),
  },
});

export default Welcome;
