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

import NotificationItem from "../components/NotificationItem";
import ScreenHeader from "../components/ScreenHeader";

const NotificationList = [
  { key: "1", title: "Your orders has been picked up", subTitle: "Now" },
  { key: "2", title: "Your order has been delivered", subTitle: "1h ago" },
  {
    key: "3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subTitle: "5h ago",
  },
  {
    key: "4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subTitle: "12 Aug 2020",
  },
  {
    key: "5",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subTitle: "25 Jul 2020",
  },
];

function Notification({ navigation }) {
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
            title="Notifications"
            navIcon={true}
            onNavIconPress={handleBack}
          />
        </View>
        {NotificationList.map((item, index) => (
          <NotificationItem
            key={item.key + index}
            bgColor={index % 2 != 0 && "#f2f2f2"}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
});