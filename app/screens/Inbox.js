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

import ScreenHeader from "../components/ScreenHeader";
import NotificationItem from "../components/NotificationItem";

const MessageList = [
  {
    key: "1",
    title: "MealMonkey Promotions",
    subTitle: "Your orders has been picked up",
    bodySubText: "Now",
  },
  {
    key: "2",
    title: "MealMonkey Promotions",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bodySubText: "1h ago",
  },
  {
    key: "3",
    title: "MealMonkey Promotions",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bodySubText: "5h ago",
  },
  {
    key: "4",
    title: "MealMonkey Promotions",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bodySubText: "12 Aug 2020",
  },
  {
    key: "5",
    title: "MealMonkey Promotions",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bodySubText: "25 Jul 2020",
  },
];

function Inbox({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
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
            title="Inbox"
            navIcon={true}
            onNavIconPress={handleBack}
          />
          {MessageList.map((item, index) => (
            <NotificationItem
              key={item.key + index}
              bgColor={index % 2 != 0 && "#f2f2f2"}
              title={item.title}
              subTitle={item.subTitle}
              bodySubText={item.bodySubText}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
});