import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { CreditCardInput } from "react-native-credit-card-input";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import ScreenHeader from "../components/ScreenHeader";
import theme from "../config/theme";
import Divider from "../components/Divider";
import { Label14 } from "../components/AppText";
import Button from "../components/Button";
import SwipeablePanel from "../components/SwipeablePanel";

function PaymentDetails({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onPressCloseButton: () => {
      setIsPanelActive(false);
      setIsCardValid(false);
    },
    onClose: () => {
      setIsPanelActive(false);
      setIsCardValid(false);
    },
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);
  const [cardData, setCardData] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCardChange = (e) => {
    if (e.valid) {
      setIsCardValid(true);
      setCardData(e.values);
    } else if (!e.valid) {
      setIsCardValid(false);
    }
  };

  useEffect(() => {
    setIsCardValid(false);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />
        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader
            title="Payment Details"
            navIcon={true}
            onNavIconPress={handleBack}
          />
          <Label14 style={{ fontWeight: "bold", marginTop: wp(3) }}>
            Customize your payment method
          </Label14>
          <Divider styles={styles.divider} />
          <Button
            Icon={
              <Ionicons
                name="md-add"
                size={22}
                color={theme.custom.white}
                style={{ marginRight: wp(2) }}
              />
            }
            _styles={{ paddingVertical: wp(3.5) }}
            title="Add Another Credit/Debit Card"
            bgColor={theme.custom.orange}
            onPress={() => setIsPanelActive(true)}
          />
        </View>
      </ScrollView>
      <View>
        <SwipeablePanel
          styles={{ height: wp(140) }}
          panelProps={panelProps}
          isPanelActive={isPanelActive}
        >
          {!fontsLoaded ? (
            <View>
              <Label14>Loading Google Fonts</Label14>
            </View>
          ) : (
            <View style={styles.panelContent}>
              <Label14 style={{ fontWeight: "bold" }}>
                Add Credit/Debit Card
              </Label14>
              <Divider styles={styles.divider} />

              <CreditCardInput
                cardFontFamily={"Inter_900Black"}
                onChange={(e) => handleCardChange(e)}
              />
              <View style={styles.btnContainer}></View>
              <Button
                disabled={!isCardValid}
                _styles={{ paddingVertical: wp(4) }}
                title="Add Card"
                bgColor={theme.custom.orange}
              />
            </View>
          )}
        </SwipeablePanel>
      </View>
    </SafeAreaView>
  );
}

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
  divider: {
    marginVertical: wp(4),
    backgroundColor: theme.custom.black,
    borderWidth: 0.2,
  },
  panelContent: {
    paddingHorizontal: wp(5),
  },
  btnContainer: {
    paddingVertical: wp(1),
  },
});
