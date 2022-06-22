import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import MenuScreen from "./../screens/Menu";
import SubMenuStack from "./SubMenuStack";

const Stack = createStackNavigator();

const MenuStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.MENUSCREEN}
      component={MenuScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.SUBMENUSTACK}
      component={SubMenuStack}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MenuStack;
