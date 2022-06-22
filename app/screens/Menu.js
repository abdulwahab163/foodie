import React from "react";
import { SafeAreaView, StatusBar, View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import theme from "../config/theme";
import ScreenHeader from "../components/ScreenHeader";
import TextInput from "../components/TextInput";
import ListItemWithImages from "../components/ListItemWithImages";
import routes from "../navigation/routes";

const menuItems = [
  { key: "1", title: "Food", subTitle: "120 items" },
  { key: "2", title: "Beverages", subTitle: "270 items" },
  { key: "3", title: "Desserts", subTitle: "410 items" },
  { key: "4", title: "Promotions", subTitle: "280 items" },
];

function Menu({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={{ paddingHorizontal: wp(4) }}>
        <ScreenHeader cart={true} title="Menu" />

        <View style={{ marginVertical: wp(1) }}>
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
      <View style={{ flex: 1 }}>
        <View style={styles.sideBar}></View>
        <View style={styles.listContainer}>
          {menuItems.map((item, index) => (
            <ListItemWithImages
              key={index}
              listTitle={item.title}
              listSubTitle={item.subTitle}
              imageBorderRadius={index % 2 == 0 ? 20 : 50}
              rightIconColor={theme.custom.orange}
              onPress={() => {
                navigation.navigate(routes.SUBMENUSTACK);
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
  searchIcon: {
    marginRight: wp(3),
    marginLeft: wp(2),
  },

  sideBar: {
    height: hp(62),
    width: wp(25),
    backgroundColor: theme.custom.orange,
    borderTopRightRadius: wp(10),
    borderBottomRightRadius: wp(10),
  },
  listContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: wp(11),
  },
});
