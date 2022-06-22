import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import SubMenu from "./../screens/SubMenu";
import MenuDetails from "../screens/MenuDetails";

const Stack = createStackNavigator();

const SubMenuStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.SUBMENUSCREEN}
      component={SubMenu}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.MENUDETAILS}
      component={MenuDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default SubMenuStack;
