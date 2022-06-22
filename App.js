import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import WelcomeSlider from "./app/components/WelcomeSlider";
import { getData, keys } from "./app/helpers/AsyncStorage";
import AppNavigator from "./app/navigation/AppNavigator";

const user = false;
const isFirstTime = false;

export default function App() {

  return (
    <>
      {isFirstTime ? (
        <WelcomeSlider />
      ) : (
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
