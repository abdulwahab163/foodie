import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { Form, FormField } from "../components/forms";
import { Label32, Label14, Label13, getFontSize } from "../components/AppText";
import Button from "./../components/Button";
import theme from "./../config/theme";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().max(255).label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({ navigation }) {
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={styles.container1}
        behavior={"position"}
      >
        <Form
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Label32 style={styles.loginText}>Login</Label32>
          <Label14 style={styles.loginSubText}>
            Add your details to login
          </Label14>

          <FormField
            Icon={
              <MaterialCommunityIcons
                name={"email"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            Icon={
              <MaterialCommunityIcons
                name={"lock"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <Button
            title="Login"
            fontSize={getFontSize(18)}
            bgColor={theme.custom.orange}
          />

          <Label14
            style={styles.forgotText}
            onPress={() => navigation.navigate(routes.RESET_PASSWORD)}
          >
            Forgot your password?
          </Label14>
          <Label14 style={styles.loginWithText}>or Login With</Label14>

          <Button
            title="Login With Facebook"
            bgColor={theme.custom.facebook}
            Icon={
              <MaterialCommunityIcons
                style={{ marginRight: 18 }}
                name="facebook"
                size={24}
                color="white"
              />
            }
          />
          <Button
            title="Login With Google"
            bgColor={theme.custom.google}
            Icon={
              <EvilIcons
                style={{ marginRight: 18 }}
                name="sc-google-plus"
                size={26}
                color="white"
              />
            }
          />

          <Label13
            style={{
              marginTop: hp(10),
              color: theme.custom.gray,
            }}
          >
            Don't have an Account?&nbsp;
            <Label13
              style={{ color: theme.custom.orange }}
              onPress={() => navigation.navigate(routes.REGISTER)}
            >
              Sign Up
            </Label13>
          </Label13>
        </Form>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    width: "100%",
  },
  container1: {
    alignItems: "center",
    width: "100%",
  },
  loginText: {
    fontWeight: "bold",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  loginSubText: {
    color: theme.text.secondaryLabel,
    marginBottom: wp(6),
  },
  forgotText: {
    color: theme.text.secondaryLabel,
    marginTop: wp(6),
    marginBottom: wp(3),
  },
  loginWithText: {
    color: theme.text.secondaryLabel,
    marginTop: wp(9),
    marginBottom: wp(3),
  },
  icon: {
    marginRight: 10,
  },
});

export default Login;
