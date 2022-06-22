import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import theme from "../config/theme";
import ScreenHeader from "../components/ScreenHeader";
import TextInput from "../components/TextInput";
import MenuItem from "../components/MenuItem";
import routes from "../navigation/routes";

export default SubMenu = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={styles.headerContainer}>
          <ScreenHeader
            cart={true}
            title="Desserts"
            navIcon={true}
            onNavIconPress={() => navigation.goBack()}
          />

          <View style={styles.inputContainer}>
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
        <View style={styles.menuListContainer}>
          {[1, 2, 3].map((i) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate(routes.MENUDETAILS)}
            >
              <MenuItem
                textColor={theme.custom.white}
                title="Minute by tuk tuk"
                isLiked={true}
                rating="4.9"
                totalRatings="394"
                name="Cafe"
                category="Western Food"
              />
            </TouchableOpacity>
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
  searchIcon: {
    marginRight: wp(3),
    marginLeft: wp(2),
  },
  headerContainer: { paddingHorizontal: wp(4) },
  inputContainer: { marginVertical: wp(1) },
  menuListContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
  },
});
