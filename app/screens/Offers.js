import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import ScreenHeader from "../components/ScreenHeader";
import ImageListItem from "../components/ImageListItem";
import Button from "./../components/Button";
import theme from "../config/theme";

function Offers() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader
            cart={true}
            title="Latest Offers"
            subtitle="Find Discounts, Offers Special"
          />
          <View
            style={{ marginVertical: wp(3), width: hp(28), height: wp(15) }}
          >
            <Button title="Check Offers" bgColor={theme.custom.orange} />
          </View>
        </View>

        <View>
          {[1, 2, 3].map((i) => (
            <ImageListItem
              key={i}
              title="Minute by tuk tuk"
              isLiked={true}
              rating="4.9"
              totalRatings="394"
              name="Cafe"
              category="Western Food"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Offers;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
  },
});
