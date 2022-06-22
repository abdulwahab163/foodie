import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

import routes from "../navigation/routes";
import ScreenHeader from "../components/ScreenHeader";
import ListItemWithImages from "../components/ListItemWithImages";

const listItems = [
  {
    key: "1",
    title: "Payment Details",
    IconFrom: <FontAwesome5 name="hand-holding-usd" size={24} />,
  },
  {
    key: "2",
    title: "My Orders",
    IconFrom: <MaterialIcons name="shopping-bag" size={24} />,
  },
  {
    key: "3",
    title: "Notification",
    IconFrom: <Ionicons name="notifications" size={24} />,
  },
  {
    key: "4",
    title: "Inbox",
    IconFrom: <Foundation name="mail" size={24} />,
  },
  {
    key: "5",
    title: "About Us",
    IconFrom: <Entypo name="info" size={24} />,
  },
];

export default More = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader cart={true} title="More" />
          {listItems.map((item) => (
            <ListItemWithImages
              key={item.key}
              listTitle={item.title}
              titleFontWeight="300"
              LeftIcon={item.IconFrom}
              onPress={() => navigation.navigate(item.title)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },

  formContainer: {
    marginVertical: wp(5),
    alignItems: "center",
    width: "100%",
    paddingBottom: wp(7),
  },
  signupText: {
    fontWeight: "bold",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  icon: {
    marginRight: 10,
  },
});
