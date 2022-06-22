import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import MoreScreen from "../screens/More";
import PaymentDetails from "../screens/PaymentDetails";
import Orders from "../screens/Orders";
import Notification from "../screens/Notification";
import Inbox from "../screens/Inbox";
import AboutUs from "../screens/AboutUs";
import OrderStack from "./OrderStack";

const Stack = createStackNavigator();

const MoreStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.MORESCREEN}
      component={MoreScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.PAYMENTDETAILS}
      component={PaymentDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.ORDERS}
      component={OrderStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.NOTIFICATION}
      component={Notification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.INBOX}
      component={Inbox}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.ABOUTUS}
      component={AboutUs}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MoreStack;
