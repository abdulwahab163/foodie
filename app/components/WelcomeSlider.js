import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Label14, Label32 } from "./AppText";
import theme from "../config/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { storeData, keys } from "./../helpers//AsyncStorage";

const slides = [
  {
    key: "1",
    image: require("./../assets/find-food-you-love.png"),
    title: "Find Food You Love",
    text: "Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep",
  },
  {
    key: "2",
    title: "Fast Delivery",
    text: "Fast food delivery to your home, office wherever you are",
    image: require("./../assets/delivery-vector.png"),
  },
  {
    key: "3",
    image: require("./../assets/live-tracking-vector.png"),
    title: "Live Tracking",
    text: "Real time tracking of your food on the app once you placed the order",
  },
];

function WelcomeSlider() {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={item.image}
          resizeMode={"contain"}
        />
        <Label32 style={styles.title}>{item.title}</Label32>
        <Label14 style={styles.text}>{item.text}</Label14>
      </View>
    );
  };
  const _renderNextButton = () => (
    <TouchableOpacity
      style={[
        styles.sliderButton,
        {
          backgroundColor: theme.custom.orange,
        },
      ]}
    >
      <Text style={styles.next}>Next</Text>
    </TouchableOpacity>
  );

  const _renderDoneButton = () => (
    <TouchableOpacity
      style={[
        styles.sliderButton,
        {
          backgroundColor: theme.custom.light_pink,
        },
      ]}
    >
      <Text style={styles.done}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <AppIntroSlider
      activeDotStyle={{
        backgroundColor: theme.custom.orange,
      }}
      renderItem={_renderItem}
      data={slides}
      bottomButton={true}
      onDone={() => {
        storeData(keys.firstLoad, false);
      }}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
    />
  );
}

export default WelcomeSlider;

const styles = StyleSheet.create({
  slide: {
    display: "flex",
    alignItems: "center",
    padding: wp(8),
  },
  image: {
    height: hp(42),
    width: hp(40),
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  title: {
    textAlign: "center",
    marginTop: hp(2),
    marginBottom: hp(5),
  },
  text: {
    marginBottom: hp(8),
    textAlign: "center",
  },
  sliderButton: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  next: {
    color: theme.custom.white,
    fontWeight: "bold",
  },
  done: {
    color: theme.custom.white,
    fontWeight: "bold",
  },
});
