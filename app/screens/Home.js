import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import AppFlatList from "../components/AppFlatList";
import ImageListItem from "../components/ImageListItem";
import ImageWithTitle from "../components/ImageWithTitle";
import ImageWithDescription from "../components/ImageWithDescription";
import ScreenHeader from "../components/ScreenHeader";
import { Heading5, Label13, Label20, Label14 } from "../components/AppText";
import TextInput from "../components/TextInput";
import theme from "../config/theme";

const Home = () => {
  const [state, setstate] = useState("");
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />
        <View>
          <View style={{ paddingHorizontal: wp(4) }}>
            <ScreenHeader cart={true} title="Good Morning" userName="Sameer" />
            <Label13>Delivering to</Label13>
            <Heading5>Current Location</Heading5>
            <View style={{ marginVertical: wp(3) }}>
              <TextInput
                Icon={
                  <Ionicons
                    name={"ios-search-sharp"}
                    size={wp(6)}
                    color={theme.custom.gray}
                    style={styles.searchIcon}
                  />
                }
                autoCapitalize="none"
                name="search"
                placeholder="Search food"
              />
            </View>
          </View>

          <View>
            <AppFlatList
              horizontal={true}
              Component={<ImageWithTitle horizontal={true} />}
            />
          </View>
          <View>
            <View style={styles.restaurentsHeader}>
              <Label20>Popular Restaurents</Label20>
              <Label14 style={{ color: theme.custom.orange }}>View all</Label14>
            </View>
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
          <View>
            <View style={styles.restaurentsHeader}>
              <Label20>Most Popular</Label20>
              <Label14 style={{ color: theme.custom.orange }}>View all</Label14>
            </View>
            <AppFlatList
              horizontal={true}
              Component={
                <ImageListItem
                  horizontal={true}
                  title="Minute by tuk tuk"
                  isLiked={true}
                  rating="4.9"
                  name="Cafe"
                  category="Western Food"
                />
              }
            />
          </View>
          <View>
            <View style={styles.restaurentsHeader}>
              <Label20>Recent Items</Label20>
              <Label14 style={{ color: theme.custom.orange }}>View all</Label14>
            </View>
            <View style={{ paddingHorizontal: wp(4) }}>
              {[1, 2, 3].map((i) => (
                <ImageWithDescription key={i} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: wp(3),
    marginLeft: wp(2),
  },
  restaurentsHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    paddingVertical: wp(6),
  },
});
