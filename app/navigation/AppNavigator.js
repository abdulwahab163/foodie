import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  MaterialCommunityIcons,
  AntDesign,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";
import NavHomeButton from "./NavHomeButton";

import theme from "../config/theme";
import routes from "./routes";
import More from "../screens/More";
import Offers from "../screens/Offers";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import MenuStack from "./MenuStack";
import MoreStack from "./MoreStack";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName={routes.HOME}
    screenOptions={{
      headerShown: false,
      tabBarLabelPosition: "below-icon",
      tabBarActiveTintColor: theme.custom.orange,
      tabBarInactiveTintColor: theme.custom.gray,
      tabBarStyle: {
        height: wp(16),
        paddingBottom: wp(2),
      },
      tabBarIconStyle: {},
      tabBarLabelStyle: {},
    }}
  >
    <Tab.Screen
      name={routes.MENU}
      component={MenuStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="appstore1" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.OFFERS}
      component={Offers}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="shopping-bag" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.HOME}
      component={Home}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <NavHomeButton
            focused={focused}
            onPress={() => navigation.navigate(routes.HOME)}
          />
        ),
        title: "",
      })}
    />
    <Tab.Screen
      name={routes.PROFILE}
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.MORE}
      component={MoreStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Foundation name="indent-more" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
