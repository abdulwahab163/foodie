import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import Orders from "../screens/Orders";
import Checkout from "../screens/Checkout";
import Address from "../screens/Address";

const Stack = createStackNavigator();

const OrderStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.ORDERSHOME}
      component={Orders}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.ADDRESS}
      component={Address}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.CHECKOUT}
      component={Checkout}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default OrderStack;
