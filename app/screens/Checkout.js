import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { CreditCardInput } from "react-native-credit-card-input";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import ScreenHeader from "../components/ScreenHeader";
import theme from "../config/theme";
import Divider from "../components/Divider";
import {
  Label12,
  Label13,
  Label14,
  Label15,
  Label22,
} from "../components/AppText";
import Button from "../components/Button";
import SwipeablePanel from "../components/SwipeablePanel";
import OrderRow from "../components/OrderRow";
import routes from "../navigation/routes";

function Checkout({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [addCardProps, setAddCardProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsAddCardPanelActive(false),
    onPressCloseButton: () => setIsAddCardPanelActive(false),
  });
  const [thankyouCardProps, setThankyouCardProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsThankyouPanelActive(false),
    onPressCloseButton: () => setIsThankyouPanelActive(false),
  });
  const [isAddCardPanelActive, setIsAddCardPanelActive] = useState(false);
  const [isThankyouPanelActive, setIsThankyouPanelActive] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);
  const [cardData, setCardData] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCardChange = (e) => {
    if (e.valid) {
      setIsCardValid(true);
      setCardData(e.values);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader
            title="Checkout"
            navIcon={true}
            onNavIconPress={handleBack}
          />
          <Label12
            style={{
              marginTop: wp(3),
            }}
          >
            Delivery Address
          </Label12>
          <View style={styles.addressContainer}>
            <Label14 style={{ fontWeight: "bold", maxWidth: wp(55) }}>
              653 Nostrand avenue Brooklyn,NY 11216
            </Label14>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.ADDRESS)}
            >
              <Label12
                style={{ fontWeight: "bold", color: theme.custom.orange }}
              >
                Change
              </Label12>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.seperator}></View>
        {/* payment method container */}
        <View style={styles.paymentConatiner}>
          <OrderRow
            leftItem="Payment Method"
            leftItemStyles={{ fontWeight: "400" }}
            rightItem="Add Card"
            rightItemStyles={{
              fontWeight: "bold",
              color: theme.custom.orange,
            }}
            onRightItemPess={() => setIsAddCardPanelActive(true)}
            Icon={
              <Entypo
                style={{ fontWeight: "bold", marginRight: wp(1) }}
                name="plus"
                size={14}
                color={theme.custom.orange}
              />
            }
          />
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.billContainer}>
          <OrderRow
            leftItem="Sub Total"
            rightItem="$68"
            leftItemStyles={{ fontWeight: "400" }}
            rightItemStyles={{ fontWeight: "400" }}
            containerStyles={styles.orderRow}
          />
          <OrderRow
            leftItem="Delivery Cost"
            rightItem="$2"
            leftItemStyles={{ fontWeight: "400" }}
            rightItemStyles={{ fontWeight: "400" }}
            containerStyles={styles.orderRow}
          />
          <OrderRow
            leftItem="Discount"
            rightItem="-$4"
            leftItemStyles={{ fontWeight: "400" }}
            rightItemStyles={{ fontWeight: "400" }}
          />
          <Divider styles={styles.divider} />
          <OrderRow
            leftItem="Total"
            rightItem="$66"
            rightItemStyles={{ color: theme.custom.orange }}
          />
        </View>
        <View style={styles.seperator}></View>
        <View style={{ paddingHorizontal: wp(4) }}>
          <Button
            _styles={{ paddingVertical: wp(4), marginVertical: wp(5) }}
            title="Confirm Order"
            bgColor={theme.custom.orange}
            onPress={() => setIsThankyouPanelActive(true)}
          />
        </View>
      </ScrollView>
      <View>
        <SwipeablePanel
          styles={styles.panel}
          panelProps={addCardProps}
          isPanelActive={isAddCardPanelActive}
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
              <View style={styles.btnContainer}>
                <Button
                  disabled={!isCardValid}
                  _styles={{ paddingVertical: wp(4) }}
                  title="Add Card"
                  bgColor={theme.custom.orange}
                />
              </View>
            </View>
          )}
        </SwipeablePanel>
      </View>
      <View>
        <SwipeablePanel
          styles={styles.panel}
          panelProps={thankyouCardProps}
          isPanelActive={isThankyouPanelActive}
        >
          <View style={styles.thankyouPanelContent}>
            <View style={styles.thankyouImage}>
              <Image
                resizeMode="contain"
                source={require("./../assets/thankyou.png")}
              />
            </View>
            <Label22 style={{ fontWeight: "bold", marginBottom: wp(2) }}>
              Thank You!
            </Label22>
            <Label15 style={{ fontWeight: "500", marginBottom: wp(2) }}>
              for your order
            </Label15>
            <Label14
              style={{
                textAlign: "center",
                maxWidth: wp(85),
                marginBottom: wp(2),
              }}
            >
              Your order is being processed. We will let you know once the order
              is picked form the outlet.
            </Label14>
            <Label14 style={{ marginBottom: wp(5) }}>
              Check the status of your order
            </Label14>
            <Button
              _styles={{ paddingVertical: wp(3.5) }}
              title="Track My Order"
              bgColor={theme.custom.orange}
            />
            <Label13 style={styles.homeRow}>Back To Home</Label13>
          </View>
        </SwipeablePanel>
      </View>
    </SafeAreaView>
  );
}

export default Checkout;

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
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: wp(3),
  },
  panelContent: {
    paddingHorizontal: wp(5),
    marginTop: wp(2),
  },
  thankyouPanelContent: {
    paddingHorizontal: wp(5),
    marginTop: wp(2),
    alignItems: "center",
  },
  billContainer: {
    marginVertical: wp(4),
    paddingHorizontal: wp(4),
  },
  orderRow: {
    marginBottom: wp(3),
  },
  paymentConatiner: {
    paddingHorizontal: wp(4),
  },
  panel: { height: wp(146) },
  homeRow: { fontWeight: "bold", marginTop: wp(2) },
  thankyouImage: {
    display: "flex",
    alignItems: "center",
    marginBottom: wp(4),
  },
  seperator: {
    height: wp(3),
    backgroundColor: theme.custom.light_grey,
  },
  btnContainer: {
    paddingVertical: wp(1),
  },
});
