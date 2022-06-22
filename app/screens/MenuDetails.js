import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";

import theme from "../config/theme";
import {
  getFontSize,
  Label10,
  Label11,
  Label12,
  Label14,
  Label20,
  Label22,
} from "../components/AppText";
import SwipeablePanel from "../components/SwipeablePanel";
import Divider from "../components/Divider";
import Button from "../components/Button";

function MenuDetails({ navigation }) {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    onClose: () => {},
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ flex: 1, marginBottom: wp(1) }}>
        <ImageBackground
          source={require("./../assets/brownies.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.header}>
            <View style={styles.leftIconContainer}>
              <TouchableOpacity onPress={() => handleBack()}>
                <AntDesign
                  style={{ marginRight: wp(3.5) }}
                  name="left"
                  size={25}
                  color={theme.custom.white}
                />
              </TouchableOpacity>
              <Ionicons name="cart" size={25} color={theme.custom.white} />
            </View>
          </View>
        </ImageBackground>

        <View>
          <SwipeablePanel
            styles={styles.panel}
            panelProps={panelProps}
            isPanelActive={isPanelActive}
          >
            <View style={styles.panelContent}>
              <Label20>Tandoori Chicken Pizza</Label20>

              {/* Product Header Started */}
              <View style={styles.productHeader}>
                <View>
                  <View style={styles.ratingIconContainer}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <AntDesign
                        key={i}
                        name={i == 5 ? "staro" : "star"}
                        size={14}
                        color={theme.custom.orange}
                      />
                    ))}
                  </View>
                  <Label10 style={{ color: theme.custom.orange }}>
                    4 Star Ratings
                  </Label10>
                </View>
                <View style={styles.rateContainer}>
                  <Label22 style={styles.rate}>Rs. 750</Label22>
                  <Label10>/ per Portion</Label10>
                </View>
              </View>
              {/* Product Header Ended */}
              <Label14 style={{ fontWeight: "bold" }}>Description</Label14>
              <Label11 style={{ marginTop: wp(2) }}>
                Lorem ipsum dolor sit amet, consectetar adipactung omare icon
                non mollis ad cursis . eu eutomomnd moltis cauris Eu stomond
                facumactin leo malesuada.
              </Label11>
              <Divider styles={styles.divider} />
              <Label14 style={{ fontWeight: "bold" }}>
                Customize your Order
              </Label14>
              <View style={styles.dropDownContainer}>
                <ModalDropdown
                  style={styles.dropDown}
                  dropdownStyle={styles.dropdownItemStyles}
                  defaultValue="- Select the size of portion -"
                  options={["option 1", "option 2", "option 3", "option 4"]}
                ></ModalDropdown>
              </View>
              <View style={styles.dropDownContainer}>
                <ModalDropdown
                  style={styles.dropDown}
                  dropdownStyle={styles.dropdownItemStyles}
                  defaultValue="- Select the Ingredients -"
                  options={["option 1", "option 2", "option 3", "option 4"]}
                ></ModalDropdown>
              </View>
              <View style={styles.stepperRowContainer}>
                <Label14
                  style={styles.noPortion}
                >
                  Number of Portions
                </Label14>
                <View style={styles.steppersContainer}>
                  <Button
                    width={wp(15)}
                    _styles={{ paddingVertical: wp(2) }}
                    title="-"
                    bgColor={theme.custom.orange}
                  />
                  <View style={styles.counterContainer}>
                    <Label10
                      style={{
                        fontWeight: "bold",
                        color: theme.custom.orange,
                      }}
                    >
                      2
                    </Label10>
                  </View>
                  <Button
                    width={wp(15)}
                    _styles={{ paddingVertical: wp(2) }}
                    title="+"
                    bgColor={theme.custom.orange}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.sideBar}></View>
                <View
                  style={styles.cardContainer}
                >
                  <View
                    style={[
                      styles.card,
                      {
                        width: "108%",
                        height: wp(26),
                      },
                    ]}
                  >
                    <View style={styles.cardContent}>
                      <Label12>Total Price</Label12>
                      <Label20 style={{ fontWeight: "bold" }}>LKR 1500</Label20>
                      <Button
                        Icon={
                          <Ionicons
                            name="ios-cart"
                            size={18}
                            color={theme.custom.white}
                            style={{ marginRight: wp(3) }}
                          />
                        }
                        width={wp(45)}
                        _styles={{ paddingVertical: wp(2.5) }}
                        title="Add to Cart"
                        bgColor={theme.custom.orange}
                      />
                    </View>
                    <TouchableOpacity style={styles.rightIconContainer}>
                      <Ionicons
                        style={styles.rightIcon}
                        name="cart"
                        size={24}
                        color={theme.custom.orange}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </SwipeablePanel>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MenuDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
  header: { paddingLeft: wp(4), position: "absolute", top: wp(5) },
  image: {
    flex: 1,
    height: hp(35),
    width: "100%",
    justifyContent: "center",
  },
  panelContent: {
    paddingHorizontal: wp(5),
    marginTop: wp(2),
  },
  ratingIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: wp(1),
    width: wp(25),
  },
  divider: {
    marginVertical: wp(4),
    backgroundColor: theme.custom.black,
    borderWidth: 0.2,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  steppersContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterContainer: {
    width: wp(15),
    height: wp(7.4),
    color: theme.custom.orange,
    borderColor: theme.custom.orange,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
  sideBar: {
    height: hp(20),
    width: wp(25),
    backgroundColor: theme.custom.orange,
    borderTopRightRadius: wp(10),
    borderBottomRightRadius: wp(10),
    marginBottom: wp(7),
  },
  rightIconContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    right: wp(-5),
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    alignItems: "center",
  },
  rightIcon: {
    fontWeight: "900",
  },
  card: {
    borderTopLeftRadius: wp(6),
    borderBottomLeftRadius: wp(6),
    borderTopRightRadius: wp(3),
    borderBottomRightRadius: wp(3),
    marginTop: wp(5),
    backgroundColor: theme.custom.white,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  dropDown: {
    backgroundColor: theme.text.inputBackground,
    paddingVertical: wp(4),
    paddingHorizontal: wp(8.5),
    width: "100%",
    height: wp(12.3),
  },
  dropDownContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: wp(3),
  },
  stepperRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  panel: {
    height: wp(144),
  },
  leftIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "73%",
  },
  rateContainer: {
    marginTop: wp(3),
    alignItems: "flex-end",
  },
  rate: { fontWeight: "bold", fontSize: getFontSize(25) },
  dropdownItemStyles: {
    width: "70%",
    position: "relative",
    left: wp(-5),
  },
  noPortion: {
    fontWeight: "bold",
    marginRight: wp(6),
    width: wp(36),
  },
  cardContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: wp(11),
  },
});
