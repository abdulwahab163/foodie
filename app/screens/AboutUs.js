import React from "react";
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

import theme from "../config/theme";
import ScreenHeader from "../components/ScreenHeader";
import { Label14, Label10 } from "./../components/AppText";

const list = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    message:
      "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function AboutUs({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.mainContainer}>
          <ScreenHeader
            title="About Us"
            navIcon={true}
            onNavIconPress={handleBack}
          />
          {list.map((item, index) => (
            <View key={item + index} style={styles.textContainer}>
              <Label10 style={styles.dot}>&bull;</Label10>

              <Label14 style={styles.text}>{item.message}</Label14>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mainContainer: { paddingHorizontal: wp(4) },
  dot: {
    color: theme.custom.orange,
    marginRight: wp(2),
    fontWeight: "bold",
    fontSize: wp(5),
  },
  textContainer: {
    flexDirection: "row",
    paddingBottom: wp(4),
  },
  text: {
    lineHeight: wp(5),
    marginTop: wp(1),
    marginRight: wp(3),
    flex: 1,
    flexWrap: "wrap",
  },
});